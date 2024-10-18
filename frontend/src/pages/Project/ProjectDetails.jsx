import { useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import ShowMoreText from "react-show-more-text";
import { ListChecks, PlusIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TabComponent } from "../../components/elements/TabComponent";
import TaskContainer from "../Task/TaskContainer";
import InviteUserForm from "../Invitation/InviteUserForm";
import { ChatApp } from "../Chat/ChatApp";

const users = [
  { name: "User 1", avatar: "https://github.com/shadcn.png" },
  { name: "User 2", avatar: "https://github.com/shadcn.png" },
  { name: "User 3", avatar: "https://github.com/shadcn.png" },
  { name: "User 4", avatar: "https://github.com/shadcn.png" },
];

export default function ProjectDetails() {
  const { projectId } = useParams();

  const tabs = [
    {
      label: "Task",
      content: <TaskContainer />,
      icon: ListChecks, // You can import and use any icon component here
    },
    {
      label: "Source Code",
      content: <div>source code</div>,
      icon: ListChecks, // You can import and use any icon component here
    },
  ];

  return (
    <main className="projectDetails relative w-full dark:bg-black bg-[#fcfcfc] min-h-full">
      <section className="projectHeading px-8 py-6 w-full">
        <h2 className="text-3xl text-primary">Nexus</h2>
        <p className="text-base dark:text-gray-300 text-gray-600 my-3 max-w-xl w-full">
          <ShowMoreText
            lines={2}
            more="Show more"
            less="Show less"
            className="content-css"
            anchorClass="show-more cursor-pointer text-primary text-sm"
            expanded={false}
            truncatedEndingComponent={"... "}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            deserunt, saepe sapiente accusantium numquam tenetur ex fuga
            delectus adipisci dolorum enim reiciendis inventore ab? Magni veniam
            cumque iste officiis non fugit, eligendi recusandae vitae debitis
            dolores?
          </ShowMoreText>
        </p>

        <span className="grid grid-cols-8 items-center gap-6 mb-4">
          <h3>Project Lead: </h3> Aryan Gupta
        </span>

        <span className="grid items-center grid-cols-8 gap-6">
          <h3>Members: </h3>
          <div className="relative flex items-center justify-start space-x-[-18px]">
            {users.slice(0, 3).map((user, index) => (
              <Avatar key={index} className="border border-white">
                <AvatarImage src={user.avatar} alt={`@${user.name}`} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
            ))}
            {/* Down arrow button to toggle the user list */}
            <PopoverMenu>
              <button className="">
                <ChevronDown className="ml-5 h-5 w-5 text-foreground" />
              </button>
            </PopoverMenu>
            <Dialog>
              <DialogTrigger>
                <button className="rounded-full flex gap-2 items-center px-4 ml-7 py-1 border border-primary text-sm text-foreground bg-background">
                  Invite <PlusIcon size={15} />
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Invite Members</DialogTitle>
                </DialogHeader>
                <InviteUserForm />
              </DialogContent>
            </Dialog>
          </div>
        </span>
        <span className="grid grid-cols-8 items-center gap-6 mb-4 mt-4">
          <h3>Category: </h3> Full Stack
        </span>
        <span className="grid grid-cols-8 items-center gap-6 mb-4">
          <h3>Status: </h3>
          <button className="rounded-full px-0 py-1 border border-primary text-white bg-primary">
            In Progress
          </button>
        </span>
      </section>
      <section>
        <TabComponent tabs={tabs} />
      </section>
      <ChatApp>
        <button className="fixed bottom-12 right-12" variant="outline">
          Chat with us
        </button>
      </ChatApp>
    </main>
  );
}

const PopoverMenu = ({ children }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-fit h-44 px-0 overflow-auto mt-2 translate-x-20 py-0 ">
        {users?.map((user, index) => (
          <div
            key={index}
            className="flex px-4 last:border-none items-center gap-4 my-1 border-b-2 py-2"
          >
            <Avatar>
              <AvatarImage src={user.avatar} alt={`${user.name}`} />
              <AvatarFallback>{user.name}</AvatarFallback>
            </Avatar>
            <span className="text-sm">{user.name}</span>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};
