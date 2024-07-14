import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-blue-700 text-xl">Hello World</h1>
      <Button variant="destructive">BUY NOW</Button>
    </div>
  );
}
