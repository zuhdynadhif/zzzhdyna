import React, { useState, useEffect, useRef } from 'react';

const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScOz03xsxstFTqwUFwYPKj3kxLp0YguMKAGQbOPtG95mzhgcA/formResponse";
const COOLDOWN_SECONDS = 5; // Cooldown period in seconds

interface GoogleFormProps {
  neumorphismButton: React.CSSProperties;
  neumorphismInset: React.CSSProperties; // Added neumorphismInset
}

const GoogleForm: React.FC<GoogleFormProps> = ({ neumorphismButton, neumorphismInset }) => { // Destructure neumorphismInset
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldownActive, setCooldownActive] = useState(false);
  const [cooldownTimeRemaining, setCooldownTimeRemaining] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (cooldownActive) {
      return;
    }

    if (!message.trim()) {
      alert("Message cannot be empty. Please type a message.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("entry.3727651", message); // Data from React state

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      });
      setMessage(''); // Clear input after successful submission

      // Start cooldown
      setCooldownActive(true);
      setCooldownTimeRemaining(COOLDOWN_SECONDS);
      intervalRef.current = setInterval(() => {
        setCooldownTimeRemaining(prevTime => {
          if (prevTime <= 1) {
            clearInterval(intervalRef.current!);
            setCooldownActive(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mt-3 w-full max-w-md mx-auto">
      <div className="relative">
        <textarea
          placeholder="Text Me Anything (Anonymous)"
          className="w-full p-4 pr-16 text-xs text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
          style={{
            backgroundImage: "url('/anonymous.png')",
            backgroundSize: '30px 30px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 10px top 10px',
            paddingRight: '50px',
            minHeight: '120px', // Make the textarea larger
            resize: 'vertical'  // Allow user to resize vertically
          }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="mt-4 w-full p-3 text-xs text-gray-800 rounded-lg hover:bg-blue-600 transition-colors" // Reduced text size to xs
        style={isSubmitting || cooldownActive ? neumorphismInset : neumorphismButton} // Conditional style
        disabled={isSubmitting || cooldownActive}
      >
        {isSubmitting ? 'Sending...' : cooldownActive ? `Wait ${cooldownTimeRemaining}s` : 'Send'}
      </button>
    </form>
  );
};

export default GoogleForm;