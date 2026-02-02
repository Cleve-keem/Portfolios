import { TextAlignEnd } from "lucide-react";

export default function page() {
  return (
    <div>
      <header className="sticky top-0 p-4 shadow-md flex">
        <div className="flex-1">
          <span className="inline-flex justify-center bg-brand text-white rounded size-6 font-semibold">
            H
          </span>
          <small>ackhim</small>
        </div>
        <TextAlignEnd />
      </header>
    </div>
  );
}
