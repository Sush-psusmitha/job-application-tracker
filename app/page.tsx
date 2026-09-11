import {Button} from "@/components/ui/button"
import {ArrowRight} from 'lucide-react'
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return <div className ='flex min-h-screen flex-col bg-white'>
    <main className="flex-1">
      {/* Hero section */}
      <section className=" container mx-auto px-4 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-6xl mb-6  font-bold text-black">A Better way to track your job application</h1>
          <p className="text-muted-foreground mb- 10 text-xl">Caputre, Organize, and manage you job search in one place. </p>
          <div className="flex flex-col items-center gap-4 mt-2">
            <Link href ='/sign-up'>
            <Button size="lg" className="h-12 px-8 text-lg font-medium" >Start for free <ArrowRight className="ml-2 size-5"/></Button>
            </Link>
            <p className="text-muted-foreground text-sm">Free forever, no credit card required.</p>
          </div>
        </div>
      </section>
    </main>
  </div>
}
