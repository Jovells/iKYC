import React, { FC, useState } from 'react';

interface Props {
    text: string;
    className?: string;
    handleClick?: () => void;
    loading?: boolean; // New prop for loading state
}

const Button: FC<Props> = ({ text, className, handleClick, loading }) => {
    const [isLoading, setIsLoading] = useState(false); // State for loading indicator

    const onClickHandler = () => {
        if (handleClick) {
            setIsLoading(true); // Set loading state when button is clicked
            handleClick(); // Call the provided handleClick function
        }
    };

    return (
        <button
            onClick={onClickHandler}
            className={`bg-gradient-to-b from-[#3384D9] via-[#0051A6] to-[#073E66] text-white text-sm px-4 py-3 rounded-lg ${className}`}
            disabled={isLoading} // Disable button when loading
        >
            {isLoading ? 'Loading...' : text} {/* Show 'Loading...' text when loading */}
        </button>
    );
};

export default Button;
