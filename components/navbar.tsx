import { Briefcase } from "lucide-react";

import Link from "next/link";
import { Button } from "./ui/button";
import { getSession } from "@/lib/auth/auth";

export default async function Navbar() {
    const session = await getSession()

    return (
        <nav className="border-b border-gray-200 bg-white ">
            <div className="
            container mx-auto flex items-center 
            px-4 h-16">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary transition-colors hover:text-primary/80">
                    <Briefcase />
                    <h1>Job  Tracker</h1>
                </Link>

               {session?.user ? ( <></>) : 
               (<>
                <nav className="flex items-center gap-6 px-4 ml-auto">
                    <Link href="/sign-in" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Login
                    </Link>
                    <Link href="/sign-up" >
                        <Button className="text-sm font-medium text-white transition-colors"> Start for free </Button>
                    </Link>
                </nav>
                </>)
                
                }
            </div>
        </nav>
    )
}