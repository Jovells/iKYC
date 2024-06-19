"use client";
import React from "react";
import SumsubWebSdk from "@sumsub/websdk-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchAccessToken } from "./sumsub";
import { useRouter } from "next/navigation";

export default function Kyc() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data: accessToken, isLoading } = useQuery({
    queryKey: ["accessToken"],
    queryFn: () => fetchAccessToken("hjh"),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <SumsubWebSdk
        accessToken={accessToken}
        expirationHandler={async () => {
          const newToken = await fetchAccessToken("hjh");
          queryClient.setQueryData(["accessToken"], newToken);
        }}
        config={{
          lang: "en",
          // email: applicantemail,
          // phone: applicantPhone
        }}
        options={{ addViewportTag: false, adaptIframeHeight: true }}
        onMessage={(type: any, payload: any) => {
          console.log("onMessage", type, payload);
          if (payload.reviewStatus === "completed") {
            router.push("/user");
          }
        }}
        onError={(type: any, payload: any) => {
          console.log("onError", type, payload);
        }}
      />
    </div>
  );
}
