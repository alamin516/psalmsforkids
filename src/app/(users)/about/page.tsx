import PageTitle from "@/components/common/PageTitle";
import SimpleLayout from "@/components/layouts/Simple";

const page = () => {
  return (
    <SimpleLayout>
      <PageTitle image={`/images/page title bg.webp`} title={'About'} description={'We are awesome designer'} />
    </SimpleLayout>
  );
};

export default page;
