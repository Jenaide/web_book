"use client";
import { ProjectDetails } from "@/components/project-details";
import { getProjectById } from "@/lib/projects";
import { notFound } from "next/navigation";
import { use } from "react";

interface ProjectPageProps {
    params: Promise<{
        id: string;
    }>
}
export default function ProjectPage({params}: ProjectPageProps) {
    const resolvedParams = use(params)
    const project = getProjectById(resolvedParams.id)

    if (!project) {
        notFound()
    }
    return <ProjectDetails project={project} />
}