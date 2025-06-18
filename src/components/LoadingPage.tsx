"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

interface LoadingPageProps {
  duration?: number;
  onComplete: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ duration = 3000, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const { isDark } = useTheme();

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / (duration / 50));
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 50);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, duration);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [duration, onComplete]);

  const backgroundColor = isDark ? '#2d3748' : '#e0e5ec';
  const lightShadow = isDark ? '#4a5568' : '#ffffff';
  const darkShadow = isDark ? '#1a202c' : '#a3b1c6';
  const textColor = isDark ? '#e2e8f0' : '#2d3748';
  const accentColor = isDark ? '#63b3ed' : '#3182ce';
  if (!isVisible) {
    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 opacity-0"
        style={{ background: backgroundColor }}
      />
    );
  }

  return (    <div 
      className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500"
      style={{ background: backgroundColor }}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Loading animation */}
        <div className="relative flex items-center justify-center mb-8">
          {/* Layer 6 - Outermost */}
          <div
            className="flex items-center justify-center"
            style={{
              width: '240px',
              height: '240px',
              background: backgroundColor,
              borderRadius: '50%',
              animation: 'wave-6 1.5s infinite ease-in-out',
            }}
          >
            {/* ...existing layers... */}
            <div
              className="flex items-center justify-center"
              style={{
                width: '200px',
                height: '200px',
                background: backgroundColor,
                borderRadius: '50%',
                animation: 'wave-5 1.5s infinite ease-in-out',
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: '160px',
                  height: '160px',
                  background: backgroundColor,
                  borderRadius: '50%',
                  animation: 'wave-4 1.5s infinite ease-in-out',
                }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: '120px',
                    height: '120px',
                    background: backgroundColor,
                    borderRadius: '50%',
                    animation: 'wave-3 1.5s infinite ease-in-out',
                  }}
                >
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: '80px',
                      height: '80px',
                      background: backgroundColor,
                      borderRadius: '50%',
                      animation: 'wave-2 1.5s infinite ease-in-out',
                    }}
                  >
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: '40px',
                        height: '40px',
                        background: backgroundColor,
                        borderRadius: '50%',
                        animation: 'wave-1 1.5s infinite ease-in-out',
                      }}
                    >
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          background: backgroundColor,
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

        {/* Loading text */}
        <div className="text-center">
          <h2 
            className="text-2xl font-semibold mb-4"
            style={{ 
              color: textColor,
              fontFamily: isDark ? "'Inter', sans-serif" : "'Poppins', sans-serif",
              letterSpacing: '0.05em'
            }}
          >
            Welcome
          </h2>
          
          {/* Progress bar */}
          <div 
            className="w-64 h-2 rounded-full overflow-hidden"
            style={{
              background: darkShadow,
              boxShadow: `inset 3px 3px 6px ${darkShadow}, inset -3px -3px 6px ${lightShadow}`
            }}
          >
            <div
              className="h-full rounded-full transition-all duration-100 ease-out"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${accentColor}, ${isDark ? '#9f7aea' : '#805ad5'})`,
                boxShadow: `0 0 8px ${accentColor}50`
              }}
            />
          </div>
          
          <p 
            className="text-sm mt-4"
            style={{ 
              color: isDark ? '#a0aec0' : '#718096',
              fontFamily: isDark ? "'Inter', sans-serif" : "'Poppins', sans-serif"
            }}
          >
            Loading...
          </p>
        </div>
      </div><style jsx>{`
        @keyframes wave-center {
          0%, 85%, 100% { 
            box-shadow: 6px 6px 12px ${darkShadow}, -6px -6px 12px ${lightShadow};
            transform: scale(1);
          }
          10%, 15% { 
            box-shadow: inset 6px 6px 12px ${darkShadow}, inset -6px -6px 12px ${lightShadow};
            transform: scale(0.98);
          }
        }
        
        @keyframes wave-1 {
          0%, 85%, 100% { 
            box-shadow: 6px 6px 12px ${darkShadow}, -6px -6px 12px ${lightShadow};
            transform: scale(1);
          }
          15%, 20% { 
            box-shadow: inset 6px 6px 12px ${darkShadow}, inset -6px -6px 12px ${lightShadow};
            transform: scale(0.98);
          }
        }
        
        @keyframes wave-2 {
          0%, 85%, 100% { 
            box-shadow: 6px 6px 12px ${darkShadow}, -6px -6px 12px ${lightShadow};
            transform: scale(1);
          }
          20%, 25% { 
            box-shadow: inset 6px 6px 12px ${darkShadow}, inset -6px -6px 12px ${lightShadow};
            transform: scale(0.98);
          }
        }
        
        @keyframes wave-3 {
          0%, 85%, 100% { 
            box-shadow: 6px 6px 12px ${darkShadow}, -6px -6px 12px ${lightShadow};
            transform: scale(1);
          }
          25%, 30% { 
            box-shadow: inset 6px 6px 12px ${darkShadow}, inset -6px -6px 12px ${lightShadow};
            transform: scale(0.98);
          }
        }
        
        @keyframes wave-4 {
          0%, 85%, 100% { 
            box-shadow: 6px 6px 12px ${darkShadow}, -6px -6px 12px ${lightShadow};
            transform: scale(1);
          }
          30%, 35% { 
            box-shadow: inset 6px 6px 12px ${darkShadow}, inset -6px -6px 12px ${lightShadow};
            transform: scale(0.98);
          }
        }
        
        @keyframes wave-5 {
          0%, 85%, 100% { 
            box-shadow: 6px 6px 12px ${darkShadow}, -6px -6px 12px ${lightShadow};
            transform: scale(1);
          }
          35%, 40% { 
            box-shadow: inset 6px 6px 12px ${darkShadow}, inset -6px -6px 12px ${lightShadow};
            transform: scale(0.98);
          }
        }
        
        @keyframes wave-6 {
          0%, 85%, 100% { 
            box-shadow: 6px 6px 12px ${darkShadow}, -6px -6px 12px ${lightShadow};
            transform: scale(1);
          }
          40%, 45% { 
            box-shadow: inset 6px 6px 12px ${darkShadow}, inset -6px -6px 12px ${lightShadow};
            transform: scale(0.98);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;