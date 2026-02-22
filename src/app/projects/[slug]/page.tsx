import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";
import SlideInViewReveal from "@/components/SlideInViewReveal";
import { projectData } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = projectData.find((project) => project.slug === slug);

  return (
    <>
      <div className="p-8">
        <BackButton />
        <SlideInViewReveal className="relative w-full min-h-100 rounded-2xl overflow-hidden mb-10">
          <Image
            src={project?.coverImage as string}
            alt={project?.name as string}
            fill
            priority
            className="object-cover"
          />
        </SlideInViewReveal>
        <SlideInViewReveal>
          {/* <div className="flex items-center-safe gap-4 flex-wrap"> */}
          <h1 className="text-3xl mb-4">{project?.name}</h1>
          {/* </div> */}
          <p className="mb-4 leading-7">{project?.longDescription}</p>
          <Link
            href={
              project?.githubUrl == undefined
                ? ""
                : (project?.githubUrl as string)
            }
            className="inline-block mb-4 border rounded-2xl px-4 py-1 text-sm bg-transparent text-canvas border-brand hover:ring-brand hover:scale-1 transition-all duration-200"
          >
            View souce code
          </Link>
        </SlideInViewReveal>
        <SlideInViewReveal className="mb-5">
          <h3 className="mb-4 text-2xl">Stacks</h3>
          <ul className="space-y-3 px-5">
            {project?.stack.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </SlideInViewReveal>
        <SlideInViewReveal>
          <h3 className="mb-4 text-2xl">Features</h3>
          <ol className="space-y-3 px-5 mb-10">
            {project?.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ol>
        </SlideInViewReveal>
        <SlideInViewReveal className="mb-5">
          <h3 className="text-2xl mb-5">Challenges</h3>
          <p className="px-5 leading-7">{project?.challenges}</p>
        </SlideInViewReveal>
        <SlideInViewReveal className="mb-5">
          <h3 className="text-2xl mb-4">Solutions</h3>
          <p className="px-5 leading-7">{project?.solutions}</p>
        </SlideInViewReveal>
        <SlideInViewReveal>
          <h3 className="text-2xl mb-5">Lessons</h3>
          <p className="px-5 leading-7">{project?.lessons}</p>
        </SlideInViewReveal>
      </div>
      <Footer />
    </>
  );
}
