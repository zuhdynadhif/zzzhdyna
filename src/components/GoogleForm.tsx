import React, { useState } from 'react';

const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScOz03xsxstFTqwUFwYPKj3kxLp0YguMKAGQbOPtG95mzhgcA/formResponse";

interface GoogleFormProps {
  neumorphismButton: React.CSSProperties;
}

const GoogleForm: React.FC<GoogleFormProps> = ({ neumorphismButton }) => {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
      setMessage('');
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
        <input
          type="text"
          placeholder="Text Me Anything (Anonymous)"
          className="w-full p-4 pr-16 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
          style={{
            backgroundImage: "url('/anonymous.png')",
            backgroundSize: '30px 30px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 10px center',
            paddingRight: '50px'
          }}
          value={message}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="mt-4 w-full p-3 bg-blue-500 text-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
        style={neumorphismButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
};

export default GoogleForm;