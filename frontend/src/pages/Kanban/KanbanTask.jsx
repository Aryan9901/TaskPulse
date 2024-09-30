import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import { ReusableContextMenu } from "@/components/elements/ReusableContextMenu";

const KanbanTask = ({ item, index, colId, setColumns, columns = {} }) => {
    const generateContextMenuItems = () => {
        // Check if columns are defined before attempting to access them
        if (!columns || typeof columns !== "object") {
            console.error("Invalid columns prop:", columns);
            return [];
        }

        // Generate dynamic move-to-column menu items based on available columns
        const moveItems = Object.keys(columns).map((columnKey) => ({
            type: "normal", // Default type for normal menu items
            label: `Move to ${columns[columnKey].title}`,
            onClick: () => moveTask(columnKey),
        }));

        return [
            ...moveItems,
            { type: "separator" }, // Separator for better visual grouping
            { type: "normal", label: "Edit Task", onClick: editTask },
            { type: "normal", label: "Delete Task", onClick: deleteTask },
        ];
    };

    const moveTask = (targetColId) => {
        // Logic to move the task to a different column
        if (targetColId !== colId) {
            setColumns((prevColumns) => {
                const sourceColItems = prevColumns[colId].items.filter(
                    (i) => i.name !== item.name
                );
                const targetColItems = [...prevColumns[targetColId].items, item];

                return {
                    ...prevColumns,
                    [colId]: { ...prevColumns[colId], items: sourceColItems },
                    [targetColId]: { ...prevColumns[targetColId], items: targetColItems },
                };
            });
        }
    };

    const editTask = () => {
        console.log(`Editing task: ${item.name}`);
        // Add your edit task logic here
    };

    const deleteTask = () => {
        setColumns((prevColumns) => {
            const updatedItems = prevColumns[colId].items.filter(
                (i) => i.name !== item.name
            );
            return { ...prevColumns, [colId]: { ...prevColumns[colId], items: updatedItems } };
        });
    };

    return (
        <Draggable draggableId={item.name} index={index}>
            {(provided) => (
                <ReusableContextMenu menuItems={generateContextMenuItems()}>
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="dark:bg-white dark:text-background bg-white text-foreground py-2 px-2 mb-2 rounded shadow"
                    >
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm">{item.description}</p>
                    </div>
                </ReusableContextMenu>
            )}
        </Draggable>
    );
};

export default KanbanTask;
