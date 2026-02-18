import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="block flex-1 text-xl">
      <span className="inline-flex justify-center bg-brand text-white rounded size-6 font-semibold">
        H
      </span>
      <small>ackhim</small>
    </Link>
  );
}
