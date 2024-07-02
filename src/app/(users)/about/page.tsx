import PageTitle from "@/components/common/PageTitle";
import SimpleLayout from "@/components/layouts/Simple";
import About from "@/components/users/About/About";

const page = () => {
  return (
    <SimpleLayout>
      <PageTitle image={`/images/page title bg.webp`} title={'About'} description={'We are awesome designer'} />
      <About/>
    </SimpleLayout>
  );
};

export default page;
