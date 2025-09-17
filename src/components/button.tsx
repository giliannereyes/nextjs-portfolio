"use client";
import React from "react";
import { useRouter } from "next/navigation";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void; // still supports custom functions
  href?: string;        // optional navigation target
};

export default function Button({ children, onClick, href }: ButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        if (onClick) onClick();   // run custom function if passed
        if (href) router.push(href); // navigate if href is provided
      }}
      className="px-6 py-2 rounded-md bg-zinc-800 text-white text-xl font-bold hover:bg-zinc-700 transition-colors"
    >
      {children}
    </button>
  );
}
