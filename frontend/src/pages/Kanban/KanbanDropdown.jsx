import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { EditTask } from "../../components/elements/EditTask";

export const KanbanDropdown = ({
    triggerIcon: TriggerIcon = DotsVerticalIcon,
    menuItems = [],
    triggerClassName = "w-5 h-5 text-foreground cursor-pointer",
    menuContentClassName = "w-56 -translate-x-20 -translate-y-0 py-0 px-0",
    itemClassName = "hover:bg-secondary focus:bg-background focus:text-foreground cursor-pointer m-0 py-2 px-3 text-sm border-none",
    setColumns,
    task,
    columnId,
    columns
}) => {

    const handleEditClick = (e) => {
        e.stopPropagation();
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <TriggerIcon className={triggerClassName} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className={menuContentClassName}>
                {menuItems.map((item, index) =>
                    item.label === "Edit" ? (
                        <EditTask
                            key={index}
                            setColumns={setColumns}
                            task={task}
                            columnId={columnId}
                            columns={columns}
                        >
                            <div
                                className={itemClassName}
                                onClick={handleEditClick} // Prevent the dialog from closing
                            >
                                {item.label}
                                {item.shortcut && (
                                    <DropdownMenuShortcut className="text-base">
                                        {item.shortcut}
                                    </DropdownMenuShortcut>
                                )}
                            </div>
                        </EditTask>
                    ) : (
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
                    )
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
