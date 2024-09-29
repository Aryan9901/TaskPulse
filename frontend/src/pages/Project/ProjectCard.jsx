import { Card, CardHeader } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { DotFilledIcon, DotsVerticalIcon } from "@radix-ui/react-icons";

import { DropMenu } from "@/components/elements/DropMenu";
import { ReusableContextMenu } from "../../components/elements/ReusableContextMenu";
import { Link } from "react-router-dom";

export default function ProjectCard({
  tags = ["Java", "Reactjs", "Springboot", "Sass"],
  project,
}) {
  const handleUpdateClick = () => {
    console.log("Profile clicked");
  };

  const handleDeleteClick = () => {
    console.log("Settings clicked");
  };

  const menuItems = [
    {
      type: "item",
      label: "Update",
      shortcut: "⇧⌘U",
      onClick: handleUpdateClick,
    },
    {
      type: "item",
      label: "Delete",
      shortcut: "⌘D",
      onClick: handleDeleteClick,
    },
  ];

  return (
    <div className="mx-6 p-4 border-b rounded-none border-foreground mb-4">
      <div className="flex justify-start items-center">
        <div className="flex items-center space-x-4">
          <ReusableContextMenu menuItems={menuItems}>
            <Link
              to={`/project/${project}`}
              className="text-primary text-xl font-semibold hover:underline"
            >
              Nexus
            </Link>
          </ReusableContextMenu>
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

        {/* <DropMenu /> */}
        <DropMenu
          triggerIcon={DotsVerticalIcon}
          menuItems={menuItems}
          triggerClassName="w-6 h-6 text-primary cursor-pointer"
          menuContentClassName="w-64 -translate-x-16 -translate-y-0 py-0 px-0"
          itemClassName="focus:bg-primary rounded-none focus:text-foreground cursor-pointer m-0 py-3 px-4 text-sm"
        />
      </div>
      <div className="my-2">
        <p className="max-w-[730px]">
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
