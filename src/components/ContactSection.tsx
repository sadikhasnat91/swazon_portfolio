import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Linkedin, MessageCircle, Instagram, Copy, Check } from "lucide-react";

const contacts = [
  {
    label: "Phone",
    value: "+880 1XXX-XXXXXX",
    icon: Phone,
    href: "tel:+8801XXXXXXXXX",
  },
  {
    label: "LinkedIn",
    value: "Shohan Ahmed Swazon",
    icon: Linkedin,
    href: "https://linkedin.com/in/",
  },
  {
    label: "WhatsApp",
    value: "+880 1XXX-XXXXXX",
    icon: MessageCircle,
    href: "https://wa.me/8801XXXXXXXXX",
  },
  {
    label: "Instagram",
    value: "@shohanahmedswazon",
    icon: Instagram,
    href: "https://instagram.com/",
  },
];

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-primary transition-all duration-300"
      title="Copy"
    >
      {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
    </button>
  );
};

const ContactSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-semibold text-sm tracking-[0.3em] uppercase">
            Get in Touch
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-3">
            Contact
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map((contact, i) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-60px" });
            const Icon = contact.icon;

            return (
              <motion.div
                key={i}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground font-display font-semibold uppercase tracking-wider">
                    {contact.label}
                  </p>
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground hover:text-primary transition-colors truncate block"
                  >
                    {contact.value}
                  </a>
                </div>
                <CopyButton text={contact.value} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
