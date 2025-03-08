"use client";

import { Project } from "@/lib/projects";
import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { CodeBlock } from "./code-block";

interface ProjectDetailsProps{
    project: Project
}
export function ProjectDetails({ project }: ProjectDetailsProps){
    const [activeTab, setActiveTab] = useState("overview");
    return (
        <div className="container mx-auto py-8 px-4 md:px-6">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
                    <p className="text-xl text-muted-foreground">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-4">
                    {project.githubUrl && (
                        <Button asChild variant={"outline"} size={"sm"}>
                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferer" className="flex items-center gap-2">
                                <Github className="w-4 h-4" />
                                <span>View on Github</span>
                            </Link>
                        </Button>
                    )}

                    {project.demoUrl && (
                        <Button asChild variant={"outline"} size={"sm"}>
                            <Link href={project.demoUrl} target="_blank" rel="noopener noreferer" className="flex items-center gap-2">
                                <ExternalLink className="w-4 h-4" />
                                <span>Live demo</span>
                            </Link>
                        </Button>
                    )}
                </div>

                <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="code">Code Samples</TabsTrigger>
                        <TabsTrigger value="documentation">Documentation</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="mt-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Description</h3>
                                    <p className="text-muted-foreground">{project.longDescription}</p>

                                    <h3 className="text-xl font-semibold mt-6 mb-4">Technologies</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Features</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                        {project.features.map((feature) => (
                                            <li key={feature}>{feature}</li>
                                        ))}
                                    </ul>

                                     {project.imageUrl && (
                                        <div className="mt-6">
                                            <Image 
                                                src={project.imageUrl || "/placeholder.svg"}
                                                alt={project.name}
                                                width={600}
                                                height={400}
                                                className="rounded-md object-cover w-full"
                                            />
                                        </div>
                                     )}
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="code" className="mt-6">
                        <div className="grid gap-6">
                            {project.codeSnippets.map((snippet, index) => (
                                <Card key={index}>
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-semibold mb-4">{snippet.title}</h3>
                                        <CodeBlock code={snippet.code} language={snippet.language} />
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="documentation" className="mt-6">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Documentation</h3>
                                <div className="prose prose-sm max-w-none dark:prose-invert">
                                    <h4>Getting Started</h4>
                                    <p>
                                        To get started with the {project.name} project, clone the repository from GitHub:
                                    </p>
                                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                                        <code>git clone {project.githubUrl}</code>
                                    </pre>

                                    <h4 className="mt-6">Installation</h4>
                                    <p>Install the dependencies:</p>
                                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                                        <code>npm install</code>
                                    </pre>

                                    <h4 className="mt-6">Usage</h4>
                                    <p>Start the development server:</p>
                                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                                        <code>npm run dev</code>
                                    </pre>

                                    <h4 className="mt-6">Project Structure</h4>
                                    <p>The project follows a standard structure with the following key directories:</p>
                                    <ul>
                                        <li>
                                        <strong>src/</strong> - Source code
                                        </li>
                                        <li>
                                        <strong>public/</strong> - Static assets
                                        </li>
                                        <li>
                                        <strong>tests/</strong> - Test files
                                        </li>
                                        <li>
                                        <strong>docs/</strong> - Documentation
                                        </li>
                                    </ul>

                                    <h4 className="mt-6">Contributing</h4>
                                    <p>Contributions are welcome! Please feel free to submit a Pull Request.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}