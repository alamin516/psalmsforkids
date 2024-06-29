import SimpleLayout from "@/components/layouts/Simple";
import BannerOne from "@/components/users/Home/BannerOne";
import BannerTwo from "@/components/users/Home/BannerTwo";
import { HomeCarousel } from "@/components/users/Home/HomeCarousel";
import TabsButtons from "@/components/users/Home/TabsButtons";
import TimelineSlider from "@/components/users/Home/TimelineSlider";

export default function Home() {
  return (
    <SimpleLayout>
      <HomeCarousel />
      <div className="back-img">
        <div className="shadow-lg text-white bg-black  bg-opacity-60 backdrop-filter backdrop-blur-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-10 lg:px-5 sm:px-5 px-2  text-white">
            {/* Banner 1 */}
            <div className="col-span-3 hidden lg:block text-center">
              <div className="flex justify-center">
                <BannerOne />
              </div>
            </div>
            {/* Tabs */}
            <div className="lg:col-span-6 mb-5">
              <TabsButtons />
            </div>
            {/* Banner 2 */}
            <div className="col-span-3 hidden lg:block">
              <div className="flex justify-center">
                <BannerTwo />
              </div>
            </div>
          </div>
          {/* Timeline slider */}
          <div className=" text-white  py-10">
            <TimelineSlider />
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
}
