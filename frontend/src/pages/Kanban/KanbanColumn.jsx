import React from "react";
import { Droppable } from "@hello-pangea/dnd";
import { CircleDot } from "lucide-react";
import KanbanTask from "./KanbanTask";

const KanbanColumn = ({ colId, column, setColumns, showForm, setShowForm }) => {
    return (
        <div className="min-w-[290px] w-[80%] sm:w-[45%] lg:w-1/3 xl:w-1/4 lg:max-w-[300px] rounded py-2 shadow dark:bg-secondary bg-background">
            <h2
                className={`text-base flex gap-3 pl-4 font-medium my-2 ${column.title === "Not Started"
                    ? "text-red-700"
                    : column.title === "In Progress"
                        ? "text-primary"
                        : column.title === "In Review"
                            ? "text-yellow-600"
                            : "text-green-500"
                    }`}
            >
                <CircleDot />
                {column.title}
            </h2>
            <div className="scroll-container px-2 mt-0 h-[50vh] overflow-y-auto">
                <Droppable droppableId={colId}>
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className="py-2 px-0 rounded">
                            {column.items.map((item, index) => (
                                <KanbanTask key={item.name} item={item} index={index} colId={colId} setColumns={setColumns} />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </div>
    );
};

export default KanbanColumn;
