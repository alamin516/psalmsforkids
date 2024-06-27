import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PsalmsButtons from "./PsalmsButtons";
import VideoTab from "./VideoTab";
import Genre from "./Genre";
import QuizTab from "./QuizTab";

const TabsButtons = () => {
  return (
    <div className="max-w-6xl rounded-xl overflow-hidden shadow-lg text-white lg:glass-panel">
      <div className="lg:p-5 p-2">
        <h2 className="text-center">Welcome to Psalms for Kids</h2>

        {/* Tabs */}
        <div className="mt-10">
          <Tabs defaultValue="psalms" className="w-full">
            <TabsList className="grid w-full grid-cols-6 gap-1 bg-transparent">
              <TabsTrigger value="psalms">Psalms</TabsTrigger>
              <TabsTrigger value="genre">Genre</TabsTrigger>
              <TabsTrigger value="quiz">Quiz</TabsTrigger>
              <TabsTrigger value="songs">Songs</TabsTrigger>
              <TabsTrigger value="audio">Audio</TabsTrigger>
              <TabsTrigger value="video">Video</TabsTrigger>
            </TabsList>
            <div className="pt-4">
              <TabsContent value="psalms">
                <PsalmsButtons />
              </TabsContent>
              <TabsContent value="genre">
                <Genre/>
              </TabsContent>
              <TabsContent value="quiz">
                <QuizTab/>
              </TabsContent>
              <TabsContent value="songs">Songs</TabsContent>
              <TabsContent value="audio">Audio</TabsContent>
              <TabsContent value="video">
                <VideoTab />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TabsButtons;
