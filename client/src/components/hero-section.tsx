import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Eye, Github, Linkedin, Mail } from "lucide-react";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import Typewriter from "typewriter-effect";
import tejasPhoto from "@assets/tejass_pass_photo-Photoroom.png";

export function HeroSection() {
  const projectsCount = useCounterAnimation(15, 2000);
  const cgpaValue = useCounterAnimation(8.7, 2000, 0.1);
  const languagesCount = useCounterAnimation(7, 2000);
  const certificationsCount = useCounterAnimation(3, 2000);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-[95vh] flex items-center justify-center relative overflow-hidden pt-20 pb-10"
    >
      {/* Floating Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5" />
      {[ // Floating elements
        { class: "top-20 left-10 w-20 h-20", delay: 0, y: [-20, 20, -20], dur: 6 },
        { class: "bottom-20 right-10 w-16 h-16", delay: -1, y: [20, -20, 20], dur: 8 },
        { class: "top-1/2 left-20 w-12 h-12", delay: -2, y: [-15, 15, -15], dur: 7 },
      ].map((cfg, i) => (
        <motion.div
          key={i}
          className={`absolute ${cfg.class} rounded-full bg-primary/20`}
          animate={{ y: cfg.y }}
          transition={{
            duration: cfg.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: cfg.delay,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 z-10 w-full">
        {/* Image + Text Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* Photo Section */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl"
          >
            <img
              src={tejasPhoto}
              alt="Tejas Jiddewar"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Section */}
          <div className="text-center md:text-left max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-[#1a237e] mb-4"

            >
              TEJAS JIDDEWAR
            </motion.h1>

            {/* Typewriter Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl font-medium text-blue-600 font-mono mb-6 min-h-[36px]"
            >
              <Typewriter
                options={{
                  strings: [
                    "Data Analytics",
                    "Business Intelligence",
                    "Machine Learning",
                    "Dashboard Development",
                    "Insight Generation",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 30,
                }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Transforming raw data into actionable insights with interactive dashboards, advanced analytics, and ML-driven solutions.
            </motion.p>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 mb-12"
        >
          <Button onClick={() => scrollTo("projects")} size="lg" className="px-6 py-3 text-base md:text-lg">
            <Eye className="mr-2 h-5 w-5" /> View My Work
          </Button>
          <Button
            onClick={() => scrollTo("contact")}
            variant="outline"
            size="lg"
            className="px-6 py-3 text-base md:text-lg"
          >
            <Mail className="mr-2 h-5 w-5" /> Get In Touch
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
        >
          {[
            { label: "Projects", value: projectsCount, color: "text-primary" },
            { label: "CGPA", value: cgpaValue, color: "text-green-600" },
            { label: "Languages", value: languagesCount, color: "text-purple-600" },
            { label: "Certifications", value: certificationsCount, color: "text-pink-600" },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-effect p-6 rounded-lg text-center hover:scale-105 transition-transform duration-300"
            >
              <div className={`text-3xl font-bold ${item.color}`}>{item.value}</div>
              <div className="text-md text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Socials */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.1 }}
  className="flex justify-center space-x-8 mt-4"
>
  {[Linkedin, Github, Mail, Download].map((Icon, i) => (
    <Button
      key={i}
      variant="ghost"
      size="icon"
      className="hover:text-primary transition-colors duration-300 w-12 h-12"
    >
      <Icon className="h-8 w-8" />
    </Button>
  ))}
</motion.div>

      </div>
    </section>
  );
}
