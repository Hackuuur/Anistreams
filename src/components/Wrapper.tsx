import React, { ReactNode } from 'react';

interface WrapperProps {
  className?: string;
  children: ReactNode;
}
export const Wrapper: React.FC<WrapperProps> = ({ className, children }) => {
  return (
    <div  className={`px-4 w-full  ${className || ''}`}>{children}</div>
  )
}
