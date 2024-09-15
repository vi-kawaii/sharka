import Image from "next/image";
import images from "./images";

function Button({ text, img }) {
  return (
    <button className="flex space-x-2 w-full px-2 items-center">
      <div className="w-[64px] h-[64px] border-white border">
        <Image alt="" draggable={false} src={`/${img}.png`} width={64} height={64} />
      </div>
      <span>{text}</span>
    </button>
  );
}

export default function Home() {
  return (
    <div className="flex select-none">
      <div className="w-[512px] h-[512px]">Image here</div>
      <div className="bg-neutral-800 space-y-2 pt-2 h-[512px] overflow-y-scroll">
        {images
          .map((x) => x[0])
          .map((x, i) => (
            <Button text={x.slice(0, -2)} img={x} key={i} />
          ))}
      </div>
    </div>
  );
}
