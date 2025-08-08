
import React from 'react';

interface IconProps {
  className?: string;
}

const IconWrapper: React.FC<React.PropsWithChildren<IconProps>> = ({ className, children }) => (
  <div className={`relative w-16 h-16 flex items-center justify-center ${className}`}>
    <div className="absolute inset-0 bg-[#FFB74D] opacity-20 rounded-full blur-lg"></div>
    {children}
  </div>
);

export const InnovationIcon: React.FC<IconProps> = ({ className }) => (
  <IconWrapper className={className}>
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 21.5C9 22.3284 9.67157 23 10.5 23H13.5C14.3284 23 15 22.3284 15 21.5V21H9V21.5Z" stroke="#8A4DBC" strokeWidth="1.5"/>
      <path d="M12 19C15.3137 19 18 16.3137 18 13C18 9.68629 15.3137 7 12 7C8.68629 7 6 9.68629 6 13C6 14.8193 6.84159 16.4673 8 17.5" stroke="#8A4DBC" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 16V13M12 13V10M12 13H15M12 13H9" stroke="#FFB74D" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 2L12 4" stroke="#8A4DBC" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 12L18 12" stroke="#8A4DBC" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 12L6 12" stroke="#8A4DBC" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17.6569 6.34315L16.2426 7.75736" stroke="#8A4DBC" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7.75736 16.2426L6.34315 17.6569" stroke="#8A4DBC" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  </IconWrapper>
);

export const EquityIcon: React.FC<IconProps> = ({ className }) => (
  <IconWrapper className={className}>
     <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 19V4.5C4 4.22386 4.22386 4 4.5 4H19.5C19.7761 4 20 4.22386 20 4.5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19Z" stroke="#8A4DBC" strokeWidth="1.5"/>
        <path d="M8 4V20" stroke="#8A4DBC" strokeWidth="1.5"/>
        <path d="M12 11L14.5 13L12 15" stroke="#FFB74D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 7.5C16.2761 7.5 16.5 7.27614 16.5 7C16.5 6.72386 16.2761 6.5 16 6.5C15.7239 6.5 15.5 6.72386 15.5 7C15.5 7.27614 15.7239 7.5 16 7.5Z" fill="#FFB74D" stroke="#FFB74D"/>
    </svg>
  </IconWrapper>
);

export const CollaborationIcon: React.FC<IconProps> = ({ className }) => (
  <IconWrapper className={className}>
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 19C10.2091 19 12 17.2091 12 15C12 12.7909 10.2091 11 8 11C5.79086 11 4 12.7909 4 15C4 17.2091 5.79086 19 8 19Z" stroke="#8A4DBC" strokeWidth="1.5"/>
        <path d="M16 19C18.2091 19 20 17.2091 20 15C20 12.7909 18.2091 11 16 11C13.7909 11 12 12.7909 12 15C12 17.2091 13.7909 19 16 19Z" stroke="#8A4DBC" strokeWidth="1.5"/>
        <path d="M12 15L12 5" stroke="#8A4DBC" strokeWidth="1.5"/>
        <path d="M12 5C10.8954 5 10 4.10457 10 3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3C14 4.10457 13.1046 5 12 5Z" stroke="#8A4DBC" strokeWidth="1.5"/>
        <path d="M11 12.5L8.5 9" stroke="#FFB74D" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M13 12.5L15.5 9" stroke="#FFB74D" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  </IconWrapper>
);

export const LifelongLearningIcon: React.FC<IconProps> = ({ className }) => (
  <IconWrapper className={className}>
     <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L21 12L12 21L3 12L12 3Z" stroke="#8A4DBC" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#8A4DBC" strokeWidth="1.5"/>
        <path d="M12 3V9" stroke="#8A4DBC" strokeWidth="1.5"/>
        <path d="M21 12H15" stroke="#8A4DBC" strokeWidth="1.5"/>
        <path d="M12 21V15" stroke="#8A4DBC" strokeWidth="1.5"/>
        <path d="M3 12H9" stroke="#8A4DBC" strokeWidth="1.5"/>
        <path d="M17 7L19 5" stroke="#FFB74D" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  </IconWrapper>
);

export const StudentCentredIcon: React.FC<IconProps> = ({ className }) => (
    <InnovationIcon className={className} />
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
