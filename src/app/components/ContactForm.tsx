"use client";

import { FormEvent } from "react";
import { firestore } from "@/app/libs/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
interface Props {}
const ContactForm: React.FC<Props> = () => {
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log(name, email, message);

    try {
      // Add form data to Firestore
      await addDoc(collection(firestore, "contacts"), {
        name,
        email,
        message,
        timestamp: serverTimestamp(),
      });
      // Clear form
      // setFormData({
      //   name: '',
      //   email: '',
      //   message: ''
      // });

      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Failed to send message");
    }
  };

  return (
    <form
      id="contact-form"
      className="flex flex-col  gap-4 md:w-[max(45ch,40%,300px)]"
      onSubmit={(e) => {
        e.preventDefault();
        handleFormSubmit(e);
      }}
      action={() => {}}
    >
      <input
        type="text"
        className="h-[48px] bg-primary text-secondary p-4 placeholder:text-secondary"
        name="name"
        required
        placeholder="Name"
      />
      <input
        type="email"
        className="h-[48px] bg-primary text-secondary p-4 placeholder:text-secondary"
        name="email"
        required
        placeholder="Email"
      />
      <textarea
        className="bg-primary text-secondary p-4 placeholder:text-secondary"
        rows={6}
        name="message"
        required
        placeholder="Message"
      />
      <div className=" w-full md:flex justify-end mb-8">
        <button className="bg-accent w-full md:w-fit h-[48px] px-4 text-2xl font-bold text-secondary hover:bg-primary transition-colors">
          Let&#x2019;s talk
        </button>
      </div>
    </form>
  );
};
export async function getStaticProps() {
  return {
    props: {}, // Add static props if needed
  };
}
export default ContactForm;
