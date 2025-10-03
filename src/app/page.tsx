import { DarkmodeToggle } from "@/components/common/darkmode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Input />
      <Button className="bg-purple-400 dark:bg-amber-400">Pencet</Button>
      <DarkmodeToggle />
    </div>
  );
}
