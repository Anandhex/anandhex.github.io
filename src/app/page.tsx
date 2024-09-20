import Image from "next/image";
import profileImage from "@/app/assets/images/me/me.png";
import arrow from "@/app/assets/icons/arrow.svg";
import headerAnchor from "@/app/assets/icons/header_anchor.svg";
import arrowDecoration from "@/app/assets/icons/arrow_decoration.svg";
import configurator from "@/app/assets/images/projects/configurator.png";
import catalogues from "@/app/assets/images/projects/Screenshot 2024-09-20 at 3.06.13 PM.png";
import ecommerce from "@/app/assets/images/projects/ecommerce.jpeg";
import dashboard from "@/app/assets/images/projects/dashboard.jpg";
import goTo from "@/app/assets/icons/goto.svg";
import ContactForm from "@/app/components/ContactForm";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hamburger from "./components/Hamburger";

export default function Home() {
  return (
    <main className="bg-primary text-primary max-w-[1920px] m-auto relative">
      <section className="hidden fixed w-full md:flex justify-center items-center z-30 top-6  ">
        <nav className="h-[48px] bg-primary rounded-full flex items-center z-30 px-8 py-4 gap-24 shadow-2xl">
          <Header />
        </nav>
      </section>

      <Hamburger />

      <section className=" relative p-4 bg-secondary md:rounded-b-[64px]  md:mb-8  md:mx-[24px] xl:min-h-screen xl:mx-[62px] xl:mb-12 xl:rounded-b-[258px] overflow-hidden ">
        <svg className="absolute w-16 h-16 md:w-24  md:h-24 xl:w-32 xl:h-32 bg-primary -right-0 -top-0 rounded-bl-full text-bg">
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M120 120.268C120 104.474 116.909 88.8352 110.904 74.2435C104.898 59.6519 96.0959 46.3937 84.9993 35.2257C73.9027 24.0578 60.7291 15.1989 46.2307 9.15487C31.7323 3.11083 16.193 -6.90371e-07 0.499995 0L0.5 120.268H120Z"
            fill="#2C3333"
          />
        </svg>
        <section
          className=" grid md:grid-rows-[80px_500px_100px] xl:min-h-screen xl:grid-rows-[80px_1fr_200px]"
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
            <section className="hidden  md:flex md:items-end  xl:items-center justify-center  md:place-content-end xl:mt-54 xl:py-8 flex-wrap self-center text-bg ">
              <span className="relative animate-fade-left">
                <span className="relative uppercase font-extrabold md:text-[8rem]  xl:text-[22rem] w-fit leading-[0.7]  ">
                  <span className="text-sm xl:text-xl absolute md:top-6 xl:top-24 xl:left-12">
                    yeah
                  </span>
                  <span>&#x2019;AL</span>{" "}
                  {/* Using the HTML entity for the apostrophe */}
                </span>
              </span>
              <Image
                className="md:w-[90px] xl:w-[219px] relative xl:-top-[1.6rem] z-10 md:text-[8rem] xl:text-[22rem] md:-mr-[0.55ch] xl:-mr-[0.5ch] "
                src={profileImage}
                alt="profile picture of anand"
              ></Image>
              <span className="uppercase font-extrabold md:text-[8rem]  xl:text-[22rem] relative  leading-[0.7] w-fit animate-fade-right">
                LO
              </span>
            </section>
            <section className="mt-8 flex flex-col xl:flex-row gap-8 md:justify-center xl:gap-44 font-roboto xl:text-left relative z-10">
              <p className="font-bold text-2xl max-w-[45ch]">
                I&#x2019;m a UI developer exploring how{" "}
                <span className="text-accent">advanced tech</span> enhances
                design. I blend creativity and logic to{" "}
                <br className="hidden md:block" /> craft{" "}
                <span className="text-accent">intuitive</span>, engaging
                interfaces.
              </p>
              <div>
                <p className="font-bold text-lg  hidden md:block">
                  If you&#x2019;d like to know more about me{" "}
                  <Link
                    href={"/about"}
                    className="text-accent underline underline-offset-2"
                  >
                    click me!
                  </Link>
                </p>
                <p className="font-bold text-2xl mt-2 xl:text-right ">
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
      <section
        className="px-6 py-4 relative  md:mb-8  md:mx-[24px] md:rounded-b-[18px]  xl:rounded-b-[36px] xl:px-16 xl:py-16 bg-secondary xl:mx-[62px] xl:mb-12 md:drop-shadow-lg "
        id="showcase-project"
      >
        <svg className="absolute hidden md:inline-block md:w-12 md:h-12 xl:w-24 xl:h-24 bg-primary -left-0 -top-0 rounded-bl-full text-bg -rotate-90">
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M120 120.268C120 104.474 116.909 88.8352 110.904 74.2435C104.898 59.6519 96.0959 46.3937 84.9993 35.2257C73.9027 24.0578 60.7291 15.1989 46.2307 9.15487C31.7323 3.11083 16.193 -6.90371e-07 0.499995 0L0.5 120.268H120Z"
            fill="#2C3333"
          />
        </svg>

        <h3 className="font-extrabold text-right mb-2 flex w-full justify-end text-3xl md:text-4xl xl:text-7xl uppercase md:mb-4 xl:mb-8">
          <Image
            src={headerAnchor}
            alt="header-anchor"
            className="w-12 md:w-16 xl:w-40"
          />
          Projects
        </h3>
        <section className="grid gap-y-4 grid-cols-1 md:grid-cols-2 md:place-content-end md:gap-4  md:place-items-end md:justify-end xl:grid-cols-6 xl:gap-8">
          <div className=" w-full xl:col-span-4  bg-gray-200 md:place-self-end hover:shadow-lg transition-shadow group overflow-hidden bg-primary">
            <Image
              src={dashboard}
              alt="configurator project thumbnail"
              className="w-full object-cover relative md:h-32 xl:h-64 xl:group-hover:-translate-y-9 group-hover:shadow-lg transition-transform"
            />
            <h4 className="md:text-2xl  xl:text-4xl text-secondary uppercase font-extrabold px-8 pt-4 xl:pt-0 xl:translate-y-8 xl:group-hover:-translate-y-3.5 xl:transition-transform ">
              analytics dashboards and report generators
            </h4>
            <div className="px-8 pb-4 flex text-secondary justify-between items-end xl:opacity-0  xl:group-hover:opacity-100 xl:group-hover:-translate-y-3.5 transition-transform ">
              <p className="font-roboto md:text-sm xl:text-base  line-clamp-2 basis-3/4">
                Report and form generators dynamically create customized reports
                from JSON data and generate dynamic forms based on rules,
                similar to Google Forms. These tools enable efficient, automated
                workflows tailored to specific user requirements.
              </p>
              <a href="#" className="basis-1/4 flex justify-end">
                <Image src={goTo} alt="What are configurators" width={48} />
              </a>
            </div>
          </div>
          <div className="w-full xl:col-span-2 h-full bg-gray-200 md:place-self-end hover:shadow-lg transition-shadow group overflow-hidden bg-primary">
            <Image
              src={configurator}
              alt="configurator project thumbnail"
              className="w-full object-cover relative md:h-32 xl:h-64  xl:group-hover:-translate-y-9 group-hover:shadow-lg transition-transform"
            />
            <h4 className="md:text-2xl  xl:text-4xl text-secondary uppercase font-extrabold px-8 pt-4 xl:pt-0 xl:translate-y-8 xl:group-hover:-translate-y-3.5 xl:transition-transform ">
              configurators
            </h4>
            <div className="px-8 pb-4 xl:pb-0 flex text-secondary justify-between items-end xl:opacity-0  xl:group-hover:opacity-100 xl:group-hover:-translate-y-3.5 transition-transform ">
              <p className="font-roboto md:text-sm xl:text-base  line-clamp-2 basis-3/4">
                Configurators focus on creating tailored combinations for
                industrial products, allowing users to generate custom solutions
                from a vast array of system configurations. These tools
                streamline complex decision-making for highly customizable
                systems.
              </p>
              <a href="#" className="basis-1/4 flex justify-end">
                <Image src={goTo} alt="What are configurators" width={48} />
              </a>
            </div>
          </div>
          <div className="w-full xl:col-span-2 xl:col-start-3   bg-gray-200 md:place-self-end hover:shadow-lg transition-shadow group overflow-hidden bg-primary">
            <Image
              src={catalogues}
              alt="configurator project thumbnail"
              className="w-full object-cover relative md:h-32 xl:h-64  xl:group-hover:-translate-y-9 group-hover:shadow-lg transition-transform"
            />
            <h4 className="md:text-2xl  xl:text-4xl text-secondary uppercase font-extrabold px-8 pt-4 xl:pt-0 xl:translate-y-8 xl:group-hover:-translate-y-3.5 xl:transition-transform ">
              catalogues
            </h4>
            <div className="px-8 pb-4 flex text-secondary justify-between items-end xl:opacity-0  xl:group-hover:opacity-100 xl:group-hover:-translate-y-3.5 transition-transform ">
              <p className="font-roboto md:text-sm xl:text-base  line-clamp-2 basis-3/4">
                Catalogues showcase a diverse range of products from different
                business areas, providing an organized display for easy browsing
                and selection. They help businesses present their offerings
                clearly and efficiently to customers.
              </p>
              <a href="#" className="basis-1/4 flex justify-end">
                <Image src={goTo} alt="What are configurators" width={48} />
              </a>
            </div>
          </div>
          <div className="w-full xl:col-span-2   bg-gray-200 md:place-self-end hover:shadow-lg transition-shadow group overflow-hidden bg-primary">
            <Image
              src={ecommerce}
              alt="configurator project thumbnail"
              className="w-full object-cover h-[250px] relative md:h-32 xl:h-64  xl:group-hover:-translate-y-9 group-hover:shadow-lg transition-transform"
            />
            <h4 className="md:text-2xl  xl:text-4xl text-secondary uppercase font-extrabold px-8 pt-4 xl:pt-0 xl:translate-y-8 xl:group-hover:-translate-y-3.5 xl:transition-transform ">
              e-commerce
            </h4>
            <div className="px-8 pb-4 flex text-secondary justify-between items-end xl:opacity-0  xl:group-hover:opacity-100 xl:group-hover:-translate-y-3.5 transition-transform ">
              <p className="font-roboto md:text-sm xl:text-base  line-clamp-2 basis-3/4">
                An e-commerce application should deliver seamless user
                experiences, from intuitive product browsing to smooth checkout.
                By optimizing design and functionality, I create online stores
                that drive engagement and boost conversions.
              </p>
              <a href="#" className="basis-1/4 flex justify-end">
                <Image src={goTo} alt="What are configurators" width={48} />
              </a>
            </div>
          </div>
        </section>
      </section>
      <section className="px-6 py-4 relative    md:mx-[24px] md:rounded-b-[18px]  xl:rounded-b-[36px] xl:px-16 xl:py-16 bg-secondary xl:mx-[62px]  md:drop-shadow-lg overflow-hidden">
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
          Contact
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
                anand.patil.ap79@gmail.com
              </li>
              <li>
                <span className="font-bold">Phone:</span> +91 81 05 100 832
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
