import WidOne from "@/components/WidOne";
import WidTwo from "@/components/WidTwo";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#272c30] to-[rgb(25,28,32)] flex flex-col xl:flex-row xl:items-center xl:justify-center  px-3 py-4 md:px-0 lg:py-0 xl:px-7 ">
      <div className="w-1/2  flex justify-center items-center ">
        <div className="bg-[#616161] opacity-[82%] w-full lg:w-[836px] h-[330px] md:h-[689px] border-[1px] rounded-[29px] xl:block hidden "></div>
      </div>
 
      <div className="w-full md:max-w-screen-md md:mx-auto flex flex-col  items-center  gap-4 2xl:py-6   md:h-screen justify-center   ">
        <div className="container bg-[#363C43] w-full md:w-[720px] mb-4 md:mb-0  shadow-black shadow-xl rounded-[29px]  ">
          <WidOne />
        </div>
        <hr className="h-1 lg:w-[612px] rounded-md border-[#333539] bg-[#1f2022]" />
        {/*  */}

        <div className="container  bg-[#363C43] w-full md:w-[720px] rounded-[29px] shadow-black shadow-xl">
          <WidTwo />
        </div>
        <hr className="h-1 lg:w-[612px] rounded-md border-[#333539] bg-[#333539]" />
      </div>
    </div>
  );
};

export default Home;
