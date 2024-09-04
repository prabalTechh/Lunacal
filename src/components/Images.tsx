import Image from "next/image";

const Images = () => {
  return (
    <div className="relative h-[179px] w-[190px] ">
      <Image
        src="/img.png"
        alt="img"
        fill
        style={{ objectFit: "cover", borderRadius: "20px" }}
      />
      
    </div>

  );
};

export default Images;
