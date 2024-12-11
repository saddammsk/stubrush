import React from 'react';

interface TextProps {
  text: string;
}

const Text: React.FC<TextProps> = ({ text }) => {
  return (
    <div>
      <h4 className="text-center font-poppins md:text-[40px] text-[30px] font-bold">{text}</h4>
    </div>
  );
};

export default Text;
