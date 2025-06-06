import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Eye, Github, Linkedin, Mail } from "lucide-react";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import tejasPhoto from "@assets/tejass_pass_photo-Photoroom.png";

export function HeroSection() {
  const projectsCount = useCounterAnimation(15, 2000);
  const cgpaValue = useCounterAnimation(8.7, 2000, 0.1);
  const languagesCount = useCounterAnimation(7, 2000);
  const certificationsCount = useCounterAnimation(3, 2000);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full floating-animation"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/20 rounded-full floating-animation"
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: -1 }}
      />
      <motion.div
        className="absolute top-1/2 left-20 w-12 h-12 bg-green-500/20 rounded-full floating-animation"
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: -2 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Professional Photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl cyber-glow"
          >
            <img
              src={tejasPhoto}
              alt="Tejas Jiddewar - Data Analytics Professional"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Name with Glitch Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-orbitron font-bold mb-6"
          >
            <span className="glitch-text gradient-text" data-text="TEJAS JIDDEWAR">
              TEJAS JIDDEWAR
            </span>
          </motion.h1>

          {/* Typewriter Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl mb-8 font-mono"
          >
            <span className="typewriter text-muted-foreground">
              Data Analytics • Business Intelligence • Machine Learning
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Transforming raw data into actionable insights through advanced analytics,
            interactive dashboards, and data-driven solutions that drive business growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="px-8 py-4 bg-gradient-to-r from-primary to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 cyber-glow"
            >
              <Eye className="mr-2 h-4 w-4" />
              View My Work
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </motion.div>

          {/* Achievement Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            <div className="glass-effect rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-primary">{projectsCount}</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="glass-effect rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-green-500">{cgpaValue}</div>
              <div className="text-sm text-muted-foreground">CGPA</div>
            </div>
            <div className="glass-effect rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-purple-500">{languagesCount}</div>
              <div className="text-sm text-muted-foreground">Languages</div>
            </div>
            <div className="glass-effect rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-pink-500">{certificationsCount}</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex justify-center space-x-6 mt-12"
          >
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Mail className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Download className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
