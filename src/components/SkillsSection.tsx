import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "AutoCAD", level: 85 },
  { name: "MATLAB", level: 75 },
  { name: "Microsoft Excel", level: 80 },
  { name: "Technical Proficiency", level: 90 },
];

const CircularProgress = ({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (skill.level / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex flex-col items-center group"
    >
      <div className="relative w-32 h-32 md:w-40 md:h-40">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="4"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.5, delay: index * 0.15 + 0.3, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display font-bold text-2xl text-foreground">
            {skill.level}%
          </span>
        </div>
      </div>
      <h3 className="font-display font-semibold text-sm mt-4 text-foreground text-center">
        {skill.name}
      </h3>
    </motion.div>
  );
};

const SkillsSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-semibold text-sm tracking-[0.3em] uppercase">
            Technical Expertise
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-3">
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {skills.map((skill, i) => (
            <CircularProgress key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
