"use client";

import React, { useState, useEffect } from 'react';

interface LoadingPageProps {
  duration?: number;
  onComplete: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ duration = 3000, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 50);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  if (!isVisible) {
    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 opacity-0"
        style={{ background: '#e0e5ec' }}
      />
    );
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500"
      style={{ background: '#e0e5ec' }}
    >
      <div className="relative flex items-center justify-center">
        
        {/* Layer 6 - Outermost */}
        <div
          className="flex items-center justify-center"
          style={{
            width: '240px',
            height: '240px',
            background: '#e0e5ec',
            borderRadius: '50%',
            animation: 'wave-6 1.5s infinite ease-in-out',
          }}
        >
          {/* Layer 5 */}
          <div
            className="flex items-center justify-center"
            style={{
              width: '200px',
              height: '200px',
              background: '#e0e5ec',
              borderRadius: '50%',
              animation: 'wave-5 1.5s infinite ease-in-out',
            }}
          >
            {/* Layer 4 */}
            <div
              className="flex items-center justify-center"
              style={{
                width: '160px',
                height: '160px',
                background: '#e0e5ec',
                borderRadius: '50%',
                animation: 'wave-4 1.5s infinite ease-in-out',
              }}
            >
              {/* Layer 3 */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: '120px',
                  height: '120px',
                  background: '#e0e5ec',
                  borderRadius: '50%',
                  animation: 'wave-3 1.5s infinite ease-in-out',
                }}
              >
                {/* Layer 2 */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: '80px',
                    height: '80px',
                    background: '#e0e5ec',
                    borderRadius: '50%',
                    animation: 'wave-2 1.5s infinite ease-in-out',
                  }}
                >
                  {/* Layer 1 */}
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: '40px',
                      height: '40px',
                      background: '#e0e5ec',
                      borderRadius: '50%',
                      animation: 'wave-1 1.5s infinite ease-in-out',
                    }}
                  >
                    {/* Center core - Innermost */}
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        background: '#e0e5ec',
                        borderRadius: '50%',
                        animation: 'wave-center 1.5s infinite ease-in-out',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave-center {
          0%, 85%, 100% { 
            box-shadow: 6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff;
            transform: scale(1);
          }
          10%, 15% { 
            box-shadow: inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff;
            transform: scale(0.98);
          }
        }
        
        @keyframes wave-1 {
          0%, 85%, 100% { 
            box-shadow: 6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff;
            transform: scale(1);
          }
          15%, 20% { 
            box-shadow: inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff;
            transform: scale(0.98);
          }
        }
        
        @keyframes wave-2 {
          0%, 85%, 100% { 
            box-shadow: 6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff;
            transform: scale(1);
          }
          20%, 25% { 
            box-shadow: inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff;
            transform: scale(0.98);
          }
        }
        
        @keyframes wave-3 {
          0%, 85%, 100% { 
            box-shadow: 6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff;
            transform: scale(1);
          }
          25%, 30% { 
            box-shadow: inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff;
            transform: scale(0.98);
          }
        }
        
        @keyframes wave-4 {
          0%, 85%, 100% { 
            box-shadow: 6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff;
            transform: scale(1);
          }
          30%, 35% { 
            box-shadow: inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff;
            transform: scale(0.98);
          }
        }
        
        @keyframes wave-5 {
          0%, 85%, 100% { 
            box-shadow: 6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff;
            transform: scale(1);
          }
          35%, 40% { 
            box-shadow: inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff;
            transform: scale(0.98);
          }
        }
        
        @keyframes wave-6 {
          0%, 85%, 100% { 
            box-shadow: 6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff;
            transform: scale(1);
          }
          40%, 45% { 
            box-shadow: inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff;
            transform: scale(0.98);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;