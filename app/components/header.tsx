export default function Header() {
  return (
    <header className=" bg-white px-4 py-2 flex items-center justify-evenly">
      <div className="flex items-center space-x-10">
        <button className=" bg-black text-white px-3 py-1 rounded-full">
          Home
        </button>
        <button className=" bg-black text-white rounded-md px-3 py-1">
          Explore
        </button>
        <button className=" bg-black text-white rounded-md px-3 py-1">
          Create
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          className=" border-2 w-[44rem] rounded-full px-2 py-2"
        />
      </div>
      <button className=" bg-black text-white rounded-md px-3 py-1">
        Downloads
      </button>
    </header>
  );
}
