import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="p-5 md:py-10 xl:px-15">
      <div className="max-w-360 mx-auto w-full">
        <div className="flex flex-col md:flex-row-reverse w-full gap-8 xl:gap-15">
          {/* Hero Image */}
          <div className="relative h-90 w-full mx-auto rounded-2xl overflow-hidden mb-6 md:w-[40%]">
            <Image
              src="/BlackBoy.jfif"
              alt="My profile Image"
              fill
              priority
              // loading="eager"
              className="object-cover"
              // sizes="150px"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>
          {/* Hero description */}
          <div className="md:w-[60%]">
            <h1 className="text-4xl font-bold leading-13 mb-6">
              Hi there! 👋🏻 <br /> I’m Hackhim,
            </h1>
            <p className="mb-4">
              I'm a Frontend Developer turned Software Developer 😂 by
              <span className="text-brand"> Mistake</span>. My passion is in
              creating human-centered applications that can improve our daily
              lives while creating a cross-cultural impact. <br /> <br /> My
              past experience lends me the ability to communicate effectively
              across multiple divisions and collaborate efficiently in an agile
              working environment. That's why I would love to work with the next
              product team to build solutions that we are all proud of.
            </p>
            <Link href="/" className="text-brand text-[12px] font-semibold">
              Let's connect!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
