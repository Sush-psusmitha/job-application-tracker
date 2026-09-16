"use client";

import { Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth/auth-client";
import { Loader2 } from "lucide-react";

export default function SignIn() {

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
                const result = await signIn.email({
                    email,
                    password
                });
                if (result.error) {
                    setError(result.error.message ?? "Failed to sign in");
                    setLoading(false);
                } else {
                    router.push("/dashboard");
                }
            } catch (err) {
                setError("An unexpected error occurred");
                setLoading(false);
            }
        }

    return <div className="flex min-h-[calc(100vh -4rem)] items-center justify-center bg-white p-4">

        <Card className="w-full max-w-md border-gray-200 shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl text-black font-bold">
                    Sign In
                </CardTitle>
                <CardDescription>
                    Login to your account to continue tracking your job applications
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
                        <Label htmlFor="email" className="text-gray-700">Email</Label>
                        <Input 
                         value={email}
                         onChange={(e)=>setEmail(e.target.value)}
                        id="email" type="email" placeholder="abc@gmail.com" required className="border-gray-300 focus:border-primary focus:ring-primary"></Input>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-gray-700">Password</Label>
                        <Input id="password"
                            type="password" placeholder="********" required
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            minLength={8} className="border-gray-300 focus:border-primary focus:ring-primary"></Input>
                    </div>
                </CardContent>

                <CardFooter className="gap-3 text-center">
                    <Button disabled={loading} type="submit">{loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/>: "Sign In"}</Button>
                    <p>Don't have an account?  <Link href="/sign-up" className="text-primary hover:underline font-medium">Sign up</Link></p>
                </CardFooter>
            </form>
        </Card>
    </div>
}