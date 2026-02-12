import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, School } from "lucide-react";

const educationData = [
  {
    institution: "Rajshahi University of Engineering & Technology (RUET)",
    detail: "Mechanical Engineering",
    year: "Present",
    icon: GraduationCap,
  },
  {
    institution: "Mojid Memorial City College, Khulna",
    detail: "Passed HSC — 2021",
    year: "2021",
    icon: BookOpen,
  },
  {
    institution: "Khulna Zilla School, Khulna",
    detail: "Passed SSC — 2019",
    year: "2019",
    icon: School,
  },
];

const EducationCard = ({
  item,
  index,
}: {
  item: (typeof educationData)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative group"
    >
      <div className="bg-card border border-border rounded-xl p-6 md:p-8 card-hover">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <span className="text-xs font-display font-semibold text-primary tracking-wider uppercase">
              {item.year}
            </span>
            <h3 className="font-display font-bold text-lg mt-1 text-foreground">
              {item.institution}
            </h3>
            <p className="text-muted-foreground mt-1">{item.detail}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const EducationSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding blueprint-grid">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-semibold text-sm tracking-[0.3em] uppercase">
            Academic Journey
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-3">
            Education
          </h2>
        </motion.div>

        <div className="space-y-6">
          {educationData.map((item, i) => (
            <EducationCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
