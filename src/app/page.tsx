import Button from "@/components/button";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <h2 className="font-light mb-10">
          Welcome, I am
      </h2>
      <h1 className="font-bold text-6xl lg:text-8xl bg-clip-text animate-text">
        GILIANNE REYES
      </h1>
      <h2 className="text-xl mt-10 mb-10">
        A computer science student passionate about building software.
      </h2>
      <Button href="/contact">Contact Me</Button>
    </div>
  );
}
