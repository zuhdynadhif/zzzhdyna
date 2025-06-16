import { useState, useEffect } from 'react';

// Define types for window dimensions
interface WindowSize {
  width: number;
  height: number;
}

// Define breakpoints for responsive design
export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

// Types for breakpoints
export type Breakpoint = keyof typeof breakpoints;

// Custom hook to get window dimensions
export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures effect runs only on mount and unmount

  return windowSize;
};

// Helper to determine current breakpoint
export const getCurrentBreakpoint = (width: number): Breakpoint => {
  if (width >= breakpoints.xxl) return 'xxl';
  if (width >= breakpoints.xl) return 'xl';
  if (width >= breakpoints.lg) return 'lg';
  if (width >= breakpoints.md) return 'md';
  if (width >= breakpoints.sm) return 'sm';
  return 'xs';
};

// Helper functions to check specific breakpoints
export const isExtraSmallScreen = (width: number): boolean => width < breakpoints.sm;
export const isSmallScreen = (width: number): boolean => width >= breakpoints.sm && width < breakpoints.md;
export const isMediumScreen = (width: number): boolean => width >= breakpoints.md && width < breakpoints.lg;
export const isLargeScreen = (width: number): boolean => width >= breakpoints.lg && width < breakpoints.xl;
export const isExtraLargeScreen = (width: number): boolean => width >= breakpoints.xl && width < breakpoints.xxl;
export const isExtraExtraLargeScreen = (width: number): boolean => width >= breakpoints.xxl;

// Helper to check if the screen is at least a certain breakpoint
export const isMinWidth = (breakpoint: Breakpoint, width: number): boolean => 
  width >= breakpoints[breakpoint];

// Helper to check if the screen is at most a certain breakpoint
export const isMaxWidth = (breakpoint: Breakpoint, width: number): boolean => 
  width < breakpoints[breakpoint === 'xs' ? 'sm' : breakpoint];