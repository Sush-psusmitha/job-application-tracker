"use client";

import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import SignOutButton from "./signout-btn";
import { useSession } from "@/lib/auth/auth-client";

export default function Navbar() {
    const{data:session} = useSession()

    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="
            container mx-auto flex items-center  justify-between
            px-4 h-16">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary transition-colors hover:text-primary/80">
                    <Briefcase />
                    <h1>Job  Tracker</h1>
                </Link>

         <div className="flex items-center gap-4">
       {session?.user ?(
                <>
                  <Link href="/dashboard">
                    <Button variant="ghost" className="ml-4 hover:text-primary transition-colors">
                        Dashboard
                    </Button>
                     </Link>
                    <DropdownMenu>
                         <DropdownMenuTrigger className="flex cursor-pointer items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-primary">
                            <Avatar>
                                <AvatarFallback className="bg-primary text-white text-lg">
                                    {session.user.name?.[0]?.toUpperCase() || "U"}
                                </AvatarFallback>
                            </Avatar>
                         </DropdownMenuTrigger>
                            
                         <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuGroup>
                                <DropdownMenuLabel>
                                    <div className="p-2">
                                        <p className="text-sm font-semibold text-foreground">{session.user.name}</p>
                                        <p className="text-xs text-muted-foreground truncate">{session.user.email}</p>
                                    </div>
                                </DropdownMenuLabel>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <SignOutButton />
                         </DropdownMenuContent>
                    </DropdownMenu>
                  
                </>
            ) : 
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
               
            </div>
        </nav>
    )
}