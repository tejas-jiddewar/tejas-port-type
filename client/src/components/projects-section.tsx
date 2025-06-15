import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  BarChart3,
  Users,
  ShoppingCart,
} from "lucide-react";
import olaImage from "@assets/ola1.jpg";
import hrImage from "@assets/tableau_hr_dashboard.jpg";
import amazonImage from "@assets/sales analysis Amazon.jpg";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  delay: number;
  projectLink: string;
  codeLink: string;
}

function ProjectCard({
  title,
  description,
  image,
  features,
  technologies,
  metrics,
  icon,
  gradientFrom,
  gradientTo,
  delay,
  projectLink,
  codeLink,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="project-card group"
    >
      <div className="project-card-inner relative w-full h-[24rem]">
        {/* Front of Card */}
        <div className="project-card-front absolute inset-0 glass-effect rounded-2xl shadow-lg overflow-hidden">
          <div className="h-48 relative overflow-hidden">
            <img
              src={image}
              alt={`${title} Dashboard Preview`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              {metrics.map((metric, index) => (
                <div key={index} className="mb-1">
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-2">
              {icon}
              <h3 className="text-xl font-semibold ml-2">{title}</h3>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">{description}</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div
          className={`project-card-back absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white rounded-2xl p-6 flex flex-col justify-center`}
        >
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <ul className="space-y-2 mb-6 flex-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm">
                <div className="w-2 h-2 bg-white rounded-full mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="space-y-2">
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              <Button
                variant="secondary"
                size="sm"
                className="w-full bg-white/20 hover:bg-white/30 text-white border-white/20"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Project
              </Button>
            </a>
            <a href={codeLink} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-white/20 text-white hover:bg-white/10"
              >
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const projects = [
    {
      title: "Ola Trip Analysis",
      description:
        "Interactive Power BI dashboard analyzing trip patterns, peak hours, and booking trends",
      image: olaImage,
      features: [
        "Analyzed 104K+ bookings",
        "Identified peak travel patterns",
        "Created interactive dashboards",
        "Used advanced DAX functions",
        "Time-based analysis & insights",
      ],
      technologies: ["Power BI", "DAX", "Analytics"],
      metrics: [{ label: "Total Bookings", value: "104K" }],
      icon: <BarChart3 className="h-5 w-5 text-green-500" />,
      gradientFrom: "from-green-500",
      gradientTo: "to-blue-500",
      delay: 0.2,
      projectLink: "https://github.com/tejas-0905/OLA-trip-Analysis--Power-Bi", // replace with actual URL
      codeLink: "https://github.com/tejas-0905/OLA-trip-Analysis--Power-Bi/blob/main/OLA.pbix",
    },
    {
      title: "HR Analytics Dashboard",
      description:
        "Comprehensive Tableau dashboard tracking employee attrition and satisfaction metrics",
      image: hrImage,
      features: [
        "398 employees analyzed",
        "Department-wise breakdowns",
        "Interactive visualizations",
        "Actionable HR insights",
        "Gender & age group analysis",
      ],
      technologies: ["Tableau", "HR Analytics", "KPIs"],
      metrics: [{ label: "Attrition Rate", value: "14.57%" }],
      icon: <Users className="h-5 w-5 text-purple-500" />,
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-500",
      delay: 0.4,
      projectLink: "https://github.com/tejas-0905/hr-analytics-dashboard-using-Tableau",
      codeLink: "https://github.com/tejas-0905/hr-analytics-dashboard-using-Tableau/blob/main/HR%20Analytics%20Dashboard.twb",
    },
    {
      title: "Amazon Sales Analysis",
      description:
        "Comprehensive sales dashboard analyzing product performance and revenue trends",
      image: amazonImage,
      features: [
        "$2.18M sales analyzed",
        "27.75K products tracked",
        "Performance insights",
        "Strategic recommendations",
        "Regional analysis & trends",
      ],
      technologies: ["Power BI", "Sales Analytics", "E-commerce"],
      metrics: [{ label: "YTD Sales", value: "$2.18M" }],
      icon: <ShoppingCart className="h-5 w-5 text-orange-500" />,
      gradientFrom: "from-gray-800",
      gradientTo: "to-blue-800",
      delay: 0.6,
      projectLink: "https://github.com/tejas-0905/Power-Bi-Amazon-Sales-Dashboard",
      codeLink: "https://github.com/tejas-0905/Power-Bi-Amazon-Sales-Dashboard/blob/main/amazon%20sales%20analysis.pbix",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-orbitron font-bold mb-4 gradient-text"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Explore my data analytics projects showcasing real-world business
            insights and interactive dashboards that drive strategic
            decision-making.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="px-8 py-4 bg-gradient-to-r from-primary to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
          >
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
