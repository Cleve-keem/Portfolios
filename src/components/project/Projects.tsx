import { useState } from "react";
// import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  return (
    <section className="p-6">
      <div className="w-full max-w-360 mx-auto">
        <h3 className="text-xl mb-4">Projects</h3>
        <ul className="flex space-x-5 text-[14px] mb-5">
          <li>All</li>
          <li>Frontend</li>
          <li>Backend</li>
        </ul>

        {/* <ProjectCard /> */}
      </div>
    </section>
  );
}

// import Image from "next/image";

// export default function ProjectCard() {
//   return (
//     <div className="shadow-md p-3 rounded-2xl bg-canvas">
//       {/* image */}
//       <div className="relative w-full h-40 rounded-2xl overflow-hidden">
//         <Image
//           src="/combBoy.jfif"
//           alt="project image"
//           fill
//           className="object-cover"
//         />
//       </div>
//       {/* description */}
//       <div className="py-3">
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
//         itaque?
//       </div>
//     </div>
//   );
// }
