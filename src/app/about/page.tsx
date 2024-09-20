import Image from "next/image";
import profileImage from "@/app/assets/images/me/me.png";
import headerAnchor from "@/app/assets/icons/header_anchor.svg";
import arrowDecoration from "@/app/assets/icons/arrow_decoration.svg";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hamburger from "../components/Hamburger";

export default function Home() {
  return (
    <main className="bg-primary text-primary max-w-[1920px] m-auto relative">
      <Hamburger />
      <section className="hidden fixed w-full xl:flex justify-center items-center z-30 top-6  ">
        <nav className="h-[48px] bg-primary rounded-full flex items-center z-30 px-8 py-4 gap-24 shadow-2xl">
          <Header />
        </nav>
      </section>

      <section className=" relative p-4 bg-secondary md:rounded-b-[64px]  md:mb-8  md:mx-[24px] xl:min-h-screen xl:mx-[62px]  overflow-hidden ">
        <svg className="absolute w-16 h-16 md:w-24  md:h-24 xl:w-32 xl:h-32 bg-primary -right-0 -top-0 rounded-bl-full text-bg">
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M120 120.268C120 104.474 116.909 88.8352 110.904 74.2435C104.898 59.6519 96.0959 46.3937 84.9993 35.2257C73.9027 24.0578 60.7291 15.1989 46.2307 9.15487C31.7323 3.11083 16.193 -6.90371e-07 0.499995 0L0.5 120.268H120Z"
            fill="#2C3333"
          />
        </svg>
        <section className="w-full relative mt-16 xl:mt-[180px] mb-16 text-bg">
          <h2 className="text-3xl xl:text-9xl font-extrabold text-center mb-14">
            I&#x2019;m Anand.
          </h2>
          <section className="flex  flex-col items-center md:flex-row justify-center md:items-start gap-4 md:gap-8 mx-auto md:w-max">
            <Image
              src={profileImage}
              alt="profile image of anand"
              priority
              width={240}
            />
            <div className="max-w-[65ch]">
              <p className="lg:text-4xl font-bold mb-4">
                I&lsquo;m a UI developer who mixes tech and creativity to whip
                up designs that look and feel awesome.
              </p>
              <p className="mb-4 lg:text-lg">
                Think of me as a tech wizard crafting pixel-perfect magic. I
                blend creativity with precision to make interfaces smooth and
                engaging.
              </p>
              <p className="lg:text-lg">
                Right now, I&lsquo;m studying Computational Modeling and
                Simulation at TU Dresden, which allows me to refine my technical
                skills and address complex, real-world challenges.
              </p>
            </div>
          </section>
        </section>
        <section className="lg:px-32 mb-16 ">
          <h3 className="font-extrabold mb-2 md:mb-4 text-right flex w-full justify-end text-2xl md:text-4xl xl:text-7xl uppercase xl:mb-8 ">
            <Image
              src={headerAnchor}
              alt="header-anchor"
              className="w-12 md:w-16 xl:w-40"
            />
            Skills
          </h3>
          <section className="flex flex-wrap justify-between items-center">
            <section className="flex flex-wrap justify-center text-center md:text-left md:items-start gap-8">
              <section>
                <h4 className="text-2xl font-bold mb-4 uppercase text-accent">
                  Languages
                </h4>
                <ul>
                  <li>JavaScript (ES6+)</li>
                  <li>TypeScript</li>
                  <li>HTML</li>
                  <li>CSS/SASS</li>
                  <li>Node</li>
                  <li>Python</li>
                  <li>Java</li>
                </ul>
              </section>
              <section>
                <h4 className="text-2xl font-bold mb-4 uppercase text-accent">
                  Frameworks
                </h4>
                <ul>
                  <li>React</li>
                  <li>Angular</li>
                  <li>Express</li>
                  <li>Flask</li>
                  <li>Meteor</li>
                  <li>NextJS</li>
                </ul>
              </section>
              <section>
                <h4 className="text-2xl font-bold mb-4 uppercase text-accent">
                  Design
                </h4>
                <ul>
                  <li>Figma</li>
                  <li>Prototyping</li>
                  <li>Wireframing</li>
                </ul>
              </section>
            </section>
            <section className="hidden md:block md:w-24 md:h-24 lg:w-52 lg:h-52 overflow-hidden mr-16">
              <img
                src="https://skillicons.dev/icons?perline=1&i=java,angular,css,electron,express,flask,git,html,java,js,mongodb,mysql,nextjs,nodejs,py,react,redux,sass,tailwind,docker,ts,vite,vscode,nodejs,figma&theme=dark"
                alt="skills"
                className="move-skills w-full"
              />
            </section>
          </section>
        </section>
        <section className="lg:px-32 mb-24">
          <h3 className="font-extrabold mb-2 md:mb-4 text-right flex w-full justify-end text-2xl md:text-4xl xl:text-7xl uppercase xl:mb-8 ">
            <Image
              src={headerAnchor}
              alt="header-anchor"
              className="w-12 md:w-16 xl:w-40"
            />
            Interests
          </h3>
          <section className="flex flex-wrap-reverse lg:grid lg:grid-cols-2 lg:place-content-end gap-8">
            <section className="grid grid-cols-5 gap-4">
              <img
                className="col-span-3 object-cover h-64 w-full"
                src="https://wallpapers.com/downloads/high/one-piece-pictures-e00ebjeuzkkfoe42.webp"
                alt="One Piece anime"
              />
              <img
                className="col-span-2 object-cover h-64 w-full"
                src="https://m.media-amazon.com/images/I/81JJPDNlxSL._AC_UF1000,1000_QL80_.jpg"
                alt="The Silent Patient"
              />
              <img
                className="col-span-2 object-cover h-64 w-full"
                src="https://wallpapers.com/downloads/high/epic-manhwa-battle-scene-h8n98uu762m0kq1f.webp"
                alt="Solo Leveling"
              />

              <img
                className="col-span-3 object-cover h-64 w-full"
                src="https://wallpapers.com/downloads/high/that-time-i-got-reincarnated-as-a-slime-3840-x-2160-background-href1zyt6skx7x46.webp"
                alt="That Time I Got Reincarnated as a Slime"
              />
            </section>
            <section>
              <p className="max-w-[45ch] lg:max-w-full font-roboto font-semibold text-lg">
                When I&lsquo;m not busy weaving code into user-friendly designs,
                you&lsquo;ll probably find me sketching away in my free time,
                trying to master my anime-watching skills (One Piece is my
                long-term obsession, and I can&lsquo;t get enough of those
                isekai adventures), or getting lost in a psychological thriller
                like <em>The Silent Patient</em>.
              </p>
              <p className="max-w-[45ch lg:max-w-full font-roboto font-semibold text-lg">
                I&lsquo;m also a big fan of manhwa, which keeps my creative
                juices flowing and gives me fresh inspiration for my design
                projects. So, whether I&lsquo;m working on a new interface or
                just chilling with some manga, I&lsquo;m always on the lookout
                for the next great idea to bring to life.
              </p>
            </section>
          </section>
          <Image
            className="absolute bottom-0 right-0 opacity-15 rotate-[-145deg]  z-0"
            alt="decorative-element"
            src={arrowDecoration}
          />
        </section>
      </section>
      <Footer />
    </main>
  );
}
