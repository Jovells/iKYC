import { ChangeEvent, useState } from 'react';

interface Option {
    value: string;
    label: string;
    icon: React.ReactNode;
}

interface SelectInputProps {
    options: Option[];
    value: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    placeholder?: string;
}


const SelectInput: React.FC<SelectInputProps> = ({ options, value, onChange, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (optionValue: string) => {
        onChange({ target: { value: optionValue } } as ChangeEvent<HTMLSelectElement>);
        setIsOpen(false);
    };

    const selectedOption = options.find(option => option.value === value);

    return (
        <div className="relative inline-block text-left min-w-[250px]">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-between w-full rounded-md border border-[#C3D5F173] shadow-sm px-4 py-2 bg-transparent text-sm font-medium text-gray-700 hover:bg-transparent focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="flex items-center">
                        {selectedOption ? (
                            <>
                                <span className="mr-2">{selectedOption.icon}</span>
                                {selectedOption.label}
                            </>
                        ) : (
                            placeholder
                        )}
                    </span>
                    <svg
                        className="ml-2 -mr-1 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                >
                    <div className="py-1" role="none">
                        {options.map(option => (
                            <button
                                key={option.value}
                                onClick={() => handleSelect(option.value)}
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                            >
                                <span className="mr-2">{option.icon}</span>
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SelectInput;