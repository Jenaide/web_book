import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8 lg:p-24">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">404</h1>
        <h2 className="mt-4 text-2xl font-semibold">Project Not Found</h2>
        <p className="mt-4 text-muted-foreground">Sorry, we couldn&apos;t find the project you&apos;re looking for.</p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}