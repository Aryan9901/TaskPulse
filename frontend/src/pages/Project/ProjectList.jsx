import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CaretSortIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import ProjectCard from "@/pages/Project/ProjectCard";
import { Link } from "react-router-dom";

export default function ProjectList() {
  const [keyword, setKeyword] = useState("");

  return (
    <section className="projectList w-full bg-background">
      <div className="flex gap-2 items-center w-full pt-4 pb-5 px-6 justify-between">
        <div className="relative px-2-0 flex items-center justify-start gap-6  w-full ">
          <Input
            type="text"
            className="w-[60%] py-6 pl-10 rounded-sm focus:outline-none focus:ring-1 focus-visible:ring-1 border-[1.2px] border-secondary"
            placeholder="Search Project"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <MagnifyingGlassIcon className="absolute top-1/2 -translate-y-1/2 left-4" />
          <button className="flex bg-primary text-white rounded-md items-center gap-2 py-2 px-6 font-bold tracking-wider ml-auto text-base hover:bg-primary hover:contrast-200">
            Sort
          </button>
          <Link to="/projects/new">
            <button className="flex bg-primary text-white rounded-md items-center gap-2 py-2 px-6 font-bold tracking-wider text-base hover:bg-primary hover:contrast-200">
              New
            </button>
          </Link>
        </div>
      </div>
      <div className="">
        {/* <div className="space-y-5  min-h-[71.4vh]"> */}
        <ScrollArea className="h-[71.4vh] no-scrollbar overflow-auto">
          {keyword
            ? [1, 2, 3].map((item) => <ProjectCard key={item} />)
            : [1, 2, 3, 4].map((item) => <ProjectCard key={item} />)}
        </ScrollArea>
      </div>
    </section>
  );
}
