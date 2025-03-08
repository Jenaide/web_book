"use client";

import Link from "next/link";
import { Sidebar, 
    SidebarContent, 
    SidebarFooter, 
    SidebarGroup, 
    SidebarGroupContent, 
    SidebarGroupLabel, 
    SidebarHeader, 
    SidebarMenu, 
    SidebarMenuButton, 
    SidebarMenuItem } from "./ui/sidebar";
import { Code, Github, Home, Layers, Mail, Monitor, Package } from "lucide-react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";


// Project data
const projects = [
    {
      id: "web-dashboard",
      name: "Web Dashboard",
      description: "A responsive dashboard built with React and Next.js",
      icon: Monitor,
    },
    {
      id: "api-service",
      name: "API Service",
      description: "RESTful API service built with Node.js and Express",
      icon: Code,
    },
    {
      id: "component-library",
      name: "Component Library",
      description: "Reusable UI components built with React and Tailwind CSS",
      icon: Package,
    },
    {
      id: "data-visualization",
      name: "Data Visualization",
      description: "Interactive data visualizations using D3.js",
      icon: Layers,
    },
  ]
  
export function ProjectSidebar() {
    const pathName = usePathname();
    return (
        <Sidebar>
            <SidebarHeader className="flex items-center justify-between p-4">
                {/*<SidebarTrigger />*/}
                <Link href={"/"} className="flex items-center gap-3">
                    <Avatar>
                        <AvatarImage src="https://img.freepik.com/premium-photo/futuristic-female-character-hyperrealistic-3d-style-dressed-spaceinspired-fashion_549857-10880.jpg?w=740" />
                        <AvatarFallback>Jenaide Sibolie</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold tracking-wider">Jenaide Sibolie</span>
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={pathName === "/"}>
                                    <Link href={"/"}>
                                        <Home className="h-4 w-4"/>
                                        <span className="">Home</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Projects</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {projects.map((project) => (
                                <SidebarMenuItem key={project.id}>
                                    <SidebarMenuButton asChild isActive={pathName === `/projects/${project.id}`} tooltip={project.description}>
                                        <Link href={`/projects/${project.id}`}>
                                        <project.icon className="w-4 h-4" />
                                            <span>{project.name}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-4">
                <div className="flex items-center justify-between">
                    <Link
                        href={"https://github.com/Jenaide"}
                        target="_blank"
                        rel={"noopener noreferrer"}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                        <Github />
                        <span>Github</span>
                    </Link>
                    <Link
                        href={"mailto:jenaidesibolie@gmail.com"}
                        target="_blank"
                        rel={"noopener noreferrer"}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                        <Mail />
                        <span>Email</span>
                    </Link>
                    <ThemeToggle />
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}