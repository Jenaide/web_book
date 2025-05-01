"use client";
import AuthLoginImage from "@/../public/auth landing.png";
import { StaticImageData } from "next/image";
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
  imageUrl?: StaticImageData
}

export const projects: Project[] = [
  {
    id: "Role-based-authentication",
    name: "Role-based Authentication",
    description: "A web application with role-based authentication using Next.js and Prisma",
    longDescription:
      "This project is a modern, full-stack role-based authentication and authorization system built using Next.js for the frontend and backend logic, TypeScript for static type safety, Prisma as the ORM to interact with a PostgreSQL database, and Auth.js (formerly NextAuth.js) for secure, extensible authentication. The system allows users to register and log in with email/password (or other providers like Google/GitHub), and it supports multiple roles such as admin, moderator, and user, each with fine-grained access control to different parts of the application.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Auth.js", "Prisma"],
    features: [
      "✅ User Authentication",
      "Secure registration and login",
      "Support for OAuth providers (Google, GitHub, etc.)",
      "JWT-based session management (with database sessions optional)",
      "Dark and light theme support",
      "User authentication and role-based access control",
    ],
    codeSnippets: [
      {
        title: "Login form component",
        language: "tsx",
        code: `import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function LoginForm() {
    return (
        <div className="flex flex-col">
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome Back</CardTitle>
                    <CardDescription>
                        Login in with your Google or Facebook account.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid gap-6">
                            <div className="flex flex-col gap-4">
                                <Button variant="outline" className="w-full">
                                    <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" ></g>
                                        <g id="SVGRepo_tracerCarrier"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z">
                                            </path></g>
                                    </svg>
                                    Login with FaceBook
                                </Button>
                                <Button variant="outline" className="w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                        fill="currentColor"
                                        />
                                    </svg>
                                    Login with Google
                                </Button>
                            </div>
                            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                                    Or continue with
                                </span>
                            </div>
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input 
                                        id="email"
                                        type="email"
                                        placeholder="example@example.co.za"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password">Password</Label>
                                        <Link href={"#"} className="ml-auto text-sm underline-offset-4 hover:underline">
                                            Forgot your password?
                                        </Link>
                                    </div>
                                    <Input id="password" type="password" required />
                                </div>
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>
                            </div>
                            <div className="text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <Link href={"/signup"} className="text-sm underline-offset-4 hover:underline">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
                By clicking log in, you agree to our <Link href={"#"}>Terms of Service</Link>{" "}
                and <Link href={"#"}>Privacy Policy</Link>
            </div>
        </div>
    )
}`,
      },
    ],
    demoUrl: "https://role-based-authentication-authjs-murex.vercel.app",
    githubUrl: "https://github.com/Jenaide/role_based_authentication_authjs",
    imageUrl: AuthLoginImage,
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
    imageUrl: AuthLoginImage,
  },
  // New Projects
  {
    id: "mobile-fitness-app",
    name: "Fitness Tracker App",
    description: "A React Native mobile app for tracking workouts and fitness goals",
    longDescription:
      "This fitness tracking application helps users monitor their workout routines, track progress, and achieve their fitness goals. Built with React Native, it provides a seamless experience across iOS and Android platforms. The app includes features like workout planning, progress tracking, nutrition logging, and social sharing capabilities.",
    technologies: ["React Native", "TypeScript", "Redux", "Firebase", "Expo", "Native Base"],
    features: [
      "Cross-platform compatibility (iOS & Android)",
      "Personalized workout plans",
      "Progress tracking with charts and statistics",
      "Nutrition and calorie tracking",
      "Social sharing and community features",
      "Offline support with local data storage",
      "Push notifications for workout reminders"
    ],
    codeSnippets: [
      {
        title: "Workout Tracker Screen",
        language: "tsx",
        code: `import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Card, ProgressBar } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { completeExercise, updateWorkout } from '../store/actions/workoutActions';
import { ExerciseItem } from '../components/ExerciseItem';
import { Timer } from '../components/Timer';
import { RootState } from '../store/types';

export const WorkoutTrackerScreen = ({ route, navigation }) => {
  const { workoutId } = route.params;
  const dispatch = useDispatch();
  const workout = useSelector((state: RootState) => 
    state.workouts.workouts.find(w => w.id === workoutId)
  );
  const [activeExercise, setActiveExercise] = useState(0);
  const [isResting, setIsResting] = useState(false);
  const [restTime, setRestTime] = useState(60); // 60 seconds rest

  useEffect(() => {
    if (!workout) {
      navigation.goBack();
    }
  }, [workout, navigation]);

  if (!workout) {
    return null;
  }

  const handleExerciseComplete = (exerciseId: string) => {
    dispatch(completeExercise(workoutId, exerciseId));
    
    if (activeExercise < workout.exercises.length - 1) {
      setIsResting(true);
      setTimeout(() => {
        setIsResting(false);
        setActiveExercise(activeExercise + 1);
      }, restTime * 1000);
    } else {
      // Workout complete
      dispatch(updateWorkout(workoutId, { completed: true, completedAt: new Date() }));
      navigation.navigate('WorkoutComplete', { workoutId });
    }
  };

  const progress = workout.exercises.filter(ex => ex.completed).length / workout.exercises.length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workout.name}</Text>
      
      <ProgressBar value={progress * 100} colorScheme="blue" />
      <Text style={styles.progressText}>
        {Math.round(progress * 100)}% Complete
      </Text>
      
      {isResting ? (
        <Card style={styles.restCard}>
          <Text style={styles.restTitle}>Rest Time</Text>
          <Timer seconds={restTime} onComplete={() => setIsResting(false)} />
          <Button onPress={() => setIsResting(false)}>Skip Rest</Button>
        </Card>
      ) : (
        <ScrollView style={styles.exerciseList}>
          {workout.exercises.map((exercise, index) => (
            <ExerciseItem
              key={exercise.id}
              exercise={exercise}
              isActive={index === activeExercise}
              isCompleted={exercise.completed}
              onComplete={() => handleExerciseComplete(exercise.id)}
            />
          ))}
        </ScrollView>
      )}
      
      <Button 
        style={styles.endButton}
        colorScheme="danger"
        onPress={() => navigation.goBack()}
      >
        End Workout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  progressText: {
    textAlign: 'center',
    marginVertical: 8,
  },
  exerciseList: {
    flex: 1,
    marginVertical: 16,
  },
  restCard: {
    padding: 16,
    alignItems: 'center',
    marginVertical: 16,
  },
  restTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  endButton: {
    marginTop: 16,
  },
});`,
      },
      {
        title: "Firebase Authentication",
        language: "typescript",
        code: `import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { User, AuthError } from '../types/auth';

// Initialize Google Sign In
GoogleSignin.configure({
  webClientId: 'YOUR_WEB_CLIENT_ID_HERE',
});

export const signInWithEmail = async (
  email: string, 
  password: string
): Promise<User> => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const userData = await getUserData(response.user.uid);
    return {
      uid: response.user.uid,
      email: response.user.email || '',
      ...userData
    };
  } catch (error) {
    throw handleAuthError(error);
  }
};

export const signUpWithEmail = async (
  email: string, 
  password: string, 
  displayName: string
): Promise<User> => {
  try {
    const response = await auth().createUserWithEmailAndPassword(email, password);
    
    // Update user profile
    await response.user.updateProfile({
      displayName,
    });
    
    // Create user document in Firestore
    const userData = {
      displayName,
      email,
      createdAt: firestore.FieldValue.serverTimestamp(),
      preferences: {
        weightUnit: 'kg',
        distanceUnit: 'km',
        theme: 'light',
      },
    };
    
    await firestore()
      .collection('users')
      .doc(response.user.uid)
      .set(userData);
    
    return {
      uid: response.user.uid,
      email,
      displayName,
      ...userData,
    };
  } catch (error) {
    throw handleAuthError(error);
  }
};

export const signInWithGoogle = async (): Promise<User> => {
  try {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const response = await auth().signInWithCredential(googleCredential);
    
    // Check if this is a new user
    const userDoc = await firestore()
      .collection('users')
      .doc(response.user.uid)
      .get();
    
    if (!userDoc.exists) {
      // Create user document for new Google sign-ins
      const userData = {
        displayName: response.user.displayName || '',
        email: response.user.email || '',
        photoURL: response.user.photoURL || '',
        createdAt: firestore.FieldValue.serverTimestamp(),
        preferences: {
          weightUnit: 'kg',
          distanceUnit: 'km',
          theme: 'light',
        },
      };
      
      await firestore()
        .collection('users')
        .doc(response.user.uid)
        .set(userData);
    }
    
    const userData = await getUserData(response.user.uid);
    
    return {
      uid: response.user.uid,
      email: response.user.email || '',
      displayName: response.user.displayName || '',
      photoURL: response.user.photoURL || '',
      ...userData,
    };
  } catch (error) {
    throw handleAuthError(error);
  }
};

const getUserData = async (uid: string) => {
  const userDoc = await firestore()
    .collection('users')
    .doc(uid)
    .get();
  
  return userDoc.data();
};

const handleAuthError = (error: any): AuthError => {
  const errorCode = error.code || 'unknown';
  let message = 'An unknown error occurred';
  
  switch (errorCode) {
    case 'auth/invalid-email':
      message = 'The email address is invalid';
      break;
    case 'auth/user-disabled':
      message = 'This user account has been disabled';
      break;
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      message = 'Invalid email or password';
      break;
    case 'auth/email-already-in-use':
      message = 'This email is already in use';
      break;
    case 'auth/weak-password':
      message = 'The password is too weak';
      break;
    default:
      message = error.message || message;
  }
  
  return {
    code: errorCode,
    message,
  };
};`,
      },
    ],
    demoUrl: "https://fitness-app-demo.example.com",
    githubUrl: "https://github.com/username/fitness-tracker-app",
    imageUrl: AuthLoginImage,
  },
  
  
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

