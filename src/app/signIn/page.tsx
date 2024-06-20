import * as React from "react";
import { Button } from "../components";
import AuthButton from "../components/AuthButton.server";

interface InputFieldProps {
  label: string;
  inputType: string;
  id: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, inputType, id }) => (
  <div>
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    <input
      type={inputType}
      id={id}
      placeholder={label}
      aria-label={label}
      className="shrink-0 mt-2 w-full h-11 rounded-md border border-solid"
    />
  </div>
);

interface DividerProps {
  text: string;
}

const Divider: React.FC<DividerProps> = ({ text }) => (
  <div className="flex gap-5 justify-between items-center self-center mt-6 text-xs whitespace-nowrap text-neutral-400">
    <div className="shrink-0 self-stretch my-auto h-px border border-solid bg-indigo-200 bg-opacity-50 border-indigo-200 border-opacity-50 w-[132px]" />
    <div className="self-stretch">{text}</div>
    <div className="shrink-0 self-stretch my-auto h-px border border-solid bg-indigo-200 bg-opacity-50 border-indigo-200 border-opacity-50 w-[132px]" />
  </div>
);

const MyComponent: React.FC = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col items-start pt-8 pr-8 pb-20 pl-20 text-sm bg-white rounded-xl shadow-lg max-w-[542px] max-md:px-5">
        <header className="flex gap-5 justify-between items-start self-end max-w-full text-xl font-medium text-sky-600 w-[267px]">
          <h1 className="mt-3.5">Sign In</h1>
        </header>
        <p className="self-center mt-6 text-zinc-500">
          Please Sign with Your username and Email or Sign In via Google
        </p>
        <form className="w-full">
          <InputField label="Username" inputType="text" id="username" />
          <InputField label="Email" inputType="email" id="email" />
        </form>
        <AuthButton />

        <Divider text="or" />
        <div className="flex justify-center mt-6 w-full">
          <button
            className="flex gap-5 px-3.5 py-2.5 font-medium tracking-wide text-center bg-white rounded-3xl border border-gray-300 border-solid leading-[121%] text-zinc-700 max-md:flex-wrap max-md:max-w-full"
            aria-label="Sign in with Google">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcdc481258b0bc79e843466a7e5e0bed1a398949fd1f24ce1bcf6ca00d3a7ece?apiKey=54c52d026a6a417bb3deffe3afd37be8&"
              alt="Google icon"
              className="shrink-0 aspect-[0.95] w-[19px]"
            />
            <span className="flex-auto">Sign in with Google</span>
          </button>
        </div>
        <div className="flex justify-center mt-12 w-full"></div>
      </div>
    </section>
  );
};

export default MyComponent;
