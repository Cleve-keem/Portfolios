import { useActiveToolTitle } from "@/context/ActiveToolContext";
import { ReactNode } from "react";

export default function ToolCard({
  children,
  gradient,
  title,
}: {
  gradient: string;
  children?: ReactNode;
} & { title: string }) {
  const { activeToolTitle } = useActiveToolTitle();

  return (
    <div
      className={`absolute inset-0 bg-linear-to-br w-full h-full ${gradient} ${activeToolTitle === title ? "opacity-100" : "opacity-0"} transition-opacity duration-700 ease-in-out`}
    >
      {children}
    </div>
  );
}

export function Figma({ title }: { title: string }) {
  return (
    <ToolCard title={title} gradient="from-white to-blue-500">
      Figma
    </ToolCard>
  );
}
export function JavaScript({ title }: { title: string }) {
  return (
    <ToolCard title={title} gradient="from-white to-purple-500">
      JavaScript
    </ToolCard>
  );
}
export function CSS({ title }: { title: string }) {
  return (
    <ToolCard title={title} gradient="from-white to-slate-500">
      Css
    </ToolCard>
  );
}
export function HTML({ title }: { title: string }) {
  return (
    <ToolCard title={title} gradient="from-white to-green-500">
      HTML
    </ToolCard>
  );
}
export function Docker({ title }: { title: string }) {
  return (
    <ToolCard title={title} gradient="from-white to-yellow-500">
      Docker
    </ToolCard>
  );
}
export function Redis({ title }: { title: string }) {
  return (
    <ToolCard title={title} gradient="from-white to-red-800">
      Redis
    </ToolCard>
  );
}
export function NodeJs({ title }: { title: string }) {
  return (
    <ToolCard title={title} gradient="from-white to-pink-500">
      NodeJs
    </ToolCard>
  );
}
export function TailwindCSS({ title }: { title: string }) {
  return (
    <ToolCard title={title} gradient="from-white to-pink-500">
      Tailwindcss
    </ToolCard>
  );
}
export function ReactNative({ title }: { title: string }) {
  return (
    <ToolCard title={title} gradient="from-white to-pink-500">
      Tailwindcss
    </ToolCard>
  );
}
