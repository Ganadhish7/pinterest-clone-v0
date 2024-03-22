import HoverDownloadImage from "@/app/components/HoverDownloadImage";

interface Data {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

async function getData() {
  const res = await fetch("https://picsum.photos/v2/list?page=4&limit=100");

  if (!res.ok) {
    throw new Error("error while fetching data");
  }

  return res.json();
}

export default async function Homepage() {
  const data = await getData();
  return (
    <div className=" gap-2 m-2 columns-4">
      {data.map((data: Data) => (
        <div className=" p-2" key={data.id}>
          <HoverDownloadImage
            url={data.url}
            download_url={data.download_url}
            author={data.author}
            height={data.height}
            width={data.width}
          />
        </div>
      ))}
    </div>
  );
}
