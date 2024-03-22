import GenreBanner from "@/app/components/GenreBanner";
import Image from "next/image";

interface Data {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

async function getData() {
  const res = await fetch("https://picsum.photos/v2/list?page=3&limit=12");

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
}

export default async function Explore() {
  const data = await getData();
  return (
    <div className=" flex flex-col items-center">
      <div className=" relative text-center m-10">
        <p className=" font-semibold text-xl">{new Date().toDateString()}</p>
        <p className=" font-bold text-5xl">Stay Inspired</p>
      </div>
      <div className=" grid grid-cols-3">
        {data.map((data: Data) => (
          <div key={data.id} className=" p-5">
            <div className=" cursor-pointer">
              <GenreBanner
                url={data.download_url}
                id={data.id}
                width={data.width}
                height={data.height}
                author={data.author}
                download_url={data.download_url}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// const data: Data[] = [
//   {
//     url: "/adam.jpg",
//     miniHeadline: "Movies",
//     headline: "Trending Movies",
//   },
//   {
//     url: "/alan.jpg",
//     miniHeadline: "Cars",
//     headline: "Upcoming cars",
//   },
//   {
//     url: "/avengers.jpg",
//     miniHeadline: "Nature",
//     headline: "Travel to new Destination",
//   },
//   {
//     url: "/batman.jpg",
//     miniHeadline: "Bikes",
//     headline: "New released bikes",
//   },
//   {
//     url: "/blackstorm.jpg",
//     miniHeadline: "Games",
//     headline: "Computer Games",
//   },
//   {
//     url: "/stars.jpg",
//     miniHeadline: "Animals",
//     headline: "Cute Animals",
//   },
// ];
