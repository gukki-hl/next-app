import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      <h1>hello {session && <span>{session.user?.name}</span>}</h1>
      <ProductCard />
      <Image
        src="https://assets.imgix.net/blog/unsplash-kiss.jpg"
        alt="Test image"
        fill
        className="object-cover"
        sizes="(max-width:480px) 100vw,(max-width:780px) 50vw,33vw"
        unoptimized
        quality={100}
        priority
      ></Image>
    </main>
  );
}
