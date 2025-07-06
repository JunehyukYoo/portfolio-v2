import {
  Card,
  CardHeader,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About = () => {
  return (
    <>
      <div className="h-full pt-30 pl-6 pr-6 pb-6 grid grid-cols-3 grid-rows-2 gap-4">
        <Card className="col-span-1 row-span-2">About section</Card>
        <Card className="col-span-1 row-span-1">
          <Tabs defaultValue="visual">
            <CardHeader>
              <h1 className="font-bold text-2xl">Skills</h1>
              <TabsList>
                <CardAction>
                  <TabsTrigger value="visual">Visual</TabsTrigger>
                  <TabsTrigger value="text">Text</TabsTrigger>
                </CardAction>
              </TabsList>
            </CardHeader>
            <TabsContent value="visual">
              <CardContent>Visual.</CardContent>
            </TabsContent>
            <TabsContent value="text">
              <CardContent>Text.</CardContent>
            </TabsContent>
          </Tabs>
        </Card>
        <Card className="col-span-1 row-span-2">Experience</Card>
        <Card className="col-span-1 row-span-1">Education</Card>
      </div>
    </>
  );
};

export default About;
