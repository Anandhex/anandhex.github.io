import Image from "next/image";
import profileImage from "@/app/assets/images/me/me.png";
import arrow from "@/app/assets/icons/arrow.svg";
import arrowUp from "@/app/assets/icons/arrow_up.svg";

export default function Home() {
  const currentDate = new Date();
  return (
    <main className="bg-primary text-primary ">
      <section className="min-h-screen relative p-4 bg-secondary rounded-b-[36px] lg:mx-[62px] ">
        <section className="min-h-screen grid grid-rows-[80px_1fr_240px]">
          <header>
            <h1 className="uppercase text-primary text-2xl font-extrabold lg:hidden">
              anand
            </h1>
          </header>
          <section>
            <section className="flex align-bottom justify-center mt-64 lg:mt-32 lg:overflow-hidden lg:py-8">
              <div>
                <p className="uppercase text-right font-extrabold lg:text-2xl">
                  yeah
                </p>
                <p className="text-right font-extrabold text-[8rem]  leading-[0.7] relative lg:text-[22rem] right-[-6px] lg:right-[-16px] top-3 lg:top-9 ">
                  &apos;
                </p>
              </div>
              <p className="uppercase self-end font-extrabold text-[8rem] leading-[0.7] lg:text-[22rem] relative drop-shadow-lg">
                alllo
                <Image
                  className="absolute top-[-340%] lg:top-[-21%] left-auto lg:left-[42%] w-[278px]"
                  src={profileImage}
                  alt="profile picture of anand"
                ></Image>
              </p>
            </section>
            <section className="mt-8  flex flex-col md:flex-row gap-8 md:justify-center lg:gap-32 font-roboto ">
              <p className="font-bold text-xl max-w-[40ch]">
                I&apos;m a UI developer exploring how{" "}
                <span className="text-accent">advanced tech</span> enhances
                design. I blend creativity and logic to craft{" "}
                <span className="text-accent">intuitive</span>, engaging
                interfaces.
              </p>
              <div>
                <p className="font-bold">
                  If you&apos;d like to know more{" "}
                  <span className="text-accent">about me</span> as a person or
                </p>
                <p className="font-bold text-xl mt-2 lg:text-right">
                  Want to create something awesome? <br /> Let&apos;s get{" "}
                  <span className="text-accent">started</span>.
                </p>
              </div>
            </section>
          </section>
          <section className="w-full">
            <button className="flex items-center justify-center w-full h-full">
              <Image src={arrow} alt="scroll to next content" />
            </button>
          </section>
        </section>
        <section>
          <h3 className="font-extrabold">Projects</h3>
        </section>
      </section>
      <footer className="flex justify-end p-8 items-center">
        <div className="flex gap-6">
          <p className="text-secondary flex items-center">
            © Anand Patil 2024{" "}
            {currentDate.getFullYear() != 2024
              ? ` - ${currentDate.getFullYear()}`
              : ""}
          </p>
          <button>
            <Image
              src={arrowUp}
              className="rotate-180 w-8"
              alt="scroll to top"
            />
          </button>
        </div>
      </footer>
    </main>
  );
}
