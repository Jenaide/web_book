"use client";

export type Project = {
  id: string
  name: string
  description: string
  longDescription: string
  technologies: string[]
  features: string[]
  codeSnippets: {
    title: string
    language: string
    code: string
  }[]
  demoUrl?: string
  githubUrl?: string
  imageUrl?: string
}

export const projects: Project[] = [
  {
    id: "web-dashboard",
    name: "Web Dashboard",
    description: "A responsive dashboard built with React and Next.js",
    longDescription:
      "This project is a comprehensive web dashboard that provides users with an intuitive interface to monitor and analyze data. Built with React and Next.js, it leverages server-side rendering for optimal performance and SEO benefits. The dashboard includes various data visualization components, real-time updates, and customizable widgets.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "SWR"],
    features: [
      "Responsive design that works on all devices",
      "Real-time data updates using SWR",
      "Interactive charts and graphs",
      "Customizable dashboard widgets",
      "Dark and light theme support",
      "User authentication and role-based access control",
    ],
    codeSnippets: [
      {
        title: "Dashboard Layout Component",
        language: "tsx",
        code: `import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
}`,
      },
      {
        title: "Data Fetching with SWR",
        language: "tsx",
        code: `import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useStats() {
  const { data, error, isLoading } = useSWR('/api/stats', fetcher, {
    refreshInterval: 30000, // Refresh every 30 seconds
  });

  return {
    stats: data,
    isLoading,
    isError: error
  };
}`,
      },
    ],
    demoUrl: "https://dashboard-demo.example.com",
    githubUrl: "https://github.com/username/web-dashboard",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "api-service",
    name: "API Service",
    description: "RESTful API service built with Node.js and Express",
    longDescription:
      "This API service provides a robust backend for web and mobile applications. Built with Node.js and Express, it follows RESTful principles and includes comprehensive documentation. The service includes authentication, rate limiting, and data validation to ensure secure and reliable operation.",
    technologies: ["Node.js", "Express", "TypeScript", "MongoDB", "JWT", "Swagger"],
    features: [
      "RESTful API endpoints",
      "JWT authentication",
      "Role-based access control",
      "Request validation with Joi",
      "Comprehensive error handling",
      "API documentation with Swagger",
      "Rate limiting and security features",
    ],
    codeSnippets: [
      {
        title: "Express Route Setup",
        language: "typescript",
        code: `import express from 'express';
import { UserController } from '../controllers/user.controller';
import { authenticate } from '../middleware/auth.middleware';
import { validateUser } from '../validators/user.validator';

const router = express.Router();

// Public routes
router.post('/register', validateUser, UserController.register);
router.post('/login', UserController.login);

// Protected routes
router.get('/profile', authenticate, UserController.getProfile);
router.put('/profile', authenticate, validateUser, UserController.updateProfile);

export default router;`,
      },
      {
        title: "Authentication Middleware",
        language: "typescript",
        code: `import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model';

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Authentication required' });
    }
    
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    
    const user = await User.findById((decoded as any).userId);
    
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};`,
      },
    ],
    githubUrl: "https://github.com/username/api-service",
  },
  {
    id: "component-library",
    name: "Component Library",
    description: "Reusable UI components built with React and Tailwind CSS",
    longDescription:
      "This component library provides a collection of reusable UI components for React applications. Built with React and Tailwind CSS, it offers a consistent design language that can be easily customized to match your brand. The library includes form elements, navigation components, modals, and more, all with accessibility features built-in.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Jest", "React Testing Library"],
    features: [
      "Comprehensive set of UI components",
      "Fully customizable with Tailwind CSS",
      "Accessible by default",
      "Thoroughly tested with Jest and React Testing Library",
      "Interactive documentation with Storybook",
      "TypeScript support for better developer experience",
    ],
    codeSnippets: [
      {
        title: "Button Component",
        language: "tsx",
        code: `import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };`,
      },
      {
        title: "Card Component",
        language: "tsx",
        code: `import * as React from 'react';
import { cn } from '../utils';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };`,
      },
    ],
    demoUrl: "https://component-library-demo.example.com",
    githubUrl: "https://github.com/username/component-library",
  },
  {
    id: "data-visualization",
    name: "Data Visualization",
    description: "Interactive data visualizations using D3.js",
    longDescription:
      "This project showcases interactive data visualizations built with D3.js. It includes a variety of chart types such as bar charts, line charts, pie charts, and more complex visualizations like force-directed graphs and geographic maps. The visualizations are responsive and include interactive features like tooltips, zooming, and filtering.",
    technologies: ["D3.js", "JavaScript", "SVG", "HTML5", "CSS3", "React"],
    features: [
      "Interactive charts and graphs",
      "Responsive visualizations that work on all screen sizes",
      "Data filtering and exploration tools",
      "Animated transitions between data states",
      "Tooltips and contextual information",
      "Accessibility features for screen readers",
    ],
    codeSnippets: [
      {
        title: "Bar Chart Component",
        language: "javascript",
        code: `import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

function BarChart({ data, width = 600, height = 400, marginTop = 20, marginRight = 20, marginBottom = 30, marginLeft = 40 }) {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || !svgRef.current) return;

    // Clear any existing chart
    d3.select(svgRef.current).selectAll('*').remove();

    // Set up dimensions
    const innerWidth = width - marginLeft - marginRight;
    const innerHeight = height - marginTop - marginBottom;

    // Create scales
    const x = d3.scaleBand()
      .domain(data.map(d => d.name))
      .range([0, innerWidth])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .nice()
      .range([innerHeight, 0]);

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // Create container group and transform it
    const g = svg.append('g')
      .attr('transform', \`translate(\${marginLeft},\${marginTop})\`);

    // Add x-axis
    g.append('g')
      .attr('transform', \`translate(0,\${innerHeight})\`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'rotate(-45)')
      .style('text-anchor', 'end');

    // Add y-axis
    g.append('g')
      .call(d3.axisLeft(y));

    // Add bars
    g.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.name))
      .attr('y', d => y(d.value))
      .attr('width', x.bandwidth())
      .attr('height', d => innerHeight - y(d.value))
      .attr('fill', 'steelblue')
      .on('mouseover', function() {
        d3.select(this).attr('fill', 'orange');
      })
      .on('mouseout', function() {
        d3.select(this).attr('fill', 'steelblue');
      });

    // Add tooltips
    g.selectAll('.bar-label')
      .data(data)
      .enter().append('text')
      .attr('class', 'bar-label')
      .attr('x', d => x(d.name) + x.bandwidth() / 2)
      .attr('y', d => y(d.value) - 5)
      .attr('text-anchor', 'middle')
      .text(d => d.value);

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft]);

  return <svg ref={svgRef}></svg>;
}`,
      },
      {
        title: "Line Chart Component",
        language: "javascript",
        code: `import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

function LineChart({ data, width = 600, height = 400, marginTop = 20, marginRight = 20, marginBottom = 30, marginLeft = 40 }) {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || !svgRef.current) return;

    // Clear any existing chart
    d3.select(svgRef.current).selectAll('*').remove();

    // Set up dimensions
    const innerWidth = width - marginLeft - marginRight;
    const innerHeight = height - marginTop - marginBottom;

    // Create scales
    const x = d3.scaleTime()
      .domain(d3.extent(data, d => d.date))
      .range([0, innerWidth]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .nice()
      .range([innerHeight, 0]);

    // Create line generator
    const line = d3.line()
      .x(d => x(d.date))
      .y(d => y(d.value))
      .curve(d3.curveMonotoneX);

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // Create container group and transform it
    const g = svg.append('g')
      .attr('transform', \`translate(\${marginLeft},\${marginTop})\`);

    // Add x-axis
    g.append('g')
      .attr('transform', \`translate(0,\${innerHeight})\`)
      .call(d3.axisBottom(x));

    // Add y-axis
    g.append('g')
      .call(d3.axisLeft(y));

    // Add line path
    g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', line);

    // Add dots
    g.selectAll('.dot')
      .data(data)
      .enter().append('circle')
      .attr('class', 'dot')
      .attr('cx', d => x(d.date))
      .attr('cy', d => y(d.value))
      .attr('r', 3)
      .attr('fill', 'steelblue')
      .on('mouseover', function(event, d) {
        d3.select(this)
          .attr('r', 6)
          .attr('fill', 'orange');
          
        // Add tooltip
        g.append('text')
          .attr('class', 'tooltip')
          .attr('x', x(d.date))
          .attr('y', y(d.value) - 10)
          .attr('text-anchor', 'middle')
          .text(\`\${d.date.toLocaleDateString()}: \${d.value}\`);
      })
      .on('mouseout', function(event, d) {
        d3.select(this)
          .attr('r', 3)
          .attr('fill', 'steelblue');
          
        // Remove tooltip
        g.selectAll('.tooltip').remove();
      });

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft]);

  return <svg ref={svgRef}></svg>;
}`,
      },
    ],
    demoUrl: "https://data-viz-demo.example.com",
    githubUrl: "https://github.com/username/data-visualization",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

