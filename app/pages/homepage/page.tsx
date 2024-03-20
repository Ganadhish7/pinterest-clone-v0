"use client";
import HoverDownloadImage from "@/app/components/HoverDownloadImage";
import Image from "next/image";
import { useState } from "react";

export default function Homepage() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className=" gap-2 m-2 columns-4">
      {data.map((data) => (
        <div className=" p-2" key={data.alt}>
          {/* <Image
            className=" object-cover rounded-lg hover:cursor-pointer"
            src={data.src}
            alt={data.alt}
            width={500}
            height={500}
          /> */}
          <HoverDownloadImage src={data.src} alt={data.alt} />
        </div>
      ))}
      <h1>Homepage</h1>
    </div>
  );
}

// interface Image {
//   src: string;
//   alt: string;
// }

const data = [
  {
    src: "/screenshot (251).png",
    alt: "1",
  },
  {
    src: "/screenshot (252).png",
    alt: "2",
  },
  {
    src: "/screenshot (279).png",
    alt: "3",
  },
  {
    src: "/screenshot (284).png",
    alt: "4",
  },
  {
    src: "/screenshot (289).png",
    alt: "5",
  },
  {
    src: "/screenshot (271).png",
    alt: "6",
  },
  {
    src: "/screenshot (271).png",
    alt: "6",
  },
  {
    src: "/screenshot (289).png",
    alt: "5",
  },
  {
    src: "/screenshot (284).png",
    alt: "4",
  },
  {
    src: "/screenshot (279).png",
    alt: "3",
  },
  {
    src: "/screenshot (252).png",
    alt: "2",
  },
  {
    src: "/screenshot (251).png",
    alt: "1",
  },
  {
    src: "/screenshot (251).png",
    alt: "1",
  },
  {
    src: "/screenshot (252).png",
    alt: "2",
  },
  {
    src: "/screenshot (279).png",
    alt: "3",
  },
  {
    src: "/screenshot (284).png",
    alt: "4",
  },
  {
    src: "/screenshot (289).png",
    alt: "5",
  },
  {
    src: "/screenshot (289).png",
    alt: "5",
  },
  {
    src: "/screenshot (284).png",
    alt: "4",
  },
  {
    src: "/screenshot (279).png",
    alt: "3",
  },
  {
    src: "/screenshot (252).png",
    alt: "2",
  },
  {
    src: "/screenshot (251).png",
    alt: "1",
  },

  // {
  //   src: "https://in.pinterest.com/pin/630222541631465279/",
  //   alt: "6",
  // },
  // {
  //   src: "https://in.pinterest.com/pin/655907133261378104/",
  //   alt: "7",
  // },
  // {
  //   src: "https://in.pinterest.com/pin/17381148553824010/",
  //   alt: "8",
  // },
  // {
  //   src: "https://in.pinterest.com/pin/375276581464625085/",
  //   alt: "9",
  // },
  // {
  //   src: "https://in.pinterest.com/pin/1125968651066214/",
  //   alt: "10",
  // },
  // {
  //   src: "https://in.pinterest.com/pin/1083115779121158038/",
  //   alt: "11",
  // },
  // {
  //   src: "https://in.pinterest.com/pin/1019009853174653547/",
  //   alt: "12",
  // },
  // {
  //   src: "https://in.pinterest.com/pin/3940718418599849/",
  //   alt: "13",
  // },
  // {
  //   src: "https://in.pinterest.com/pin/940689440905928437/",
  //   alt: "14",
  // },
  // {
  //   src: "https://in.pinterest.com/pin/968133251133606231/",
  //   alt: "15",
  // },
  // {
  //   src: "https://in.pinterest.com/pin/464363411595359975/",
  //   alt: "16",
  // },
  // {
  //   src: "https://in.pinterest.com/pin/879750108445197015/",
  //   alt: "17",
  // },
  // {
  //   src: "https://in.pinterest.com/pin/1088393434934529428/",
  //   alt: "18",
  // },
  // {
  //   src: "https://in.pinterest.com/pin/351912464781084/",
  //   alt: "19",
  // },
  // {
  //   src: "https://in.pinterest.com/pin/3377768463544077/",
  //   alt: "20",
  // },
];
