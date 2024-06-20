import React, { FC, useState } from "react";
import Image from "next/image";
import { EarnGold } from "@/assets/index";

interface Props {
  text?: string;
  className?: string;
  handleClick?: () => void;
  loading?: boolean;
  styles?: any;
  icon?: string;
  href?: string;
  children?: React.ReactNode;
}

const Button: FC<Props> = ({
  text,
  className,
  handleClick,
  loading,
  styles,
  icon,
  href, // Destructure href prop
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const onClickHandler = () => {
    if (handleClick) {
      setIsLoading(true); // Set loading state when button is clicked
      handleClick(); // Call the provided handleClick function
    }
  };

  if (href) {
    return (
      <a
        href={href}
        className={`bg-gradient-to-b from-[#3384D9] via-[#0051A6] to-[#073E66] text-white text-sm px-4 py-3 rounded-lg ${className}`}
        style={styles}>
        <div className="flex flex-row justify-center items-center space-x-3">
          <span>{text || children}</span>
          {icon && <Image src={icon} alt="earn" width={20} />}
        </div>
      </a>
    );
  }

  return (
    <button
      onClick={onClickHandler}
      className={`bg-gradient-to-b from-[#3384D9] via-[#0051A6] to-[#073E66] text-white text-sm px-4 py-3 rounded-lg ${className}`}
      disabled={isLoading} // Disable button when loading
      style={styles}>
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="flex flex-row justify-center items-center space-x-3">
          <span>{text || children}</span>
          {icon && <Image src={icon} alt="earn" width={20} />}
        </div>
      )}
    </button>
  );
};

export default Button;
