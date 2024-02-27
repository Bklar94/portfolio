"use client"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Image from "next/image";
import { Fredoka, Roboto } from "next/font/google";
import { cn } from "@/lib/utils"
import { FaJava, FaNode, FaLinux } from "react-icons/fa";
import { DiAngularSimple } from "react-icons/di";
import { FaGitAlt, FaL } from "react-icons/fa6";
import { SiNextdotjs, SiGodotengine } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { ContactForm } from "@/components/auth/contact-form";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";


const font = Fredoka({
  subsets: ["latin"],
  weight: ["500"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Home() {
  const style = {color: "#4056A1"}
  const BranimirCV = "BranimirCV.pdf"

  return (
    <main className="h-screen">
      <div className="md:h-[510px] md:w-[500px] md:absolute md:bg-[#4056A1] md:-translate-x-72 md:-translate-y-72 md:rotate-[-45deg] h-[300px] w-[300px] absolute bg-[#4056A1] -translate-x-48 -translate-y-48 rotate-[-45deg]">
        <p className={cn("md:absolute md:bottom-0 md:right-[35%] md:font-semibold md:text-4xl text-[#F3F0EB] absolute bottom-0 right-[38%] text-2xl", roboto.className)}>Branimir</p>
      </div>
      <Link href={"https://www.linkedin.com/in/branimir-klaričić-500025284"} className="absolute right-0 m-4"><FaLinkedin style={style} size={30}/></Link>
      <div className="h-20 md:flex md:items-center md:justify-center md:pt-4 flex justify-center pt-10">
        <NavigationMenu className="text-slate-600 font-semibold">
          <NavigationMenuList className="md:gap-24 flex flex-col gap-1 md:flex md:flex-row">
            <NavigationMenuItem className="">
                <NavigationMenuLink className="border-b-2 border-b-slate-600" active={true} href="/">Homepage</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem >
                <NavigationMenuLink className="hover:border-b-2 border-b-slate-600" href="/about">About me</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem >
                <NavigationMenuLink className="hover:border-b-2 border-b-slate-600" href="/BranimirCV.pdf" download={BranimirCV}>Download CV</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="container h-fit md:flex md:flex-row md:items-center md:justify-around flex flex-col justify-center items-center px-40 mt-8 md:mt-0">
        <Image src={"/branimir.png"} width={155} height={140} alt="Me" className="rounded-full mb-2"/>
        <div className={cn("text-center md:text-pretty md:max-w-[40%] text-slate-600 min-w-64 my-4", font.className)}>
        <h1 className={cn("text-4xl mb-10", roboto.className)}>Hi, my name is Branimir</h1>
        <p className="text-lg">Software developer passionate for turning a world into a better place using the best form of art, the art of code!</p>
        </div>
      </div>
      <div className="h-fit md:flex md:justify-center md:mx-64 md:gap-4 md:items-center flex flex-wrap md:my-10">
        <div className="md:flex md:flex-row md:w-1/4 md:justify-center w-1/2 flex flex-col justify-center items-center">
          <FaJava size={100} style={style} className="transition-all duration-500 hover:animate-pulse"/>
        </div>
        <div className="md:flex md:w-1/4 md:justify-center w-1/2 flex flex-col justify-center items-center">
          <IoLogoJavascript size={100} style={style} className="transition-all duration-500 hover:animate-pulse"/>
        </div>
        <div className="md:flex md:w-1/4 md:justify-center w-1/2 flex flex-col justify-center items-center">
          <DiAngularSimple size={100} style={style} className="transition-all duration-500 hover:animate-pulse"/>
        </div>
        <div className="md:flex md:w-1/4 md:justify-center w-1/2 flex flex-col justify-center items-center">
          <FaNode size={100} style={style} className="transition-all duration-500 hover:animate-pulse"/>
        </div>
        <div className="md:flex md:w-1/4 md:justify-center w-1/2 flex flex-col justify-center items-center">
          <FaGitAlt size={100} style={style} className="transition-all duration-500 hover:animate-pulse"/>
        </div>
        <div className="md:flex md:w-1/4 md:justify-center w-1/2 flex flex-col justify-center items-center">
          <SiNextdotjs size={100} style={style} className="transition-all duration-500 hover:animate-pulse"/>
        </div>
        <div className="md:flex md:w-1/4 md:justify-center w-1/2 flex flex-col justify-center items-center">
          <FaLinux size={100} style={style} className="transition-all duration-500 hover:animate-pulse"/>
        </div>        
        <div className="md:flex md:w-1/4 md:justify-center w-1/2 flex flex-col justify-center items-center">
          <SiGodotengine size={100} style={style} className="transition-all duration-500 hover:animate-pulse"/>
        </div>
      </div>

      <div className="flex flex-col gap-6 items-center justify-center h-fit md:px-40 my-4 ">
        <h3 className="font-bold text-4xl">Let&apos;s connect</h3>
        <p className="max-w-96 text-slate-800 text-center text-xl">I&apos;m always on the lookout for new opportunities to collaborate and create something extraordinary. Whether you&apos;re interested in discussing a potential project, need help with your personal project, need a website for your business, don&apos;t hesitate to reach out!
        </p>
        <p className="max-w-96 text-slate-800 text-center text-xl">Thanks for stopping by, and I look forward to connecting with you soon.</p>
        <ContactForm/>
      </div>
      <footer className="flex flex-row-reverse items-end h-fit px-4 text-slate-600 ">
        Created by 🦁 Livion
      </footer>
    </main>
  );
}
