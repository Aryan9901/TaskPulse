import { Card, CardHeader } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { DotFilledIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ProjectCard({
  tags = ["Java", "Reactjs", "Springboot", "Sass"],
}) {
  return (
    <div className="mx-6 p-4 border-b rounded-none border-foreground mb-4">
      <div className="flex justify-start items-center">
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-primary text-xl font-semibold hover:underline"
          >
            Nexus
          </a>
          <span className="bg-foreground text-background text-sm px-3 py-[3px] rounded-full">
            Public
          </span>
        </div>
        <button className="ml-auto mr-3 bg-foreground text-background text-sm px-3 py-[7px] rounded-lg hover:bg-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#EAC54F"
            className="w-5 h-5 inline-block mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0a7.002 7.002 0 015.566 5.566c.921.3.921 1.603 0 1.902a7.002 7.002 0 010 8.485c-.3.921-1.603.921-1.902 0a7.002 7.002 0 01-8.485 0c-.921-.3-.921-1.603 0-1.902a7.002 7.002 0 010-8.485c-.921-.3-.921-1.603 0-1.902a7.002 7.002 0 015.566-5.566z"
            />
          </svg>
          Star
        </button>
        {/* <DotsVerticalIcon className="w-5 h-5 text-foreground cursor-pointer" /> */}

        <DropMenu />
      </div>
      <div className="my-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          dolorem soluta mollitia corrupti quam error non libero officia cumque.
        </p>
      </div>
      <div className="flex items-center mt-2 gap-4">
        {tags?.map((item) => (
          <div className="flex items-center gap-1" key={item}>
            <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
            <span className="text-foreground ml-2">{item}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center mt-2">
        <span className="text-gray-500 text-sm">Updated 22 minutes ago</span>
      </div>
    </div>
  );
}

const DropMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <DotsVerticalIcon className="w-5 h-5 text-foreground cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 -translate-x-16 -translate-y-10 py-0 px-0"
        style={{ left: "-150px" }}
      >
        <DropdownMenuItem className="hover:bg-secondary cursor-pointer m-0 py-2 px-3 text-sm border-none">
          Profile
          <DropdownMenuShortcut className="text-base">⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
