import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8 lg:p-24">
      <div className="max-w-3xl text-center">
        <h1 className="text-7xl font-bold tracking-tight sm:text-6xl">Project Showcase - Web Book</h1>
        <p className="mt-6 text-xl text-muted-foreground">
        Welcome to my web book. This application features a collection of my projects. Browse through
        the sidebar to explore my work, or click the button below to view my latest work.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size={"lg"}>
            <Link href={"/projects/web-dashboard"}>
              View work
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
