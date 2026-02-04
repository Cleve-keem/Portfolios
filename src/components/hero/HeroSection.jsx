import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="p-5">
      <div>
        {/* Hero Image */}
        <div className="relative h-90 w-full mx-auto rounded-2xl overflow-hidden mb-6">
          <Image
            src="/avatar.jpeg"
            alt="My profile Image"
            fill
            className="object-cover"
          />
        </div>
        <div></div>
      </div>
      {/* Hero description */}
      <div>
        <h1 className="text-4xl font-bold leading-13 mb-6">
          Hi there! 👋🏻 <br /> I’m Hackhim,
        </h1>
        <p>
          I'm an Frontend Developer turned Fullstack 😂. My passion is in
          creating human-centered applications that can improve our daily lives
          while creating a cross-cultural impact. <br /> <br /> My past
          experience lends me the ability to communicate effectively across
          multiple divisions and collaborate efficiently in an agile working
          environment. That's why I would love to work with the next product
          team to build solutions that we are all proud of.
        </p>
      </div>
    </section>
  );
}
