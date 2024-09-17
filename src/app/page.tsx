import Image from "next/image";
import profileImage from "@/app/assets/images/me/me.png";
import arrow from "@/app/assets/icons/arrow.svg";
import arrowUp from "@/app/assets/icons/arrow_up.svg";
import headerAnchor from "@/app/assets/icons/header_anchor.svg";
import arrowDecoration from "@/app/assets/icons/arrow_decoration.svg";
import configurator from "@/app/assets/images/projects/configurator.png";
import goTo from "@/app/assets/icons/goto.svg";

export default function Home() {
  const currentDate = new Date();
  return (
    <main className="bg-primary text-primary max-w-[1920px] m-auto">
      <section className="min-h-screen relative p-4 bg-secondary md:rounded-b-[258px] lg:mx-[62px] lg:mb-12 overflow-hidden ">
        <svg className="absolute w-32 h-32 bg-primary -right-0 -top-0 rounded-bl-full text-bg">
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M120 120.268C120 104.474 116.909 88.8352 110.904 74.2435C104.898 59.6519 96.0959 46.3937 84.9993 35.2257C73.9027 24.0578 60.7291 15.1989 46.2307 9.15487C31.7323 3.11083 16.193 -6.90371e-07 0.499995 0L0.5 120.268H120Z"
            fill="#2C3333"
          />
        </svg>
        <section
          className="min-h-screen grid md:grid-rows-[80px_1fr_300px]"
          id="intro"
        >
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
                <span className="relative uppercase font-extrabold leading-[0.7] ">
                  <span className="text-lg absolute top-4 -left-4">yeah</span>
                  &#x2019;ALLO{/* Using the HTML entity for the apostrophe */}
                </span>
              </span>
            </section>
            {/* ---Tablet and above---- */}
            <section className="hidden  md:flex  items-center justify-center mt-64 lg:mt-32 lg:py-8 flex-wrap self-center text-bg ">
              <span className="relative ">
                <span className="relative uppercase font-extrabold  lg:text-[22rem] leading-[0.7]  ">
                  <span className="text-xl absolute top-24 left-12">yeah</span>
                  &#x2019;AL {/* Using the HTML entity for the apostrophe */}
                </span>
              </span>
              <Image
                className="w-[278px] relative -top-[1.6rem] z-10 lg:text-[22rem] -mr-[0.5ch] "
                src={profileImage}
                alt="profile picture of anand"
              ></Image>
              <span className="uppercase font-extrabold  lg:text-[22rem] relative drop-shadow-lg leading-[0.7] w-fit ">
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
                <p className="font-bold ">
                  If you&#x2019;d like to know more{" "}
                  <span className="text-accent">about me</span> as a person{" "}
                  <span className="hidden md:inline">or</span>
                </p>
                <p className="font-bold text-xl mt-2 lg:text-right ">
                  Want to create something awesome? <br /> Let&#x2019;s get{" "}
                  <a href="#contact" className="text-accent">
                    started
                  </a>
                  .
                </p>
              </div>
            </section>
          </section>

          <section className="w-full">
            <a
              href="#showcase-project"
              className="flex items-center justify-center w-full h-full"
            >
              <Image src={arrow} alt="scroll to next content" />
            </a>
          </section>
        </section>
      </section>
      <section
        className=" lg:px-16 lg:py-16 bg-secondary lg:mx-[62px] lg:mb-12 md:drop-shadow-lg md:ounded-b-[36px] relative px-4 md:rounded-b-[36px]"
        id="showcase-project"
      >
        <svg className="absolute hidden md:inline-block w-24 h-24 bg-primary -left-0 -top-0 rounded-bl-full text-bg -rotate-90">
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M120 120.268C120 104.474 116.909 88.8352 110.904 74.2435C104.898 59.6519 96.0959 46.3937 84.9993 35.2257C73.9027 24.0578 60.7291 15.1989 46.2307 9.15487C31.7323 3.11083 16.193 -6.90371e-07 0.499995 0L0.5 120.268H120Z"
            fill="#2C3333"
          />
        </svg>

        <h3 className="font-extrabold text-right flex w-full justify-end text-4xl lg:text-7xl uppercase mb-8">
          <Image src={headerAnchor} alt="header-anchor" />
          Projects
        </h3>
        <section className="grid grid-cols-1 md:grid-cols-6 md:place-content-end  md:gap-8 md:place-items-end md:justify-end ">
          <div className=" w-full md:col-span-4  bg-gray-200 md:place-self-end hover:shadow-lg transition-shadow group overflow-hidden bg-primary">
            <Image
              src={configurator}
              alt="configurator project thumbnail"
              className="w-full object-cover relative h-64 mb-8 group-hover:-translate-y-3.5 group-hover:shadow-lg transition-transform"
            />
            <h4 className="text-4xl text-secondary uppercase font-extrabold px-8 translate-y-6 group-hover:-translate-y-3.5 transition-transform ">
              configurators
            </h4>
            <div className="px-8 flex text-secondary justify-between items-end opacity-0 group-hover:opacity-100 group-hover:-translate-y-3.5 transition-transform pb-2">
              <p className="font-roboto max-w-[45ch]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium id, minima vitae quae ullam doloremque odit ipsa
              </p>
              <a href="#">
                <Image src={goTo} alt="What are configurators" width={48} />
              </a>
            </div>
          </div>
          <div className="w-full md:col-span-2 h-full bg-gray-200 md:place-self-end hover:shadow-lg transition-shadow group overflow-hidden bg-primary">
            <Image
              src={configurator}
              alt="configurator project thumbnail"
              className="w-full object-cover relative h-64 mb-8 group-hover:-translate-y-3.5 group-hover:shadow-lg transition-transform"
            />
            <h4 className="text-4xl text-secondary uppercase font-extrabold px-8 translate-y-6 group-hover:-translate-y-3.5 transition-transform ">
              configurators
            </h4>
            <div className="px-8 flex text-secondary justify-between items-end opacity-0 group-hover:opacity-100 group-hover:-translate-y-3.5 transition-transform pb-2">
              <p className="font-roboto max-w-[45ch]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium id
              </p>
              <a href="#">
                <Image src={goTo} alt="What are configurators" width={48} />
              </a>
            </div>
          </div>
          <div className="w-full md:col-start-3 col-span-2 h-64 bg-gray-200 md:place-self-end hover:shadow-lg transition-shadow group overflow-hidden bg-primary">
            <Image
              src={configurator}
              alt="configurator project thumbnail"
              className="w-full object-cover relative h-32 mb-8 group-hover:-translate-y-3.5 group-hover:shadow-lg transition-transform"
            />
            <h4 className="text-4xl text-secondary uppercase font-extrabold px-8 translate-y-6 group-hover:-translate-y-3.5 transition-transform ">
              configurators
            </h4>
            <div className="px-8 flex text-secondary justify-between items-end opacity-0 group-hover:opacity-100 group-hover:-translate-y-3.5 transition-transform pb-2">
              <p className="font-roboto max-w-[45ch]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <a href="#">
                <Image src={goTo} alt="What are configurators" width={48} />
              </a>
            </div>
          </div>
          <div className="w-full md:col-span-2  h-64 bg-gray-200 md:place-self-end hover:shadow-lg transition-shadow group overflow-hidden bg-primary">
            <Image
              src={configurator}
              alt="configurator project thumbnail"
              className="w-full object-cover relative h-32 mb-8 group-hover:-translate-y-3.5 group-hover:shadow-lg transition-transform"
            />
            <h4 className="text-4xl text-secondary uppercase font-extrabold px-8 translate-y-6 group-hover:-translate-y-3.5 transition-transform ">
              configurators
            </h4>
            <div className="px-8 flex text-secondary justify-between items-end opacity-0 group-hover:opacity-100 group-hover:-translate-y-3.5 transition-transform pb-2">
              <p className="font-roboto max-w-[45ch]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <a href="#">
                <Image src={goTo} alt="What are configurators" width={48} />
              </a>
            </div>
          </div>
        </section>
      </section>
      <section className="lg:px-16 lg:pt-16 lg:pb-8 bg-secondary lg:mx-[62px] drop-shadow-lg md:rounded-b-[36px] relative px-4">
        <svg className="absolute hidden md:inline-block w-24 h-24 bg-primary -left-0 -top-0 rounded-bl-full text-bg -rotate-90">
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M120 120.268C120 104.474 116.909 88.8352 110.904 74.2435C104.898 59.6519 96.0959 46.3937 84.9993 35.2257C73.9027 24.0578 60.7291 15.1989 46.2307 9.15487C31.7323 3.11083 16.193 -6.90371e-07 0.499995 0L0.5 120.268H120Z"
            fill="#2C3333"
          />
        </svg>
        <h3
          className="font-extrabold text-right flex w-full justify-end text-4xl lg:text-7xl uppercase mb-8 "
          id="contact"
        >
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
          <section className="flex flex-col  gap-4 md:w-[max(45ch,40%,300px)]">
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
            <div className=" w-full md:flex justify-end mb-8">
              <button className="bg-accent w-full md:w-fit h-[48px] px-4 text-2xl font-bold text-secondary hover:bg-primary transition-colors">
                Let&#x2019;s talk
              </button>
            </div>
          </section>
        </section>
        <Image
          className="absolute bottom-0 left-0 opacity-15 -rotate-45"
          alt="decorative-element"
          src={arrowDecoration}
        />
      </section>
      <footer className="flex justify-end p-8 items-center">
        <div className="flex gap-6">
          <p className="text-secondary flex items-center">
            © Anand Patil 2024{" "}
            {currentDate.getFullYear() != 2024
              ? ` - ${currentDate.getFullYear()}`
              : ""}
          </p>
          <a href="#intro">
            <Image
              src={arrowUp}
              className="rotate-180 w-8"
              alt="scroll to top"
            />
          </a>
        </div>
      </footer>
    </main>
  );
}
