"use client"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
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
      <div className="md:h-[510px] md:w-[500px] md:absolute md:bg-[#4056A1] md:-translate-x-72 md:-translate-y-72 md:rotate-[-45deg] h-[300px] w-[300px] absolute bg-[#4056A1] -translate-x-48 -translate-y-48 rotate-[-45deg]">
        <p className={cn("md:absolute md:bottom-0 md:right-[35%] md:font-semibold md:text-4xl text-[#F3F0EB] absolute bottom-0 right-[38%] text-2xl", roboto.className)}>Branimir</p>
      </div>

      <div className="h-20 md:flex md:items-center md:justify-center md:pt-4 flex justify-center pt-10">
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

      <div className="container md:flex md:items-center md:justify-center md:flex-col gap-10 flex flex-col justify-center pt-4 my-20">
        <p className="text-xl text-slate-700 text-center">A software developer with a passion for exploration 🌍, competition 🏆, and digital adventures 💻. Welcome to my corner of the web!</p>
        <p className="text-xl text-slate-700 max-w-7xl text-center">Through my work as a software developer, I aim to channel my passions into creating meaningful experiences and solutions. Whether I&apos;m crafting compelling narratives, designing engaging experiences, or tackling complex problems, my diverse interests inform and inspire my creative approach.</p>
      </div>

      <div className="container bg-white shadow-lg py-10 rounded-xl my-4">
        <h3 className="font-semibold text-2xl text-center">Work</h3>
        <ol className="relative border-s border-[#4056A1] bg-">                  
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-[#4056A1] rounded-full mt-1.5 -start-1.5 border border-[#4056A1]"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">March 2020 - March 2022</time>
                <h3 className="text-lg font-semibold text-gray-900">Audio video techician at Hrvatska radio televizija</h3>
                <ul className="mb-4 text-base font-normal text-slate-600">
                  <li>Quality control of all audio and video products that are imported to the television server</li>
                  <li>Maintenance of television servers</li>
                  <li>Checking new material before sending them to live television</li>
                  <li>Recording TV shows like : Chase, Who wants to be a millionaire, etc..</li>
                  <li>Working with a lot of people and a lot of teams simultaneously</li>
                </ul>
            </li>
            <li className="ms-4">
                <div className="absolute w-3 h-3 bg-[#4056A1] rounded-full mt-1.5 -start-1.5 border border-[#4056A1]"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">March 2022 - present</time>
                <h3 className="text-lg font-semibold text-gray-900">Java software developer at Ericsson Nikola Tesla d.d.</h3>
                <ul className="mb-4 text-base font-normal text-slate-600">
                  <li>Developing and testing automation of upgrade of radio tower software on 5g networks</li>
                  <li>Writing and assessing code impact for new features</li>
                  <li>Writing clean and reusable Java code</li>
                  <li>Mastered using git and bash</li>
                </ul>
            </li>
        </ol>
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
                <ul className="mb-4 text-base font-normal text-slate-600">
                  <li>Learned how to make web applications using node.js, Next.js and Angular through college projects using Javascript or Typescript</li>
                </ul>
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