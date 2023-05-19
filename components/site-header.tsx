import * as React from "react"

import Link from "next/link"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="w-full p-7 sm:px-14 px-7 flex justify-between">
      <div>
        <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          <span className="font-extrabold">Project</span> FT
        </h1>
      </div>

      {/* Menu */}
      <Menubar className="sm:hidden flex">
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Home <MenubarShortcut>#1</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              About <MenubarShortcut>#2</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Contact <MenubarShortcut>#3</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Achivement <MenubarShortcut>#4</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      
      {/* Menu If Large */}
      <menu className="hidden sm:flex items-center space-x-1 gap-6">
        <div className="text-lg font-semibold border-b-2">
          <Link href="/#home">Home</Link>
        </div>
        <div className="text-lg font-semibold">
          <Link href="/#about">About</Link>
        </div>
        <div className="text-lg font-semibold">
          <Link href="/#contact">Contact</Link>
        </div>
        <Button className="text-lg font-semibold">
          <Link href="/#achivement">Achivement</Link>
        </Button>
      </menu>
    </header>
  )
}