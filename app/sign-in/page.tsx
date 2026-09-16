"use client";

import { Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function SignIn() {
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
            <form className="space-y-4">
                <CardContent className="space-y-4">

                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700">Email</Label>
                        <Input id="email" type="email" placeholder="abc@gmail.com" required className="border-gray-300 focus:border-primary focus:ring-primary"></Input>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-gray-700">Password</Label>
                        <Input id="password"
                            type="password" placeholder="********" required
                            minLength={8} className="border-gray-300 focus:border-primary focus:ring-primary"></Input>
                    </div>
                </CardContent>

                <CardFooter className="gap-3 text-center">
                    <Button type="submit">Sign In</Button>
                    <p>Don't have an account?  <Link href="/sign-up" className="text-primary hover:underline font-medium">Sign up</Link></p>
                </CardFooter>
            </form>
        </Card>
    </div>
}