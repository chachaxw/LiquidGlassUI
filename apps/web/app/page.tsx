import Image from "next/image";
import { Button } from "@workspace/ui/components/button";
import background from "@/assets/images/background.png";

export default function Page() {
  return (
    <>
      <div className="relative flex items-center justify-center min-h-svh">
        <Image
          src={background}
          alt="background"
          className="absolute w-full min-h-svh inset-0 -z-10 object-cover"
        />
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold text-white">
            Liquid Glass Style Button
          </h1>
        </div>
      </div>
      <div className="relative flex items-center justify-center min-h-svh">
        <Image
          src={background}
          alt="background"
          className="absolute w-full min-h-svh inset-0 -z-10 object-cover"
        />
      </div>
      <Button className="w-40 fixed bottom-20 left-1/2 -translate-x-1/2">Button</Button>
    </>
  );
}
