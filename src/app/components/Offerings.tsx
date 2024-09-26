"use client";
import Image from "next/image";

import headerAnchor from "@/app/assets/icons/header_anchor.svg";
import configurator from "@/app/assets/images/projects/configurator.png";
import catalogues from "@/app/assets/images/projects/Screenshot 2024-09-20 at 3.06.13 PM.png";
import ecommerce from "@/app/assets/images/projects/ecommerce.jpeg";
import dashboard from "@/app/assets/images/projects/dashboard.jpg";
import portfolio from "@/app/assets/images/projects/portfolio.png";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Offerings: React.FC<{}> = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".image-card",
        scrub: true,
        start: "-500px",
        end: "-250px",
        markers: true,
        once: true,
      },
    });
    tl.fromTo(
      ".image-card",
      { x: "-100%", stagger: 0.2, opacity: 0 },
      { x: 0, opacity: 1 }
    );
    return () => {
      tl.kill();
    };
  });

  return (
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
        offerings
      </h3>
      <section className="grid gap-y-4 grid-cols-1 md:grid-cols-2 md:place-content-end md:gap-4  md:place-items-end md:justify-end xl:grid-cols-6 xl:gap-8">
        <div className="image-card w-full xl:col-span-4  bg-gray-200 md:place-self-end hover:shadow-lg transition-shadow group overflow-hidden bg-primary">
          <Image
            src={dashboard}
            alt="configurator project thumbnail"
            className="w-full object-cover relative md:h-32 xl:h-64 xl:group-hover:-translate-y-9 group-hover:shadow-lg transition-transform"
          />
          <h4 className="md:text-2xl break-words  text-secondary uppercase font-extrabold px-8 pt-4 xl:pt-0 xl:translate-y-8 xl:group-hover:-translate-y-3.5 xl:transition-transform ">
            dashboards and report generators
          </h4>
          <div className="px-8 pb-4 flex text-secondary justify-between items-end xl:opacity-0  xl:group-hover:opacity-100 xl:group-hover:-translate-y-3.5 transition-transform ">
            <p
              className="font-roboto md:text-sm xl:text-base  line-clamp-2 "
              title="Report and form generators dynamically create customized reports
            from JSON data and generate dynamic forms based on rules,
            similar to Google Forms. These tools enable efficient, automated
            workflows tailored to specific user requirements."
            >
              Report and form generators dynamically create customized reports
              from JSON data and generate dynamic forms based on rules, similar
              to Google Forms. These tools enable efficient, automated workflows
              tailored to specific user requirements.
            </p>
          </div>
        </div>
        <div className="image-card w-full xl:col-span-2 h-full bg-gray-200 md:place-self-end hover:shadow-lg transition-shadow group overflow-hidden bg-primary">
          <Image
            src={configurator}
            alt="configurator project thumbnail"
            className="w-full object-cover relative md:h-32 xl:h-64  xl:group-hover:-translate-y-9 group-hover:shadow-lg transition-transform"
          />
          <h4 className="md:text-2xl break-words  text-secondary uppercase font-extrabold px-8 pt-4 xl:pt-0 xl:translate-y-8 xl:group-hover:-translate-y-3.5 xl:transition-transform ">
            configurators
          </h4>
          <div className="px-8 pb-4 xl:pb-0 flex text-secondary justify-between items-end xl:opacity-0  xl:group-hover:opacity-100 xl:group-hover:-translate-y-3.5 transition-transform ">
            <p
              className="font-roboto md:text-sm xl:text-base  line-clamp-2 "
              title="Configurators focus on creating tailored combinations for
            industrial products, allowing users to generate custom solutions
            from a vast array of system configurations. These tools
            streamline complex decision-making for highly customizable
            systems."
            >
              Configurators focus on creating tailored combinations for
              industrial products, allowing users to generate custom solutions
              from a vast array of system configurations. These tools streamline
              complex decision-making for highly customizable systems.
            </p>
          </div>
        </div>
        <div className="image-card w-full xl:col-span-2   bg-gray-200 md:place-self-end hover:shadow-lg transition-shadow group overflow-hidden bg-primary">
          <Image
            src={portfolio}
            alt="configurator project thumbnail"
            className="w-full object-contain h-[250px] relative md:h-32 xl:h-64  xl:group-hover:-translate-y-9 group-hover:shadow-lg transition-transform"
          />
          <h4 className="md:text-2xl break-words  text-secondary uppercase font-extrabold px-8 pt-4 xl:pt-0 xl:translate-y-8 xl:group-hover:-translate-y-3.5 xl:transition-transform ">
            portfolios
          </h4>
          <div className="px-8 pb-4 flex text-secondary justify-between items-end xl:opacity-0  xl:group-hover:opacity-100 xl:group-hover:-translate-y-3.5 transition-transform ">
            <p
              className="font-roboto md:text-sm xl:text-base  line-clamp-2 "
              title="Create custom portfolios that highlight your unique skills,
            achievements, and projects. These portfolios are designed to
            showcase your professional identity in a visually compelling
            way, helping you stand out to potential clients or employers."
            >
              Create custom portfolios that highlight your unique skills,
              achievements, and projects. These portfolios are designed to
              showcase your professional identity in a visually compelling way,
              helping you stand out to potential clients or employers.
            </p>
          </div>
        </div>
        <div className="image-card w-full xl:col-span-2   bg-gray-200 md:place-self-end hover:shadow-lg transition-shadow group overflow-hidden bg-primary">
          <Image
            src={catalogues}
            alt="configurator project thumbnail"
            className="w-full object-cover relative md:h-32 xl:h-64  xl:group-hover:-translate-y-9 group-hover:shadow-lg transition-transform"
          />
          <h4 className="md:text-2xl break-words  text-secondary uppercase font-extrabold px-8 pt-4 xl:pt-0 xl:translate-y-8 xl:group-hover:-translate-y-3.5 xl:transition-transform ">
            catalogues
          </h4>
          <div className="px-8 pb-4 flex text-secondary justify-between items-end xl:opacity-0  xl:group-hover:opacity-100 xl:group-hover:-translate-y-3.5 transition-transform ">
            <p
              className="font-roboto md:text-sm xl:text-base  line-clamp-2 "
              title="Catalogues showcase a diverse range of products from different
            business areas, providing an organized display for easy browsing
            and selection. They help businesses present their offerings
            clearly and efficiently to customers."
            >
              Catalogues showcase a diverse range of products from different
              business areas, providing an organized display for easy browsing
              and selection. They help businesses present their offerings
              clearly and efficiently to customers.
            </p>
          </div>
        </div>
        <div className=" image-card w-full xl:col-span-2   bg-gray-200 md:place-self-end hover:shadow-lg transition-shadow group overflow-hidden bg-primary">
          <Image
            src={ecommerce}
            alt="configurator project thumbnail"
            className="w-full object-cover h-[250px] relative md:h-32 xl:h-64  xl:group-hover:-translate-y-9 group-hover:shadow-lg transition-transform"
          />
          <h4 className="md:text-2xl break-words  text-secondary uppercase font-extrabold px-8 pt-4 xl:pt-0 xl:translate-y-8 xl:group-hover:-translate-y-3.5 xl:transition-transform ">
            e-commerce
          </h4>
          <div className="px-8 pb-4 flex text-secondary justify-between items-end xl:opacity-0  xl:group-hover:opacity-100 xl:group-hover:-translate-y-3.5 transition-transform ">
            <p className="font-roboto md:text-sm xl:text-base  line-clamp-2 ">
              An e-commerce application should deliver seamless user
              experiences, from intuitive product browsing to smooth checkout.
              By optimizing design and functionality, I create online stores
              that drive engagement and boost conversions.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Offerings;
