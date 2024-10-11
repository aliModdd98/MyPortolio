import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import UnderlinedText from "../HeadLine/HeadLine";
import {
  FaFacebookF,
  FaGithub,
  FaTelegramPlane,
  FaLinkedinIn,
} from "react-icons/fa";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
export const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false); // Add loading state

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loader

    try {
      await emailjs.sendForm(
        "service_x9jsh39",
        "template_5nyso17",
        form.current,
        "A6Ckkl4dZn52yTojS"
      );
      console.log("User's message sent successfully!");

      const userName = form.current.user_name.value;
      const userEmail = form.current.user_email.value;

      await emailjs.send(
        "service_x9jsh39",
        "template_abuwgrg",
        { user_name: userName, user_email: userEmail },
        "A6Ckkl4dZn52yTojS"
      );
      console.log("Auto-reply sent successfully!");
    } catch (error) {
      console.log("Error:", error.text);
    } finally {
      setLoading(false); // Stop loader
    }
  };

  return (
    <div className="flex justify-center items-center py-12 bg-gray-100 flex-col">
      <UnderlinedText>
        <h1 className="text-[40px]" style={{ letterSpacing: "4px" }}>
          Contact Me
        </h1>
      </UnderlinedText>

      <div className="flex md:flex-row-reverse flex-col-reverse justify-between flex-1 md:px-4 px-2 space-y-8 md:space-y-0">
        {/* Form Section */}
        <div className="md:w-1/2 w-full bg-white p-4 rounded-lg shadow-lg">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium text-xl mb-2">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-orange-500 focus:border-orange-500 outline-none"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2 text-xl">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-orange-500 focus:border-orange-500 outline-none"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2 text-xl">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-orange-500 focus:border-orange-500 outline-none"
                placeholder="Your Message"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300 cursor-pointer"
                disabled={loading} // Disable button while loading
              >
                {loading ? (
                  <span className="flex justify-center items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291l-3.015 1.736A9.956 9.956 0 010 12H4a6 6 0 006 6v-2.709z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Text & Social Media Section */}
        <div className="flex md:w-1/2 w-full justify-start flex-col mb-6 p-8">
          <h1 className="text-primary text-3xl font-bold">
            Let’s work together
          </h1>
          <p className="text-gray-600 mt-4 text-2xl">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out via
            the form or connect with me through my social media.
          </p>
        </div>
      </div>
      <div className="flex space-x-6 mt-10 justify-center ">
        {/* Social Media Icons with Animations */}
        <a
          href="https://www.facebook.com/eng.3limoddd?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-orange-500 transform hover:scale-110 transition duration-300"
        >
          <FaFacebookF size={30} />
        </a>
        <a
          href="https://github.com/aliModdd98"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-orange-500 transform hover:scale-110 transition duration-300"
        >
          <FaGithub size={30} />
        </a>

        <a
          href="https://t.me/Ali_moh98"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-orange-500 transform hover:scale-110 transition duration-300"
        >
          <FaTelegramPlane size={30} />
        </a>

        <a
          href="https://www.instagram.com/3li_moddd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-orange-500 transform hover:scale-110 transition duration-300"
        >
          <RiInstagramFill size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/ali-mohamad-8931b1211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-orange-500 transform hover:scale-110 transition duration-300"
        >
          <FaLinkedinIn size={30} />
        </a>

        <a
          href="https://wa.link/bf95oq" // WhatsApp link
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security recommendation to prevent access to your window object
          className="text-gray-600 hover:text-orange-500 transform hover:scale-110 transition duration-300"
        >
          <RiWhatsappFill size={30} />
        </a>
      </div>
    </div>
  );
};
