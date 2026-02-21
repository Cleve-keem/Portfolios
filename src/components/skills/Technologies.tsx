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
  { title: "Figma", card: Figma, level: 0 },
  { title: "Tailwindcss", card: TailwindCSS, level: 80 },
  { title: "JavaScript", card: JavaScript, level: 90 },
  { title: "HTML", card: HTML, level: 100 },
  { title: "CSS", card: CSS, level: 100 },
  { title: "NodeJs", card: NodeJs, level: 100 },
  { title: "React-Native", card: ReactNative, level: 100 },
  { title: "ExpressJs", card: Figma, level: 100 },
  { title: "Redis", card: Redis, level: 100 },
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
              <ToolInView key={id} title={tool.title} level={tool.level} />
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
