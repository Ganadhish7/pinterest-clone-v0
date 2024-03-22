import Link from "next/link";
import DetailedImage from "../pages/explore/redirect/page";

interface Data {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export default function GenreBanner({
  id,
  author,
  width,
  height,
  url,
  download_url,
}: Data) {
  return (
    <>
      <Link
        className=" relative w-96 h-80 overflow-hidden"
        href="/pages/explore/redirect"
      >
        <img
          className=" w-96 h-80 object-cover rounded-2xl"
          src={url}
          alt={author}
        />
        <div className=" absolute t-0 l-0 flex justify-center items-center">
          <h2 className=" uppercase">{author}</h2>
        </div>
      </Link>
    </>
  );
}
