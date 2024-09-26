import Image from "next/image";
import profileImage from "@/app/assets/images/me/me.png";
import arrow from "@/app/assets/icons/arrow.svg";
import headerAnchor from "@/app/assets/icons/header_anchor.svg";
import arrowDecoration from "@/app/assets/icons/arrow_decoration.svg";
import ContactForm from "@/app/components/ContactForm";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hamburger from "./components/Hamburger";
import Offerings from "./components/Offerings";

export default function Home() {
  return (
    <main className="bg-primary text-primary max-w-[1920px] m-auto relative">
      <section className="hidden fixed w-full md:flex justify-center items-center z-30 top-6  ">
        <nav className="h-[48px] bg-primary rounded-full flex items-center z-30 px-8 py-4 gap-24 shadow-2xl">
          <Header />
        </nav>
      </section>

      <Hamburger />

      <section className=" relative p-4 bg-secondary md:rounded-b-[64px]  md:mb-8  md:mx-[24px]  xl:mx-[62px] xl:mb-12 xl:rounded-b-[128px] overflow-hidden ">
        <svg className="absolute w-16 h-16 md:w-24  md:h-24 xl:w-32 xl:h-32 bg-primary -right-0 -top-0 rounded-bl-full text-bg">
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M120 120.268C120 104.474 116.909 88.8352 110.904 74.2435C104.898 59.6519 96.0959 46.3937 84.9993 35.2257C73.9027 24.0578 60.7291 15.1989 46.2307 9.15487C31.7323 3.11083 16.193 -6.90371e-07 0.499995 0L0.5 120.268H120Z"
            fill="#2C3333"
          />
        </svg>
        <section
          className=" grid md:grid-rows-[80px_1fr_100px]  xl:grid-rows-[80px_1fr_150px] gap-8"
          id="intro"
        >
          <div></div>
          <section className="flex flex-col md:justify-center items-center text-center">
            {/* ---Mobile only---- */}
            <section className="md:hidden flex flex-col items-center mt-12">
              <Image
                className="w-[278px] mb-1 "
                src={profileImage}
                alt="profile picture of anand"
              ></Image>
              <span className="relative ">
                <span className="relative uppercase font-extrabold text-4xl">
                  yeah &#x2019;ALLO
                  {/* Using the HTML entity for the apostrophe */}
                </span>
              </span>
            </section>
            {/* ---Tablet and above---- */}
            <section className="hidden  md:flex md:items-end   justify-center  md:place-content-end xl:mt-54 xl:py-8 flex-wrap self-center text-bg ">
              {/* <span className="relative animate-fade-left"> */}
              {/* <span className="rel "> */}

              <span className="animate-fade-left uppercase font-extrabold md:text-[8rem]  xl:text-[20rem] relative  leading-[0.7] w-fit ">
                <span className="text-sm md:text-base xl:text-xl absolute md:left-0 top-[-1.6rem] xl:left-[2rem] ">
                  yeah
                </span>
                &#x2019;AL
                {/* </span>{" "} */}
                {/* Using the HTML entity for the apostrophe */}
              </span>
              {/* </span> */}
              <Image
                className="md:w-[90px] xl:w-[219px]  z-10 md:text-[8rem] xl:text-[20rem] md:-mr-[0.55ch] xl:-mr-[0.5ch] "
                src={profileImage}
                alt="profile picture of anand"
              ></Image>
              <span className="uppercase font-extrabold md:text-[8rem]  xl:text-[20rem] relative  leading-[0.7] w-fit animate-fade-right">
                LO
              </span>
            </section>
            <section className="mt-8 flex flex-col xl:flex-row gap-8 md:justify-center xl:gap-44 lg:mx-12 font-roboto xl:text-left relative z-10">
              <p className="font-bold text-2xl max-w-[45ch]">
                I&#x2019;m a UI developer exploring how{" "}
                <span className="text-accent">advanced tech</span> enhances
                design. I blend creativity and logic to{" "}
                <br className="hidden md:block" /> craft{" "}
                <span className="text-accent">intuitive</span>, engaging
                interfaces.
              </p>
              <div>
                {/* <p className="font-bold text-lg  hidden md:block">
                  If you&#x2019;d like to know more about me{" "}
                  <Link
                    href={"/about"}
                    className="text-accent underline underline-offset-2"
                  >
                    click me!
                  </Link>
                </p> */}
                <p className="font-bold text-2xl  xl:text-right ">
                  Want to create something awesome? <br /> Let&#x2019;s get{" "}
                  <Link
                    href="#contact"
                    className="text-accent underline underline-offset-2"
                  >
                    started
                  </Link>
                  .
                </p>
              </div>
            </section>
          </section>

          <section className="w-full mt-4">
            <a
              href="#showcase-project"
              className="flex items-end justify-center w-full h-full motion-safe:animate-bounce-slow "
            >
              <Image
                src={arrow}
                alt="scroll to next content"
                className="w-8 md:w-14 md:h-14"
              />
            </a>
          </section>
        </section>
      </section>
      <Offerings />
      <section className="px-6 py-4 relative    md:mx-[24px] md:rounded-b-[18px]  xl:rounded-b-[36px] xl:px-16 xl:py-16 bg-secondary xl:mx-[62px] md:drop-shadow-lg ">
        <svg className="absolute hidden md:inline-block md:w-12 md:h-12 xl:w-24 xl:h-24 bg-primary -left-0 -top-0 rounded-bl-full text-bg -rotate-90">
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M120 120.268C120 104.474 116.909 88.8352 110.904 74.2435C104.898 59.6519 96.0959 46.3937 84.9993 35.2257C73.9027 24.0578 60.7291 15.1989 46.2307 9.15487C31.7323 3.11083 16.193 -6.90371e-07 0.499995 0L0.5 120.268H120Z"
            fill="#2C3333"
          />
        </svg>
        <h3
          className="font-extrabold text-right mb-2 flex w-full justify-end text-3xl md:text-4xl xl:text-7xl uppercase md:mb-4 xl:mb-8"
          id="contact"
        >
          <Image
            src={headerAnchor}
            alt="header-anchor"
            className="w-12 md:w-16 xl:w-40"
          />
          contact
        </h3>
        <section className="flex flex-col md:flex-row justify-between gap-14 mb-12 z-10 relative">
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
                <a href="mailto:anand.patil.ap79@gmail.com">
                  anand.patil.ap79@gmail.com
                </a>
              </li>
            </ul>
          </section>
          <ContactForm />
        </section>
        <Image
          className="absolute bottom-0 left-0 opacity-15 -rotate-45 z-0"
          alt="decorative-element"
          src={arrowDecoration}
        />
      </section>
      <Footer />
    </main>
  );
}
