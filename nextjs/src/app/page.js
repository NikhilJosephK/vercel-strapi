"use client";

const hotel = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_STRAPI}
/api/schools`);
  const data = await res.json();
  console.log(data);
};

hotel();

export default function Home() {
  return <div>hello world</div>;
}
