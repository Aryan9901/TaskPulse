import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";

export const DropMenu = ({
  triggerIcon: TriggerIcon = DotsVerticalIcon,
  menuItems = [],
  triggerClassName = "w-5 h-5 text-foreground cursor-pointer",
  menuContentClassName = "w-56 -translate-x-20 -translate-y-0 py-0 px-0",
  itemClassName = "hover:bg-secondary focus:bg-background focus:text-foreground cursor-pointer m-0 py-2 px-3 text-sm border-none",
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Dynamically render the trigger icon */}
        <TriggerIcon className={triggerClassName} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={menuContentClassName}>
        {/* Dynamically render menu items */}
        {menuItems.map((item, index) => (
          <DropdownMenuItem
            key={index}
            className={itemClassName}
            onClick={item.onClick}
          >
            {item.label}
            {item.shortcut && (
              <DropdownMenuShortcut className="text-base">
                {item.shortcut}
              </DropdownMenuShortcut>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
