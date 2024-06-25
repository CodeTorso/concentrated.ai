import Countdown from "@repo/ui/countdown";

export default function Home() {
  return (
    <div className="bg-black text-white flex justify-center text-center items-center h-screen w-full">
      <div className="flex flex-col gap-12">
        <h1 className="text-7xl font-extrabold">
          Hello There! In this chaotic world, Your mind needs some focus!
        </h1>
        <div className="text-gray-300 flex justify-center gap-2">
          Lanching in <Countdown />
        </div>
      </div>
    </div>
  );
}
