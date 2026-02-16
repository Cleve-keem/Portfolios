"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";


const BackButton = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} aria-label="Go back">
      <ArrowLeft className="mb-7" />
    </button>
  );
};

export default BackButton;
