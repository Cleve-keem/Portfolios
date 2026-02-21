"use client";

import {
  CSS,
  Docker,
  Figma,
  HTML,
  JavaScript,
  NodeJs,
  ReactNative,
  Redis,
  TailwindCSS,
} from "./ToolCard";
import ToolInView from "./ToolInView";

const tools = [
  { title: "Figma", card: Figma },
  { title: "Tailwindcss", card: TailwindCSS },
  { title: "JavaScript", card: JavaScript },
  { title: "HTML", card: HTML },
  { title: "CSS", card: CSS },
  { title: "NodeJs", card: NodeJs },
  { title: "React-Native", card: ReactNative },
  { title: "ExpressJs", card: Figma },
  { title: "Redis", card: Redis },
];

export default function Technologies() {
  return (
    <div className="xl:max-w-6xl xl:mx-auto">
      <h2 className="text-content-strong text-center md:text-center font-normal tracking-tight text-2xl md:text-3xl">
        Technologies & Tools
      </h2>
      <div className="w-full flex items-start gap-20">
        <div className="w-full py-5 md:py-[50vh]">
          <ul>
            {tools.map((tool, id) => (
              <ToolInView key={id} title={tool.title} />
            ))}
          </ul>
        </div>
        <div className="hidden w-full min-w-[320px] sticky top-0 h-screen md:flex items-center justify-center">
          <div className="relative aspect-square w-full bg-gray-100 dark:bg-gray-800 text-primary rounded-xl overflow-hidden">
            {tools.map((tool, id) => {
              const Card = tool.card;
              return <Card title={tool.title} key={id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
