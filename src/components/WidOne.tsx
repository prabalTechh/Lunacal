import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import SvgOne from "./ui/SvgOne";
import SvgTwo from "./ui/SvgTwo";

const WidOne = () => {
  return (
    <div className="h-[316px] w-full   flex flex-col   ">
      <div className="absolute flex flex-col gap-20 pl-2 lg:pt-4 pt-20 ">
        <SvgOne />
        <SvgTwo />
      </div>

      <div className="min-w-full ">
        {" "}
        <Tabs
          defaultValue="Details Of Lunacal"
          className="w-full  flex flex-col items-center p-3  "
        >
          <TabsList className=" lg:w-[614px] h-[62px] w-full bg-none  lg:text-base text-xs  rounded-xl  ">
            <TabsTrigger
              value="Aboutme"
              className="lg:w-[195px] h-[49px] tracking-tighter text-xs lg:text-sm px-2 lg:px-0"
            >
              About Me
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="lg:w-[195px] h-[49px] tracking-tighter text-xs lg:text-sm px-2 lg:px-0"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="recommended"
              className="lg:w-[195px] h-[49px] tracking-tighter text-xs lg:text-sm px-2 lg:px-0"
            >
              Recommended
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Aboutme" className="">
            <ScrollArea className="w-full h-44 lg:text-base text-sm px-6 py-1 tracking-tighter  text-gray-400 ">
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now.
              <br />
              <br />I was born and raised in Albany, NY, and have been living in
              Santa Carla for the past 10 years with my wife Tiffany and my
              4-year-old twin daughters, Emma and Ella. Both of them are just
              starting school, so my calendar is usually blocked between 9-10
              AM. This is a......
              <br /> busy but rewarding time of day for me, getting them ready
              and out the door!
              <br />
              <br />
              Outside of work, I’m passionate about outdoor activities. I love
              hiking and often take my family on weekend adventures to explore
              the beautiful trails around Santa Carla. I’m also an avid runner
              and try to squeeze in a run whenever I have some spare time. On
              rainy days, you’ll find me enjoying a good book or experimenting
              in the kitchen with new recipes.
              <br />
              <br />
              At Salesforce, I’m dedicated to understanding your business needs
              and helping you make the most of our platform. Please feel free to
              reach out to me with any questions or if you need assistance – I’m
              here to help!
            </ScrollArea>
          </TabsContent>
          <TabsContent value="experience">
            <ScrollArea className="w-full h-44 lg:text-base text-sm px-6 py-1 tracking-tighter  text-gray-400 ">
              <h2>Experience</h2>
              <ul>
                <li>
                  <strong>Sales Representative at Salesforce</strong> – Santa
                  Carla, CA
                  <br />
                  <em>August 2021 - Present</em>
                  <br />
                  - Manage a portfolio of over 50 clients, providing tailored
                  solutions to optimize their use of Salesforce products.
                  <br />
                  - Consistently achieved and exceeded quarterly sales targets
                  by an average of 20%.
                  <br />
                  - Conducted over 100 product demonstrations and webinars to
                  educate clients on new features and best practices.
                  <br />- Collaborated with a cross-functional team to develop
                  and implement a customer success strategy that improved client
                  retention by 15%.
                </li>
                <br />
                <li>
                  <strong>Account Executive at Tech Solutions Inc.</strong> –
                  Albany, NY
                  <br />
                  <em>January 2018 - July 2021</em>
                  <br />
                  - Led the sales efforts for a new SaaS product, achieving a
                  35% market penetration in the first year.
                  <br />
                  - Developed strong relationships with key clients, leading to
                  a 40% increase in renewals and upsells.
                  <br />
                  - Conducted competitive analysis and market research to
                  identify new business opportunities and refine product
                  positioning.
                  <br />- Trained and mentored a team of 5 junior sales
                  associates, resulting in a 30% increase in overall team
                  performance.
                </li>
                <br />
                <li>
                  <strong>Sales Associate at Digital Dynamics</strong> – Albany,
                  NY
                  <br />
                  <em>June 2015 - December 2017</em>
                  <br />
                  - Supported the sales team in generating leads and setting up
                  meetings, contributing to a 25% growth in the sales pipeline.
                  <br />
                  - Assisted in creating sales presentations and proposals,
                  leading to a 15% increase in closing rates.
                  <br />
                  - Managed customer relationships and resolved service issues,
                  improving customer satisfaction scores by 10%.
                  <br />- Coordinated with the marketing team to execute
                  successful promotional campaigns that boosted sales by 12%.
                </li>
              </ul>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="recommended">
            <ScrollArea className="w-full h-44 lg:text-base text-sm px-6 py-1 tracking-tighter  text-gray-400 ">
              <h2>Recommended</h2>
              <ul>
                <li>
                  <strong>John Smith</strong> – Senior Sales Manager at XYZ Corp
                  <br />
                  <em>Email: john.smith@xyzcorp.com | Phone: (555) 123-4567</em>
                  <br />
                  <em>Relationship: Former manager</em>
                  <br />
                  “Dave consistently exceeded sales targets and demonstrated
                  exceptional client management skills. His ability to
                  understand client needs and provide tailored solutions was
                  instrumental in driving our success.”
                </li>
                <br />
                <li>
                  <strong>Emily Johnson</strong> – Director of Sales Operations
                  at ABC Inc.
                  <br />
                  <em>
                    Email: emily.johnson@abcinc.com | Phone: (555) 987-6543
                  </em>
                  <br />
                  <em>Relationship: Colleague and project partner</em>
                  <br />
                  “Daves dedication and strategic approach to sales are truly
                  impressive. His innovative methods and collaboration with the
                  team resulted in significant growth for both our company and
                  our clients.”
                </li>
                <br />
                <li>
                  <strong>Michael Lee</strong> – VP of Marketing at DEF Ltd.
                  <br />
                  <em>Email: michael.lee@defltd.com | Phone: (555) 456-7890</em>
                  <br />
                  <em>Relationship: Client</em>
                  <br />
                  “Working with Dave has been a pleasure. His professionalism,
                  attention to detail, and ability to solve complex issues have
                  made a substantial positive impact on our marketing efforts. I
                  highly recommend him.”
                </li>
              </ul>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default WidOne;
