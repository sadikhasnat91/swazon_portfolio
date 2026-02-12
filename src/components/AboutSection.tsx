import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, Lightbulb, Target, Cpu } from "lucide-react";

const highlights = [
  {
    icon: Wrench,
    title: "Engineering Mindset",
    description: "Approaching every challenge with analytical thinking and precision.",
  },
  {
    icon: Lightbulb,
    title: "Creative Problem Solver",
    description: "Finding innovative solutions through design and simulation.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Driven to deliver results with discipline and dedication.",
  },
  {
    icon: Cpu,
    title: "Tech Enthusiast",
    description: "Continuously exploring new tools, software, and technologies.",
  },
];

const AboutSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-semibold text-sm tracking-[0.3em] uppercase">
            Who I Am
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-3">
            About Me
          </h2>
        </motion.div>

        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              I'm <span className="text-foreground font-semibold">Shohan Ahmed Swazon</span>, a
              passionate Mechanical Engineering student at Rajshahi University of Engineering &
              Technology (RUET). I thrive at the intersection of design, analysis, and
              problem-solving.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              My academic journey has equipped me with strong foundations in thermodynamics,
              manufacturing processes, and CAD modeling. I'm always eager to apply theoretical
              knowledge to real-world engineering challenges.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Beyond academics, I enjoy exploring emerging technologies, collaborating on
              projects, and pushing the boundaries of what's possible through engineering
              innovation.
            </p>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="bg-card border border-border rounded-xl p-5 card-hover group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
