import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="p-6">
      <div className="w-full max-w-360 mx-auto">
        <h3 className="text-xl mb-4">Projects</h3>
        <ul className="flex space-x-5 text-[14px] mb-3">
          <li>All</li>
          <li>Frontend</li>
          <li>Backend</li>
        </ul>

        <ProjectCard />
      </div>
    </section>
  );
}
