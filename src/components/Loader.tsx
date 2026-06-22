import { LoaderPinwheel } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex absolute inset-0 justify-center items-center h-[calc(100vh-5rem)] w-full bg-black/10">
      <span className="animate-bounce">
        <LoaderPinwheel size={30} />
      </span>
    </div>
  );
};

export default Loader;
