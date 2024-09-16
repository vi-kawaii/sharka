"use client";

import Image from "next/image";
import images from "./images";
import { useState } from "react";

function Button({ img, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex space-x-2 w-full px-2 items-center"
    >
      <div className="w-[128px] h-[128px] border-white border">
        <Image
          alt=""
          draggable={false}
          src={`/${img}.png`}
          width={128}
          height={128}
        />
      </div>
    </button>
  );
}

export default function Home() {
  const [cur, setCur] = useState(images[0][0]);

  return (
    <div className="flex select-none">
      <div className="w-[512px] h-[512px]">
        <Image alt="" src={`/${cur}.png`} width={512} height={512} />
      </div>
      <div className="bg-neutral-800 space-y-2 pt-2 h-[512px] overflow-y-scroll">
        {images
          .map((x) => x[0])
          .map((x, i) => (
            <Button
              img={x}
              key={i}
              onClick={() => setCur(x)}
            />
          ))}
      </div>
    </div>
  );
}
