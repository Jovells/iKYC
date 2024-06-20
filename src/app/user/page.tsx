"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchIdImage } from "../kyc/sumsub";
import { useUser } from "@/app/hooks/useUser";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface AvatarProps {
  imgSrc: string;
  altText: string;
}

const Avatar: React.FC<AvatarProps> = ({ imgSrc, altText }) => (
  <img
    loading="lazy"
    src={imgSrc}
    alt={altText}
    className="w-100 h-64 object-cover rounded mb-4"
  />
);

interface ApplicantDetailProps {
  label: string;
  value: string;
  isId?: boolean;
}

const ApplicantDetail: React.FC<ApplicantDetailProps> = ({
  label,
  value,
  isId,
}) => (
  <div className="mt-5 flex gap-5 flex-row items-center">
    <div>{label}</div>
    <div>{value}</div>
  </div>
);

export default function Kyc() {
  const { user } = useUser();

  console.log("User: ", user);

  const { data: applicant } = useQuery({
    queryKey: ["applicant"],
    queryFn: () =>
      fetch(BASE_URL + "/api/user/" + user?.id).then((res) => res.json()),
    enabled: !!user?.id,
  });

  const { data: idImages } = useQuery({
    queryKey: ["idImage"],
    queryFn: () => fetchIdImage(applicant!.id, applicant!.inspectionId),
    enabled: !!applicant?.id,
  });

  if (!applicant) {
    return <div>Loading applicant data...</div>;
  }
  console.log("Applicant: ", applicant);

  return (
    <div className="flex flex-col items-center justify-center px-14 pt-12 pb-20 bg-gray-50 min-h-screen">
      <header className="flex gap-5 w-full whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-1 gap-1 justify-center self-start px-3.5 py-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bea0c53ab7b74bd1995a57a93d9195a960c1cba2f089be7f403fbe91ae4139c?apiKey=54c52d026a6a417bb3deffe3afd37be8&"
            alt="Logo"
            className="shrink-0 my-auto w-6 aspect-[1.04]"
          />
          <div className="flex gap-0.5 justify-center items-start py-1">
            <div className="text-2xl text-black">i</div>
            <div className="text-xl font-semibold text-sky-400">Kyc</div>
          </div>
        </div>
        <div className="flex flex-1 gap-1 justify-center px-5 py-2.5 text-sm font-medium tracking-tight leading-4 rounded-lg text-zinc-600">
          <div className="my-auto">Logout</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/74e05522e33ee3b04c99664c018d6062733e32074f4fdd72bc8ff93322134c9d?apiKey=54c52d026a6a417bb3deffe3afd37be8&"
            alt="Logout icon"
            className="shrink-0 w-6 aspect-square"
          />
        </div>
      </header>
      <main className="flex flex-col items-center px-14 py-9 mt-12 max-w-full bg-white rounded-xl shadow-lg w-[1000px] max-md:px-5">
        <h1 className="text-4xl font-medium text-sky-600">KYC Details</h1>
        <section className="mt-6 text-base text-neutral-500">
          Applicant Information
        </section>
        <section className="self-stretch mt-6 flex flex-col items-center">
          <div className="flex gap-4">
            {idImages?.map((image: any, i: number) => (
              <Avatar
                key={i}
                imgSrc={"data:" + image.contentType + ";base64," + image.data}
                altText="ID Image"
              />
            ))}
          </div>
          <div className="text-sm text-zinc-900 mt-6">
            <ApplicantDetail
              label="First Name"
              value={applicant.info.firstName}
            />
            <ApplicantDetail
              label="Last Name"
              value={applicant.info.firstNameEn}
            />
            <ApplicantDetail
              label="ID Number"
              value={applicant.info.idDocs[1].number}
              isId
            />
            <ApplicantDetail label="Date of Birth" value={applicant.info.dob} />
            <ApplicantDetail
              label="Nationality"
              value={applicant.info.country}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
