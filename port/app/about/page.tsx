"use client"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["500"],
});
  


const AboutPage = () => {
    const style = {color: "#4056A1"}
    const BranimirCV = "BranimirCV.pdf"

    return ( 
        <main className="h-screen">
      <div className="md:h-[510px] md:w-[500px] md:absolute md:bg-[#4056A1] md:-translate-x-72 md:-translate-y-72 md:rotate-[-45deg] h-[300px] w-[300px] absolute bg-[#4056A1] -translate-x-40 -translate-y-40 rotate-[-45deg]">
        <p className={cn("md:absolute md:bottom-0 md:right-[35%] md:font-semibold md:text-4xl text-[#F3F0EB] absolute bottom-0 right-[38%] text-2xl", roboto.className)}>Branimir</p>
      </div>
      <div className="h-20 md:flex md:items-center md:justify-center flex justify-center pt-4">
        <NavigationMenu className="text-slate-600 font-semibold">
          <NavigationMenuList className="md:gap-24 flex flex-col gap-1 md:flex md:flex-row">
            <NavigationMenuItem className="">
                <NavigationMenuLink className="hover:border-b-2 border-b-slate-600" href="/">Homepage</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem >
                <NavigationMenuLink className="border-b-2 border-b-slate-600" active={true} href="/about">About me</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem >
                <NavigationMenuLink className="hover:border-b-2 border-b-slate-600" href="/BranimirCV.pdf" download={BranimirCV}>Download CV</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>


      <div className="container md:flex md:items-center md:justify-center flex justify-center pt-4 mt-28">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, nulla id sint velit assumenda quia nostrum nobis, nesciunt natus deleniti modi. Voluptate ad neque vitae dolorem qui dignissimos, inventore veniam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, ratione deleniti nulla accusantium nobis, itaque cum repellat hic natus numquam harum. Placeat fuga obcaecati praesentium accusantium accusamus eos! Reprehenderit, minima.
      </div>

      <div className="container bg-white shadow-lg py-10 rounded-xl my-4">
        <h3 className="font-semibold text-2xl text-center">Education</h3>
        <ol className="relative border-s border-[#4056A1] pt">                  
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-[#4056A1] rounded-full mt-1.5 -start-1.5 border border-[#4056A1]"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">2009-2013</time>
                <h3 className="text-lg font-semibold text-gray-900">School of electrotechnics Split</h3>
                <p className="mb-4 text-base font-normal text-slate-600">Finished high school with a diploma for computer technician</p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-[#4056A1] rounded-full mt-1.5 -start-1.5 border border-[#4056A1]"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">2020-2023</time>
                <h3 className="text-lg font-semibold text-gray-900">Zagreb University of Applied Sciences</h3>
                <p className="text-base font-normal text-slate-600">Bachelor&apos;s degree in Computer engineering</p>
            </li>
        </ol>
      </div>

      <div className="container bg-white shadow-lg py-10 rounded-xl my-4">
        <h3 className="font-semibold text-2xl text-center">Work</h3>
        <ol className="relative border-s border-[#4056A1] bg-">                  
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-[#4056A1] rounded-full mt-1.5 -start-1.5 border border-[#4056A1]"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">February 2022</time>
                <h3 className="text-lg font-semibold text-gray-900">Application UI code in Tailwind CSS</h3>
                <p className="mb-4 text-base font-normal text-slate-600">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-[#4056A1] rounded-full mt-1.5 -start-1.5 border border-[#4056A1]"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">March 2022</time>
                <h3 className="text-lg font-semibold text-gray-900">Marketing UI design in Figma</h3>
                <p className="text-base font-normal text-slate-600">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
            </li>
            <li className="ms-4">
                <div className="absolute w-3 h-3 bg-[#4056A1] rounded-full mt-1.5 -start-1.5 border border-[#4056A1]"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">April 2022</time>
                <h3 className="text-lg font-semibold text-gray-900">E-Commerce UI code in Tailwind CSS</h3>
                <p className="text-base font-normal text-slate-600">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
            </li>
        </ol>
      </div>

      <footer className="flex flex-row-reverse items-end h-fit px-4 text-slate-600 ">
        Created by 🦁 Livion
      </footer>
    </main>
     );
}
 
export default AboutPage;