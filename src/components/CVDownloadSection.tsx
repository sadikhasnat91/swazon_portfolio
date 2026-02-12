import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Download, FileText, Loader2 } from "lucide-react";
import { jsPDF } from "jspdf";
import heroPortrait from "@/assets/hero-portrait.jpg";

const CVDownloadSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);

    try {
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 20;
      let yPos = margin;

      // Load and add hero portrait image
      const img = new Image();
      img.src = heroPortrait;
      await new Promise((resolve) => {
        img.onload = resolve;
      });

      // Add portrait image (square, centered)
      const imgSize = 50;
      const imgX = (pageWidth - imgSize) / 2;
      pdf.addImage(img, "JPEG", imgX, yPos, imgSize, imgSize);
      yPos += imgSize + 10;

      // Header - Name
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(24);
      pdf.setTextColor(0, 188, 212); // Cyan color
      pdf.text("Shohan Ahmed Swazon", pageWidth / 2, yPos, { align: "center" });
      yPos += 8;

      // Subtitle
      pdf.setFontSize(12);
      pdf.setTextColor(100, 100, 100);
      pdf.text("Mechanical Engineering Student", pageWidth / 2, yPos, { align: "center" });
      yPos += 5;
      pdf.text("Rajshahi University of Engineering & Technology (RUET)", pageWidth / 2, yPos, {
        align: "center",
      });
      yPos += 12;

      // Contact Information
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(14);
      pdf.setTextColor(0, 188, 212);
      pdf.text("Contact Information", margin, yPos);
      yPos += 7;

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      pdf.setTextColor(60, 60, 60);
      pdf.text("Phone: +880 1861-881531", margin, yPos);
      yPos += 5;
      pdf.text("Email: swazonahmed@gmail.com", margin, yPos);
      yPos += 5;
      pdf.text("WhatsApp: +880 1861-881531", margin, yPos);
      yPos += 5;
      pdf.text("Instagram: @shohanahmedswazon", margin, yPos);
      yPos += 12;

      // Education Section
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(14);
      pdf.setTextColor(0, 188, 212);
      pdf.text("Education", margin, yPos);
      yPos += 7;

      const education = [
        {
          institution: "Rajshahi University of Engineering & Technology (RUET)",
          detail: "Mechanical Engineering",
          year: "Present",
        },
        {
          institution: "Mojid Memorial City College, Khulna",
          detail: "Passed HSC — 2021",
          year: "2021",
        },
        {
          institution: "Khulna Zilla School, Khulna",
          detail: "Passed SSC — 2019",
          year: "2019",
        },
      ];

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      education.forEach((edu) => {
        pdf.setTextColor(0, 188, 212);
        pdf.setFont("helvetica", "bold");
        pdf.text(edu.year, margin, yPos);
        pdf.setTextColor(60, 60, 60);
        pdf.setFont("helvetica", "bold");
        pdf.text(edu.institution, margin + 20, yPos);
        yPos += 5;
        pdf.setFont("helvetica", "normal");
        pdf.text(edu.detail, margin + 20, yPos);
        yPos += 7;
      });
      yPos += 5;

      // Skills Section
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(14);
      pdf.setTextColor(0, 188, 212);
      pdf.text("Skills", margin, yPos);
      yPos += 7;

      const skills = [
        { name: "AutoCAD", level: 85 },
        { name: "MATLAB", level: 75 },
        { name: "Microsoft Excel", level: 80 },
        { name: "Technical Proficiency", level: 90 },
      ];

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      pdf.setTextColor(60, 60, 60);
      skills.forEach((skill) => {
        pdf.text(`${skill.name}: ${skill.level}%`, margin, yPos);
        yPos += 6;
      });
      yPos += 6;

      // Projects Section
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(14);
      pdf.setTextColor(0, 188, 212);
      pdf.text("Projects", margin, yPos);
      yPos += 7;

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

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      projects.forEach((project) => {
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(60, 60, 60);
        pdf.text(project.title, margin, yPos);
        yPos += 5;
        pdf.setFont("helvetica", "normal");
        pdf.setTextColor(100, 100, 100);
        const lines = pdf.splitTextToSize(project.description, pageWidth - 2 * margin);
        pdf.text(lines, margin, yPos);
        yPos += lines.length * 5 + 5;
      });

      // Save the PDF
      pdf.save("Shohan_Ahmed_Swazon_CV.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="cv" className="section-padding blueprint-grid">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-primary font-display font-semibold text-sm tracking-[0.3em] uppercase">
            Download My CV
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-3 mb-6">
            Curriculum Vitae
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Download a comprehensive PDF version of my CV including all my education, skills,
            projects, and contact information.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-8 glow-cyan"
          >
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="w-10 h-10 text-primary" />
              </div>

              <div>
                <h3 className="font-display font-bold text-xl mb-2">Professional CV</h3>
                <p className="text-sm text-muted-foreground">
                  Complete resume with photo and all details
                </p>
              </div>

              <button
                onClick={generatePDF}
                disabled={isGenerating}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wide hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generating PDF...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Download CV (PDF)
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CVDownloadSection;
