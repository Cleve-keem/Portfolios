import ToolInView from "./ToolInView";

const tools = [
  "Figma",
  "Tailwindcss",
  "JavaScript",
  "HTML",
  "CSS",
  "NodeJs",
  "React-Native",
  "ExpressJs",
  "Redis",
];

export default function Technologies() {
  return (
    <div className="xl:max-w-6xl mx-auto">
      <h2 className="text-content-strong text-center md:text-center font-normal tracking-tight text-2xl md:text-3xl">
        Technologies
      </h2>
      <div className="w-full flex items-start gap-20">
        <div className="w-full py-[50vh]">
          <ul>
            {tools.map((tool, id) => (
              <ToolInView tool={tool} key={id} />
            ))}
          </ul>
        </div>
        <div className="hidden w-full min-w-[320px] sticky top-0 h-screen md:flex items-center justify-center">
          <div className="aspect-square w-full bg-gray-100">div Col</div>
        </div>
      </div>
    </div>
  );
}
