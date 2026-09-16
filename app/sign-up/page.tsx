"use client";

import { signUp } from "@/lib/auth/auth-client";
import { Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react"; 
export default function SignUp() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
 
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); 
        setLoading(true);
        setError("");

        try {
            const result = await signUp.email({
                name,
                email,
                password
            });
            if (result.error) {
                setError(result.error.message ?? "Failed to create account");
                setLoading(false);
            } else {
                router.push("/dashboard");
            }
        } catch (err) {
            setError("An unexpected error occurred");
            setLoading(false);
        }
    }
    return <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">

        <Card className="w-full max-w-md border-gray-200 shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl text-black font-bold">
                    Sign Up
                </CardTitle>
                <CardDescription>
                    Create an account to start tracking your job applications
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
                <CardContent className="space-y-4">

                {error && (
                    <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive border border-destructive">
                        {error}
                    </div>
                )}

                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700">Name</Label>
                        <Input id="name" type="text" placeholder="Sushmitha " value={name} onChange={(e) =>setName(e.target.value)} required className="border-gray-300 focus:border-primary focus:ring-primary"></Input>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700">Email</Label>
                        <Input id="email" type="email" placeholder="abc@gmail.com" value={email} onChange={(e) =>setEmail(e.target.value)} required className="border-gray-300 focus:border-primary focus:ring-primary"></Input>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-gray-700">Password</Label>
                        <Input id="password"
                            type="password" placeholder="********" value={password} onChange={(e) =>setPassword(e.target.value)}  required
                            minLength={8} className="border-gray-300 focus:border-primary focus:ring-primary"></Input>
                    </div>
                </CardContent>

                <CardFooter className="gap-3 text-center">
                    <Button
                       disabled ={loading}
                       
                        type="submit">{loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/>:"Sign Up"}</Button>
                    <p>Already have an account?  <Link href="/sign-in" className="text-primary hover:underline font-medium">Sign In</Link></p>
                </CardFooter>
            </form>
        </Card>
    </div>
}