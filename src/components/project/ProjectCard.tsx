import Image from "next/image";

export default function ProjectCard() {
  return (
    <div className="shadow-md p-3 rounded-2xl bg-canvas">
      {/* image */}
      <div className="relative w-full h-40 rounded-2xl overflow-hidden">
        <Image
          src="/combBoy.jfif"
          alt="project image"
          fill
          className="object-cover"
        />
      </div>
      {/* description */}
      <div className="py-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
        itaque?
      </div>
    </div>
  );
}
