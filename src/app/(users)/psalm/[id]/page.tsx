import SimpleLayout from "@/components/layouts/Simple";
import SinglePsalm from "@/components/users/Psalms/SinglePsalm";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const page = () => {
  
  return (
    <SimpleLayout>
      <SinglePsalm />
    </SimpleLayout>
  );
};

export default page;
