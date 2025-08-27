"use client";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr:false,//禁止服务器预渲染
  loading: () => <p> Loading...</p>,//加载指示器
});
export default function Home() {
  const [isVisible, setVisible] = useState(false);
  // const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      {/* <h1>hello {session && <span>{session.user?.name}</span>}</h1> */}
      <div className="space-y-8">
        <button onClick={() => setVisible(true)}>SHOW</button>
        {isVisible && <HeavyComponent />}
      </div>
      {/* <Image
        src="https://assets.imgix.net/blog/unsplash-kiss.jpg"
        alt="Test image"
        fill
        className="object-cover"
        sizes="(max-width:480px) 100vw,(max-width:780px) 50vw,33vw"
        unoptimized
        quality={100}
        priority
      ></Image> */}
    </main>
  );
}
