import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex w-screen h-20 border-b border-b-gray-100 shadow-md px-4 md:px-12 items-center">
      <Link href={"/"} className="text-black font-bold text-2xl md:text-3xl">
        DevAssist
      </Link>
    </div>
  );
};

export default Navbar;
