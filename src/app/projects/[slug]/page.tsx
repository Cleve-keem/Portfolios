import { projectData } from "@/constants/projects";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = projectData.find((project) => project.slug === slug);

  return (
    <div className="px-10 py-8">
      <ArrowLeft className="mb-7" />
      <div className="relative w-full min-h-100 rounded-2xl overflow-hidden mb-10">
        <Image
          src={project?.coverImage as string}
          alt={project?.name as string}
          fill
          priority
          className="object-fill"
        />
      </div>
      <h1 className="text-3xl mb-4">{project?.name}</h1>
      <p className="mb-4 leading-7">{project?.longDescription}</p>
      <div className="mb-5">
        <h3 className="mb-4 text-2xl">Stacks</h3>
        <ul className="space-y-3 px-5">
          {project?.stack.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="mb-4 text-2xl">Features</h3>
        <ol className="space-y-3 px-5 mb-10">
          {project?.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ol>
      </div>
      <div className="mb-5">
        <h3 className="text-2xl mb-5">Challenges</h3>
        <p className="px-5 leading-7">{project?.challenges}</p>
      </div>
      <div className="mb-5">
        <h3 className="text-2xl mb-4">Solutions</h3>
        <p className="px-5 leading-7">{project?.solutions}</p>
      </div>
      <div>
        <h3 className="text-2xl mb-5">Lessons</h3>
        <p className="px-5 leading-7">{project?.lessons}</p>
      </div>
    </div>
  );
}
