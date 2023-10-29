import Image from "next/image";

type TProps = {
  title: string;
  description: string;
  image: any;
  reverseImage?: boolean;
}

export const SectionDescription = ({ title, description, image, reverseImage }: TProps) => {
  return (
    <div className={`flex items-center justify-center gap-[13rem] ${reverseImage ? 'flex-row-reverse': ''}`}>
      <div className="max-w-[28rem]">
        <h4 className="text-3xl text-[#52665A] font-semibold mb-4">
          {title}
        </h4>
        <p className="text-base text-[#5C6660] ">
          {description}
        </p>
      </div>
      <Image
        src={image}
        width={200}
        height={200}
        alt={title}
        className="border-2 border-[#f8f8f8] rounded-md shadow-lg shadow-[#f8f8f8]/50"
      />
    </div>
  )
}