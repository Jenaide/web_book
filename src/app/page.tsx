"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
{/*import { SidebarTrigger } from "@/components/ui/sidebar";*/}
import { ArrowRight, ExternalLink, Github, Layers, LogIn, Package } from "lucide-react";
import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";

// Featured projects data
const featuredProjects = [
  {
    id: "Role-based-authentication",
    name: "Role-based Authentication",
    description: "A web application with role-based authentication system using Next.js and Prisma",
    icon: LogIn,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    id: "component-library",
    name: "Component Library",
    description: "Reusable UI components built with React and Tailwind CSS",
    icon: Package,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    id: "data-visualization",
    name: "Data Visualization",
    description: "Interactive data visualizations using D3.js",
    icon: Layers,
    color: "bg-amber-500/10 text-amber-500",
  },
]

// Skills data
const skills = [
  "Python",
  "Java",
  "C#",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "Tailwind CSS",
  "UI/UX Design",
  "RESTful APIs",
  "Next.js",
  "React",
  "TypeScript",
  "Prisma",
]


export default function Home() {

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }


  return (
    <PageTransition>

      {/* Hero Section */}
      <section className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background -z-10" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-[20%] w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-[10%] w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10" />

        {/* Navigation controls */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          {/*<div className="hidden md:block">
            <SidebarTrigger />
          </div>*/}
          
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants} 
              className="flex items-center justify-center mb-6"
            >
                <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Portfolio & Project Showcase
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 mb-6"
            >
              Creative Developer Solutions
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-center text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Welcome to my project showcase featuring a collection of my best work. Explore my projects to see how I
              solve complex problems with clean, efficient code and thoughtful design.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/projects/Role-based-authentication" className="flex items-center gap-2">
                  Explore Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <a
                  href="https://github.com/Jenaide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" /> View on GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work. Each project demonstrates different skills and technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${project.color} flex items-center justify-center mb-4`}>
                    <project.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The tools and technologies I use to bring projects to life.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
            <p className="text-muted-foreground mb-8">
              Interested in collaborating or have a project in mind? Let&apos;s connect and discuss how we can work together.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <a href="mailto:jenaidesibolie@gmail.com" className="flex items-center gap-2">
                Get in Touch <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
