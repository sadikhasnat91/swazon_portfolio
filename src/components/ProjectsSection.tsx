import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Mechanical Design Project",
    description: "CAD modeling and analysis of mechanical components using AutoCAD and SolidWorks.",
  },
  {
    title: "Thermodynamics Research",
    description: "Study and simulation of heat transfer processes in industrial applications.",
  },
  {
    title: "Manufacturing Process Analysis",
    description: "Optimization of manufacturing workflows using MATLAB-driven simulations.",
  },
];

const ProjectsSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding blueprint-grid">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-semibold text-sm tracking-[0.3em] uppercase">
            My Work
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-3">
            Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-80px" });

            return (
              <motion.div
                key={i}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group bg-card border border-border rounded-xl overflow-hidden card-hover"
              >
                <div className="aspect-video bg-secondary flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-display font-bold text-primary text-xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors duration-300">
                    View Details
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
