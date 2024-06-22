import PageTitle from "@/components/common/PageTitle";
import SimpleLayout from "@/components/layouts/Simple";

const page = () => {
  return (
    <SimpleLayout>
      <PageTitle image={`https://psalmsforkids.com/wp-content/uploads/2023/04/AdobeStock_95050811.webp`} title={'Blog'} description={'We are awesome designer'} />
    </SimpleLayout>
  );
};

export default page;