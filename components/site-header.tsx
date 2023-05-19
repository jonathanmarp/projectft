import Link from "next/link"

import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="w-full p-7 px-14 flex justify-between">
      <div>
        <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          <span className="font-extrabold">Project</span> FT
        </h1>
      </div>

      <menu className="flex items-center space-x-1 gap-6">
        <div className="text-lg font-semibold border-b-2">
          <Link href="/">Home</Link>
        </div>
        <div className="text-lg font-semibold">
          <Link href="/">About</Link>
        </div>
        <div className="text-lg font-semibold">
          <Link href="/">Contact</Link>
        </div>
        <Button className="text-lg font-semibold">
          <Link href="/">Achivement</Link>
        </Button>
      </menu>
    </header>
  )
}
