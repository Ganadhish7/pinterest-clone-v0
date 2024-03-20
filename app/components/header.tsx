// import Link from "next/link";
// import Homepage from "../pages/homepage";

import Link from "next/link";

export default function Header() {
  return (
    <header className=" bg-white px-4 py-2 flex items-center justify-evenly">
      <div className="flex items-center space-x-10">
        <Link href="/pages/homepage">✍️</Link>
        <Link
          className=" bg-black text-white px-3 py-1 rounded-full"
          href="/pages/homepage"
        >
          Home
        </Link>
        <Link
          className=" bg-black text-white rounded-md px-3 py-1"
          href="/pages/explore"
        >
          Explore
        </Link>

        <Link
          className=" bg-black text-white rounded-md px-3 py-1"
          href="/pages/create"
        >
          Create
        </Link>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          className=" border-2 w-[44rem] rounded-full px-2 py-2"
        />
      </div>
      <Link
        className=" bg-black text-white rounded-md px-3 py-1"
        href="/pages/downloads"
      >
        Downloads
      </Link>
    </header>
  );
}
