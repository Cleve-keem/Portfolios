import { experiences } from "@/constants/experiences";

export default function Experience() {
  return (
    <section className="px-6 py-12">
      <h3 className="text-xl font-bold mb-10 text-content-strong">
        Work Experience
      </h3>

      <div className="max-w-3xl">
        {experiences.map((exp, index) => (
          <div key={index} className="group relative flex gap-x-5">
            {/* The Timeline Track Area */}
            <div className="relative flex flex-col items-center">
              {/* Vertical Line */}
              <div
                className={`absolute top-0 bottom-0 w-0.5 bg-surface-muted 
                ${index === experiences.length - 1 ? "h-0" : "h-full"}`}
              />
              {/* Dot */}
              <div className="relative z-10 size-3 rounded-full border-2 border-brand bg-canvas mt-1.5 transition-transform group-hover:scale-125" />
            </div>

            {/* Content Area */}
            <div className="grow pb-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-content-strong leading-5">
                    {exp.company}
                  </h4>
                  <p className="text-sm font-medium text-brand mt-1">
                    {exp.role}
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-surface-tint text-content-muted border border-surface-muted self-start">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-content-default text-sm leading-relaxed"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-highlight opacity-40" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

{
  /* mine styling */
}
{
  /* <div className="border-l-2 border-blue-500 px-3 relative"> */
}

{
  /* <div className="flex">
          <div className="flex-1 flex items-center">
            <span className="size-2 rounded-full inline-block absolute top-0 -left-1.25 backdrop-blur-2xl bg-blue-800"></span>
            <h4 className="font-bold">SF Edtech</h4>
          </div>
          <span className="text-sm font-semibold">2025 - present</span>
        </div> */
}
{
  /* <ul>
          <li>Researcher</li>
          <li>Developer</li>
          <li>Mentor</li>
        </ul> */
}
