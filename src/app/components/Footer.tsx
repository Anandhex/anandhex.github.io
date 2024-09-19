interface Props {}

import ScrollToTopButton from "./ScrollToTopButton";

const Footer: React.FC<Props> = () => {
  const currentDate = new Date();

  return (
    <footer className="flex justify-end p-4 xl:p-8 items-center">
      <div className="flex gap-6">
        <p className="text-secondary flex items-center">
          © Anand Patil 2024{" "}
          {currentDate.getFullYear() != 2024
            ? ` - ${currentDate.getFullYear()}`
            : ""}
        </p>
        <ScrollToTopButton />
      </div>
    </footer>
  );
};

export default Footer;
