"use client";

import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export function Navbar() {
  return (
    <nav className="w-full bg-background shadow-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">

        {/* LEFT — LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/f1logo.png"
            width={50}
            height={20}
            alt="F1 Logo"
            className="cursor-pointer"
          />
        </Link>

        {/* CENTER — MENU */}
        <div className="flex-1 flex justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              {/* EQUIPOS */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="nav_underline overflow-visible">Equipos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[180px]">
                    <li>
                      <Link href="/equipos" passHref legacyBehavior>
                        <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md">
                          Ver Equipos
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* PILOTOS */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="nav_underline overflow-visible">Pilotos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[180px]">
                    <li>
                      <Link href="/pilotos" passHref legacyBehavior>
                        <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md">
                          Ver Pilotos
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* CARRERAS */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="nav_underline overflow-visible">Carreras</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[180px]">
                    <li>
                      <Link href="/carreras" passHref legacyBehavior>
                        <NavigationMenuLink className="block p-2 hover:bg-accent rounded-md">
                          Calendario
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* RIGHT — AUTH AREA */}
        <div className="flex items-center gap-3">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-3 py-1 rounded-md bg-primary text-primary-foreground hover:opacity-90">
                Iniciar sesión
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button className="px-3 py-1 rounded-md border hover:bg-accent">
                Registrarse
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

      </div>
    </nav>
  );
}
