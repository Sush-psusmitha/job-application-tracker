import { Briefcase } from "lucide-react";

import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="border-b border-gray-200 bg-white ">
            <div className="
            container mx-auto flex items-center 
            px-4 h-16">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary transition-colors hover:text-primary/80">
                <Briefcase/>
                <h1>Job  Tracker</h1> 
                </Link>
                <nav className="hidden md:flex items-center gap-4 ml-auto">
                    <Link href="/sign-in" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Sign In
                    </Link>
                    <Link href="/sign-up" className="text-sm font-medium text-primary transition-colors">
                        Sign Up
                    </Link>
                </nav>
            </div>
        </nav>
    )
}