// "use client";

// import { use } from "react";

// type Props = {
//   params: Promise<{ slug: string }>;
// };

// export default async function Page({ params }: Props) {
//   const resolvedParams = use(params);
//   console.log(resolvedParams)

//   return <div>Project:</div>;
// }

// app/project/[slug]/page.tsx (Server Component)

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params; // Simple await on the server
  return <div>Project: {slug}</div>;
}
