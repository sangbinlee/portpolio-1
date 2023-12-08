'use client'
import Link from "next/link";


async function getPosts() {
  const path = `${process.env.BASE_URL}`;
  console.log('path===================',path);
  // const res = await fetch(path +`/api/getPosts`)
  const res = await fetch(`http://localhost:3000/api/getPosts`)
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
  
}

export default async function Home() {

  const data :{id:number, title:string}[]= await getPosts()
  console.log('data====',data);

  return (
    <main className="py-4 px-48">
      <Link className="bg-teal-700 text-black font-medium py-2 px-4 rounded-md" href={"/about"}>about</Link>
      <Link className="bg-teal-700 text-black font-medium py-2 px-4 rounded-md" href={"/code"}>code</Link>
      <Link className="bg-teal-700 text-black font-medium py-2 px-4 rounded-md" href={"/dashboard"}>dashboard</Link>

      {data.map(post=> (
        <h1 className="text-lg py-6">{post.id}:{post.title}</h1>
      ))}
    </main>
  )
}
