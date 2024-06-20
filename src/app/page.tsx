import React from "react";
import { Button } from "./components";
import Image from "next/image";
import { LandingImage } from "@/assets";
// import AuthButton from "./components/AuthButton.server";

type NavItemProps = {
  label: string;
};

type IconButtonProps = {
  src: string;
  alt: string;
  className?: string;
};

type SectionCardProps = {
  src: string;
  alt: string;
  label: string;
};

type HighlightCardProps = {
  icon: string;
  alt: string;
  title: string;
  description: string;
};

const NavItem: React.FC<NavItemProps> = ({ label }) => (
  <div className="justify-center px-5 py-2.5 rounded-lg">{label}</div>
);

const IconButton: React.FC<IconButtonProps> = ({
  src,
  alt,
  className = "shrink-0 my-auto w-2 aspect-square",
}) => <img loading="lazy" src={src} alt={alt} className={className} />;

const SectionCard: React.FC<SectionCardProps> = ({ src, alt, label }) => (
  <div className="flex gap-2.5 justify-between px-3 py-2 rounded-lg bg-zinc-800 bg-opacity-0">
    <div className="flex gap-2 justify-between px-px">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="shrink-0 aspect-[0.93] w-[15px]"
      />
      <div>{label}</div>
    </div>
    <IconButton
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc013798f86248751e9e2c623b1b82456472032df292f09820009047782f5098?apiKey=54c52d026a6a417bb3deffe3afd37be8&"
      alt="icon"
    />
  </div>
);

const HighlightCard: React.FC<HighlightCardProps> = ({
  icon,
  alt,
  title,
  description,
}) => (
  <div className="flex gap-5 justify-between leading-4 text-neutral-700 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
    <div className="flex flex-col max-md:max-w-full">
      <div className="flex gap-2.5 self-start leading-[114%]">
        <img
          loading="lazy"
          src={icon}
          alt={alt}
          className="shrink-0 my-auto border-blue-500 border-solid aspect-[33.33] border-[3px] stroke-[2.5px] stroke-blue-500 w-[70px]"
        />
        <div className="flex-auto">{title}</div>
      </div>
      <div className="mt-7 text-3xl font-medium tracking-tight text-sky-600 max-md:max-w-full">
        We provide <span className="text-sky-600">Seamless</span> Flows <br />
      </div>
      <div className="mt-5 text-3xl font-medium tracking-tight leading-4 max-md:max-w-full">
        {description}
      </div>
      <div className="mt-8 max-md:max-w-full">
        ed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque l<br />
        audantium, totam rem aperiam, eaque ipsa quae ab illo inventore
      </div>
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/277cebbb5a3747abfe62318e73e357b0d10ad603bf0f875546b02c2d2af4a9a0?apiKey=54c52d026a6a417bb3deffe3afd37be8&"
      alt="icon"
      className="shrink-0 my-auto max-w-full rounded-full aspect-[1.01] w-[156px]"
    />
  </div>
);

const MyComponent: React.FC = () => {
  const navItems = [
    "Visit iExchange",
    "About Us",
    "Already have an Account? Log In",
    "Sign Up",
  ];

  return (
    <div className="flex flex-col">
      <main className="flex overflow-hidden relative flex-col px-14 pt-5 pb-20 mt-0 w-full min-h-[735px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbdb1c44db3880a915880e4f7e98d406ef98ab3976eebdf95639f056450bcf8e?apiKey=54c52d026a6a417bb3deffe3afd37be8&"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <section className="flex relative gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-1 justify-center self-start mt-3.5 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b30dd30f24fc07dff7225adab9d2681117d35cfd3c3d0535526929e8da387c2?apiKey=54c52d026a6a417bb3deffe3afd37be8&"
              alt="icon12"
              className="shrink-0 my-auto aspect-square w-[29px]"
            />
            <div className="flex gap-1.5 items-start pt-2.5 pb-px">
              <div className="text-xl text-white">i</div>
              <div className="text-2xl font-semibold text-sky-400">Kyc</div>
            </div>
          </div>
          <nav className="flex gap-5 justify-between text-sm font-medium tracking-tight leading-4 text-gray-200 max-md:flex-wrap">
            {navItems.map((label, index) => (
              <NavItem key={index} label={label} />
            ))}
          </nav>
        </section>

        <section className="relative self-center mt-32 w-full max-w-[1293px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 relative">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col text-6xl tracking-tighter leading-4 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-3">
                <div className="text-white ">
                  Make your Life Easier <br />
                </div>
                <div className="mt-4 text-white ">
                  Relief yourself from Stress <br />
                </div>
                <div className="mt-8 text-sm tracking-tight text-white max-md:max-w-full">
                  ed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque l<br /> audantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore
                </div>
                <div className="flex gap-5 justify-between self-start mt-6 text-sm font-medium tracking-tight leading-4">
                  <Button>Signin</Button>
                  <div className="flex gap-1 justify-center px-5 py-2.5 text-gray-200 rounded-lg border border-sky-600 border-solid bg-blue-500 bg-opacity-0">
                    <div className="my-auto">Know Us More</div>
                    <IconButton
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd4f6d0dd39ee8cf6e75fb125db4b9857ac0b202951f6b96d0d43eed70949d92?apiKey=54c52d026a6a417bb3deffe3afd37be8&"
                      alt="icon13"
                      className="shrink-0 w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-0">
              <Image
                width={500}
                height={600}
                loading="lazy"
                src={LandingImage}
                alt="icon14"
                // className="grow mt-10 w-full aspect-[1.49] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center px-16 pb-20 w-full text-sm font-medium tracking-tight leading-4 text-sky-700 bg-gray-50 max-md:px-5 max-md:max-w-full">
        <section className="flex z-10 justify-center items-center px-16 py-20 mt-0 mb-20 w-full bg-gray-50 rounded-md shadow-lg max-w-[1200px] max-md:px-5 max-md:mb-10 max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[951px]">
            <HighlightCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0521ccd1c0ed7c075cd2a776207da6350b8b3c40e2a5bd3ea5aa61e3b453c61a?apiKey=54c52d026a6a417bb3deffe3afd37be8&"
              alt="highlight icon"
              title="How iKyc can be helpful"
              description="Concerning your KYC’s"
            />
            <div className="flex gap-5 px-px mt-14 w-full whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              {["Government", "Business", "Household", "Utilities"].map(
                (label, idx) => (
                  <div
                    key={idx}
                    className="flex flex-1 gap-1 justify-center px-5 py-2.5 bg-white rounded-lg shadow-lg">
                    <IconButton
                      src={`http://b.io/ext_${20 + idx * 2}-`}
                      alt={`${label} icon`}
                    />
                    <div className="my-auto">{label}</div>
                    <IconButton
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e0300b9f2b5a09c2cbd776e3b3f3036bd0eea17be5603da6a6b429f56aec0a1?apiKey=54c52d026a6a417bb3deffe3afd37be8&"
                      alt="next icon"
                    />
                  </div>
                )
              )}
            </div>
            <div className="flex gap-5 px-px mt-8 w-full max-md:flex-wrap max-md:max-w-full">
              {["Education", "Taxations", "Credit and Loans", "Employment"].map(
                (label, idx) => (
                  <div
                    key={idx}
                    className="flex flex-1 gap-1 justify-center px-5 py-2.5 whitespace-nowrap bg-white rounded-lg shadow-lg">
                    <IconButton
                      src={`http://b.io/ext_${26 + idx * 2}-`}
                      alt={`${label} icon`}
                    />
                    <div className="my-auto">{label}</div>
                    <IconButton
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e0300b9f2b5a09c2cbd776e3b3f3036bd0eea17be5603da6a6b429f56aec0a1?apiKey=54c52d026a6a417bb3deffe3afd37be8&"
                      alt="next icon"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default MyComponent;
