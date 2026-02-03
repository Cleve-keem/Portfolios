import { Dispatch, SetStateAction } from "react";

// type LogoProps = {
//   openFn?: Dispatch<SetStateAction<boolean>>;
// };

export default function Logo() {
  return (
    <div className="flex-1 text-[18px]">
      <span className="inline-flex justify-center bg-brand text-white rounded size-6 font-semibold">
        H
      </span>
      <small>ackhim</small>
    </div>
  );
}
