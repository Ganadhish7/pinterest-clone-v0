"use client";

import Image from "next/image";

interface HoverDownloadImageProps {
  src: string;
  alt: string;
}

export default function HoverDownloadImage({
  src,
  alt,
}: HoverDownloadImageProps) {
  function handleDownload() {
    const link = document.createElement("a");
    link.href = src;
    link.download = alt || "download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className=" transition ease-in-out relative hover:cursor-pointer hover:scale-105 ">
      <Image
        src={src}
        alt={alt}
        className="w-full h-auto rounded-md"
        width={500}
        height={500}
      />
      <div className=" absolute bottom-0 left-0 right-0 flex justify-center items-center h-10 bg-black bg-opacity-50 hover:bg-opacity-75 transition-opacity duration-200">
        <button onClick={handleDownload} className=" text-white">
          Download
        </button>
      </div>
    </div>
  );
}
