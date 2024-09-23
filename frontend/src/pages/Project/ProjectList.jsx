import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CaretSortIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import ProjectCard from '@/pages/Project/ProjectCard';

export default function ProjectList() {
    const [keyword, setKeyword] = useState('');

    return (
        <section className="projectList w-full bg-background pr-6">
            <div className="flex gap-2 items-center w-full pt-4 pb-5 px-6 justify-between">
                <div className="relative px-2-0 flex items-center justify-start gap-6  w-full ">
                    <Input type="text" className="w-[60%] py-6 pl-10 rounded-sm focus:outline-none focus:ring-0 focus:border-[2px] focus-visible:ring-0 border-[1.2px] border-secondary" placeholder="Search Project" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                    <MagnifyingGlassIcon className="absolute top-1/2 -translate-y-1/2 left-4" />
                    <Button className="flex items-center gap-2 py-6 pl-8 pr-4 ml-auto text-xl hover:bg-primary hover:contrast-200">Sort <CaretSortIcon className="h-8 w-8 text-2xl" /> </Button>
                </div>
            </div>
            <div>
                <div className="space-y-5 min-h-[74vh]">
                    {keyword ? <ProjectCard /> : <ProjectCard />}
                </div>
            </div>
        </section>
    )
}





