import PageTitle from "@/components/common/PageTitle";
import SimpleLayout from "@/components/layouts/Simple";
import Contact from "@/components/users/Contact/Contact";
import React from "react";

const page = () => {
  return (
    <SimpleLayout>
      <PageTitle
        title="Contact"
        description="Thank You For Stopping by"
        image="/images/Contact.webp"
      />
      <Contact/>
      
    </SimpleLayout>
  );
};

export default page;
