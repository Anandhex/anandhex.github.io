import Image from "next/image";
import profileImage from "@/app/assets/images/me/me.png";
import arrow from "@/app/assets/icons/arrow.svg";
import arrowUp from "@/app/assets/icons/arrow_up.svg";
import headerAnchor from "@/app/assets/icons/header_anchor.svg";

export default function Home() {
  const currentDate = new Date();
  return (
    <main className="bg-primary text-primary max-w-[1920px] m-auto">
      <section className="min-h-screen relative p-4 bg-secondary rounded-b-[36px] lg:mx-[62px] drop-shadow-lg overflow-hidden">
        <div className="absolute w-56 h-56 bg-primary -right-28 -top-28 rounded-full "></div>
        <section className="min-h-screen grid grid-rows-[80px_1fr_300px]">
          <header>
            <h1 className="uppercase text-primary text-2xl font-extrabold lg:hidden">
              anand
            </h1>
          </header>

          <section className="flex flex-col items-center text-center">
            {/* ---Mobile only---- */}
            <section className="md:hidden flex flex-col items-center">
              <Image
                className="w-[278px] mb-1 "
                src={profileImage}
                alt="profile picture of anand"
              ></Image>
              <span className="relative ">
                <span className="relative uppercase font-extrabold text-[8rem]  leading-[0.7] ">
                  <span className="text-xl absolute top-4 -left-4">yeah</span>
                  &#x2019;ALLO{/* Using the HTML entity for the apostrophe */}
                </span>
              </span>
            </section>
            {/* ---Tablet and above---- */}
            <section className="hidden md:visible md:flex  items-center justify-center mt-64 lg:mt-32 lg:py-8 flex-wrap self-center">
              <span className="relative ">
                <span className="relative uppercase font-extrabold text-[8rem] lg:text-[22rem] leading-[0.7] ">
                  <span className="text-xl absolute top-24 left-12">yeah</span>
                  &#x2019;AL {/* Using the HTML entity for the apostrophe */}
                </span>
              </span>
              <Image
                className="w-[278px] relative -top-[1.6rem] z-10 lg:text-[22rem] -mr-[0.5ch] "
                src={profileImage}
                alt="profile picture of anand"
              ></Image>
              <span className="uppercase font-extrabold text-[8rem] lg:text-[22rem] relative drop-shadow-lg leading-[0.7] w-fit ">
                LO
              </span>
            </section>
            <section className="mt-8 flex flex-col md:flex-row gap-8 md:justify-center lg:gap-44 font-roboto text-left relative z-10">
              <p className="font-bold text-xl max-w-[45ch]">
                I&#x2019;m a UI developer exploring how{" "}
                <span className="text-accent">advanced tech</span> enhances
                design. I blend creativity and logic to <br /> craft{" "}
                <span className="text-accent">intuitive</span>, engaging
                interfaces.
              </p>
              <div>
                <p className="font-bold">
                  If you&#x2019;d like to know more{" "}
                  <span className="text-accent">about me</span> as a person or
                </p>
                <p className="font-bold text-xl mt-2 lg:text-right">
                  Want to create something awesome? <br /> Let&#x2019;s get{" "}
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
        <section className="lg:px-16">
          <h3 className="font-extrabold text-right flex w-full justify-end text-4xl lg:text-7xl uppercase">
            <Image src={headerAnchor} alt="header-anchor" />
            Projects
          </h3>
        </section>
        <section className="lg:px-16">
          <h3 className="font-extrabold text-right flex w-full justify-end text-4xl lg:text-7xl uppercase mb-8">
            <Image src={headerAnchor} alt="header-anchor" />
            Contact
          </h3>
          <section className="flex flex-col md:flex-row justify-between gap-14 mb-12">
            <section>
              <p className="font-bold text-2xl md:text-4xl md:mb-2">
                Let&#x2019;s connect
              </p>
              <p className="font-medium max-w-[35ch] text-xl md:text-2xl font-roboto mb-4 md:mb-8">
                Have a project in mind? Want to discuss your design needs? Feel
                free to reach out.
              </p>
              <ul className="font-medium md:text-2xl font-roboto">
                <li>
                  <span className="font-bold">Email:</span>{" "}
                  anand.patil.ap79@gmail.com
                </li>
                <li>
                  <span className="font-bold">Phone:</span> +91 81 05 100 832
                </li>
              </ul>
            </section>
            <section className="flex flex-col gap-4 w-[max(45ch,40%,300px)]">
              <input
                type="text"
                className="h-[48px] bg-primary text-secondary p-4 placeholder:text-secondary"
                placeholder="Name"
              />
              <input
                type="text"
                className="h-[48px] bg-primary text-secondary p-4 placeholder:text-secondary"
                placeholder="Email"
              />
              <textarea
                className="bg-primary text-secondary p-4 placeholder:text-secondary"
                rows={6}
                placeholder="Message"
              />
              <div className="flex justify-end">
                <button className="bg-accent w-fit h-[48px] px-4 text-2xl font-bold text-secondary hover:bg-primary transition-colors">
                  Let&#x2019;s talk
                </button>
              </div>
            </section>
          </section>
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
