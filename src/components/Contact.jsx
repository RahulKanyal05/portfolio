import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      label: "Email",
      value: "rahulkanyal838@gmail.com",
      link: "mailto:rahulkanyal838@gmail.com",
      icon: "✉️",
    },
    {
      label: "Phone",
      value: "+91 9045134621",
      link: "tel:+919045134621",
      icon: "📱",
    },
    {
      label: "GitHub",
      value: "github.com/RahulKanyal05",
      link: "https://github.com/RahulKanyal05",
      icon: "💻",
    },
    {
      label: "Location",
      value: "Uttarakhand, India",
      link: null,
      icon: "📍",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6 text-center"
        >
          Get In{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 text-lg mb-12 max-w-2xl mx-auto"
        >
          I'm always open to discussing new projects, opportunities, or just having a chat about tech.
          Feel free to reach out!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={info.link ? { scale: 1.05, y: -5 } : {}}
              className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 ${
                info.link
                  ? "hover:border-cyan-500/50 cursor-pointer"
                  : "cursor-default"
              } transition-all duration-300`}
            >
              {info.link ? (
                
                 <a href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="block"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{info.icon}</span>
                    <div>
                      <p className="text-sm text-gray-500 font-semibold mb-1">
                        {info.label}
                      </p>
                      <p className="text-cyan-400 font-medium">{info.value}</p>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{info.icon}</span>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold mb-1">
                      {info.label}
                    </p>
                    <p className="text-gray-300 font-medium">{info.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          
          <a  href="mailto:rahulkanyal838@gmail.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            Send me an email →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;