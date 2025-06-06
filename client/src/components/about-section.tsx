import { motion } from "framer-motion";
import { GraduationCap, Award, TrendingUp } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-orbitron font-bold mb-4 gradient-text"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a detail-oriented Computer Science undergraduate specializing in Data Science at
              Shri Ramdeobaba College of Engineering and Management. With a strong foundation in
              Data Structures, Algorithms, and object-oriented programming, I transform raw data
              into meaningful insights.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans across advanced analytics tools including Power BI, Tableau, Python,
              and SQL. I've successfully delivered multiple data visualization projects that drive
              strategic business decisions and optimize operational efficiency.
            </p>

            {/* Education Timeline */}
            <div className="space-y-6 mt-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Education Timeline</h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div className="glass-effect p-4 rounded-lg flex-1">
                  <h4 className="font-semibold text-lg">B.Tech in Computer Science & Data Science</h4>
                  <p className="text-primary font-medium">Shri Ramdeobaba College (2023-2027)</p>
                  <p className="text-muted-foreground">CGPA: 8.7 (up to IV Sem)</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-4 h-4 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                <div className="glass-effect p-4 rounded-lg flex-1">
                  <h4 className="font-semibold text-lg">Higher Secondary Education</h4>
                  <p className="text-purple-500 font-medium">School of Scholars, Nagpur (2022-2023)</p>
                  <p className="text-muted-foreground">Grade: 87.20%</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Modern workspace image */}
            <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern data analytics workspace with multiple monitors showing dashboards"
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4 glass-effect p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <div>
                  <div className="text-2xl font-bold text-green-500">104K+</div>
                  <div className="text-sm text-muted-foreground">Data Points</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -left-4 glass-effect p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-2xl font-bold text-primary">$2.18M</div>
                  <div className="text-sm text-muted-foreground">Business Value</div>
                </div>
              </div>
            </motion.div>

            {/* Certifications Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute top-1/2 -left-6 glass-effect p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-5 w-5 text-purple-500" />
                <div>
                  <div className="text-2xl font-bold text-purple-500">3+</div>
                  <div className="text-sm text-muted-foreground">Certificates</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
