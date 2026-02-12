import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary font-display font-semibold text-sm tracking-[0.3em] uppercase mb-4"
          >
            Mechanical Engineering Student
          </motion.p>

          <div className="font-display font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-tight mb-6">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
              className="inline-block"
            >
              <motion.span
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(0,188,212,0)",
                    "0 0 20px rgba(0,188,212,0.3)",
                    "0 0 20px rgba(0,188,212,0)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Shohan Ahmed{" "}
              </motion.span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50, rotate: -10 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
              className="inline-block text-gradient"
            >
              <motion.span
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Swazon
              </motion.span>
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-4"
          >
            Rajshahi University of Engineering & Technology (RUET)
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-base text-metallic-light max-w-md mx-auto lg:mx-0 mb-8"
          >
            Passionate about design, engineering, and problem solving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wide hover:opacity-90 transition-all duration-300 glow-cyan"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-border text-foreground font-display font-semibold text-sm tracking-wide hover:border-primary hover:text-primary transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group">
            {/* Animated rotating border */}
            <motion.div
              className="absolute -inset-3 rounded-2xl border-2 border-primary/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ borderRadius: "1rem" }}
            />
            {/* Glow pulse */}
            <motion.div
              className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/15 blur-2xl"
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-lg" />
            <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-lg" />
            <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-accent rounded-bl-lg" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-lg" />
            {/* Image */}
            <motion.div
              className="relative w-full h-full rounded-xl overflow-hidden border border-primary/30 glow-cyan"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={heroPortrait}
                alt="Shohan Ahmed Swazon"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
