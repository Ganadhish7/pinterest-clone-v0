"use client";

import Image from "next/image";

interface HoverDownloadImageProps {
  author: string;
  url: string;
  download_url: string;
  height: number;
  width: number;
}

export default function HoverDownloadImage({
  author,
  url,
  download_url,
  height,
  width,
}: HoverDownloadImageProps) {
  function handleDownload() {
    const link = document.createElement("a");
    link.href = url;
    link.download = author || "download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className=" transition ease-in-out relative hover:cursor-pointer hover:scale-105 ">
      <img
        src={download_url}
        alt={author}
        className="w-full h-auto rounded-lg"
        width={width}
        height={height}
      />
      <div className=" absolute bottom-0 left-0 right-0 flex justify-center items-center h-10 bg-black bg-opacity-50 hover:bg-opacity-75 transition-opacity duration-200">
        <p className=" text-white">{author}</p>
        <button onClick={handleDownload} className=" text-white">
          &darr;
        </button>
      </div>
    </div>
  );
}
