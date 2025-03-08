"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "./ui/button";
import { Check, Copy } from "lucide-react";

interface CodeBlockprops{
    code: string;
    language: string;
    showLineNumbers?: boolean;
}



export function CodeBlock({ code, language, showLineNumbers = true }: CodeBlockprops){
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="relative group">
            <pre className={cn("p-4 rounded-md bg-muted overflow-x-auto",
                showLineNumbers && "pl-12"
            )}>
                {showLineNumbers && (
                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-muted border-r border-border flex flex-col items-center pt-4 text-xs text-muted-foreground select-none">
                        {code.split("\n").map((_, i) => (
                            <div key={i} className="leading-6">
                                {i + 1}
                            </div>
                        ))}
                    </div>
                )}
                <code className="text-sm font-mono">{code}</code>
                <p className="text-muted-foreground">{language}</p>
            </pre>
            <Button
                variant={"ghost"}
                onClick={handleCopy}
                className="absolute right-2 top-2 p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-muted-foreground/10 hover:bg-muted-foreground/20"
                aria-label="Copy code"
            >
                {copied ? <Check className="h-4 w-4 text-green-500"/> : <Copy className="h-4 w-4" />}
            </Button>
        </div>
    )
}