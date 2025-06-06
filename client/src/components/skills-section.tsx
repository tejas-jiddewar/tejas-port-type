import { motion } from "framer-motion";
import { Code, Database, BarChart3, Brain } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay: number;
}

function SkillBar({ skill, percentage, delay }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="skill-item">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{skill}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="bg-muted rounded-full h-3 overflow-hidden">
        <motion.div
          className="skill-progress bg-gradient-to-r from-primary to-purple-500 h-3 rounded-full"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 2, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

interface CircularProgressProps {
  percentage: number;
  skill: string;
  delay: number;
}

function CircularProgress({ percentage, skill, delay }: CircularProgressProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const circumference = 2 * Math.PI * 45; // radius = 45

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className="relative w-24 h-24 mx-auto mb-4">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            className="text-muted"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="6"
            fill="none"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={
              isVisible
                ? { strokeDashoffset: circumference - (percentage / 100) * circumference }
                : { strokeDashoffset: circumference }
            }
            transition={{ duration: 2, delay, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold">{percentage}%</span>
        </div>
      </div>
      <p className="font-medium">{skill}</p>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-orbitron font-bold mb-4 gradient-text"
          >
            Technical Skills
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Code className="text-primary mr-3" />
              Programming Languages
            </h3>

            <div className="space-y-6">
              <SkillBar skill="Python" percentage={90} delay={0.2} />
              <SkillBar skill="Java" percentage={85} delay={0.3} />
              <SkillBar skill="SQL" percentage={88} delay={0.4} />
              <SkillBar skill="JavaScript" percentage={75} delay={0.5} />
              <SkillBar skill="R" percentage={70} delay={0.6} />
            </div>
          </motion.div>

          {/* Analytics Tools */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <BarChart3 className="text-purple-500 mr-3" />
              Analytics Tools
            </h3>

            <div className="grid grid-cols-2 gap-6">
              <CircularProgress percentage={92} skill="Power BI" delay={0.2} />
              <CircularProgress percentage={88} skill="Tableau" delay={0.3} />
              <CircularProgress percentage={80} skill="Excel" delay={0.4} />
              <CircularProgress percentage={85} skill="MySQL" delay={0.5} />
            </div>
          </motion.div>

          {/* Data Science & ML */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Brain className="text-green-500 mr-3" />
              Data Science & ML
            </h3>

            <div className="space-y-6">
              <SkillBar skill="Pandas & NumPy" percentage={88} delay={0.3} />
              <SkillBar skill="Scikit-learn" percentage={82} delay={0.4} />
              <SkillBar skill="Statistical Analysis" percentage={85} delay={0.5} />
              <SkillBar skill="Machine Learning" percentage={80} delay={0.6} />
            </div>
          </motion.div>

          {/* Tools & Platforms */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Database className="text-orange-500 mr-3" />
              Tools & Platforms
            </h3>

            <div className="space-y-6">
              <SkillBar skill="Git & GitHub" percentage={85} delay={0.3} />
              <SkillBar skill="Firebase" percentage={75} delay={0.4} />
              <SkillBar skill="Jupyter Notebook" percentage={90} delay={0.5} />
              <SkillBar skill="VS Code" percentage={92} delay={0.6} />
            </div>
          </motion.div>
        </div>

        {/* SVG Gradients */}
        <svg className="hidden">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(259 93% 61%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
