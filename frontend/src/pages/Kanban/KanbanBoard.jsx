import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { ReusableContextMenu } from "@/components/elements/ReusableContextMenu";
import { CircleDot } from "lucide-react";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { KanbanDropdown } from "./KanbanDropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
// import { EditTask } from "../../components/elements/EditTask";

const KanbanBoard = () => {
  const initialData = {
    backlog: {
      title: "Not Started",
      items: [
        { id: 1, name: "Task 1", description: "Description of Task 1" },
        { id: 2, name: "Task 2", description: "Description of Task 2" },
      ],
    },
    inProgress: {
      title: "In Progress",
      items: [{ id: 3, name: "Task 3", description: "Description of Task 3" }],
    },
    inReview: {
      title: "In Review",
      items: [{ id: 4, name: "Task 4", description: "Description of Task 4" }],
    },
    done: {
      title: "Done",
      items: [{ id: 5, name: "Task 5", description: "Description of Task 5" }],
    },
  };

  const [columns, setColumns] = useState(initialData);
  const [newTask, setNewTask] = useState({ name: "", description: "" });
  const [showForm, setShowForm] = useState(false);
  const [editTask, setEditTask] = useState(null); // For editing tasks

  // Log operation function
  const logOperation = (source, destination, movedItem) => {
    const isSameColumn = source.droppableId === destination.droppableId;
    console.log(
      `Item moved ${
        isSameColumn ? "within the same column" : "to a different column"
      }`
    );
    console.log("Moved Item:", movedItem);
  };

  // Handle drag end event
  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const sourceColumn = columns[source.droppableId];
    const destinationColumn = columns[destination.droppableId];
    let movedItem;

    if (sourceColumn === destinationColumn) {
      const newItems = Array.from(sourceColumn.items);
      [movedItem] = newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, movedItem);

      setColumns((prev) => ({
        ...prev,
        [source.droppableId]: {
          ...sourceColumn,
          items: newItems,
        },
      }));
    } else {
      const sourceItems = Array.from(sourceColumn.items);
      const destinationItems = Array.from(destinationColumn.items);
      [movedItem] = sourceItems.splice(source.index, 1);
      destinationItems.splice(destination.index, 0, movedItem);

      setColumns((prev) => ({
        ...prev,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destinationColumn,
          items: destinationItems,
        },
      }));
    }

    logOperation(source, destination, movedItem);
  };

  // Function to handle task movement between columns
  const moveTaskToColumn = (task, sourceColumnId, destinationColumnId) => {
    if (sourceColumnId !== destinationColumnId) {
      const sourceItems = Array.from(columns[sourceColumnId].items);
      const destinationItems = Array.from(columns[destinationColumnId].items);

      const movedTask = sourceItems.find((item) => item.name === task.name);
      destinationItems.push(movedTask);

      setColumns((prev) => ({
        ...prev,
        [sourceColumnId]: {
          ...prev[sourceColumnId],
          items: sourceItems.filter((item) => item.name !== task.name),
        },
        [destinationColumnId]: {
          ...prev[destinationColumnId],
          items: destinationItems,
        },
      }));
    }
  };

  // Function to generate the context menu items dynamically, including move options
  const generateContextMenuItems = (task, sourceColumnId) => {
    const moveOptions = Object.keys(columns).map((colId) => ({
      label: `Move to ${columns[colId].title}`,
      onClick: () => moveTaskToColumn(task, sourceColumnId, colId),
    }));

    const menuItems = [
      // { label: "Edit", onClick: () => handleEditTask(task, sourceColumnId) },
      // { label: "Edit", onClick: () => {
      // } },
      {
        label: "Delete",
        onClick: () => handleDeleteTask(task, sourceColumnId),
      },
      ...moveOptions, // Add move options to the context menu
    ];

    return menuItems;
  };

  // Handle new task input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  // Add new task to the backlog
  const addNewTask = () => {
    if (newTask.name && newTask.description) {
      setColumns((prev) => ({
        ...prev,
        backlog: {
          ...prev.backlog,
          items: [...prev.backlog.items, { id: Date.now(), ...newTask }],
        },
      }));
      setNewTask({ name: "", description: "" }); // Clear form
      setShowForm(false); // Close form after submission
    }
  };

  // Edit task handler
  const handleEditTask = (task, columnId) => {
    setEditTask({ task, columnId });
    setNewTask({ name: task.name, description: task.description });
    setShowForm(true);
  };

  // Update task after edit
  const updateTask = () => {
    const { task, columnId } = editTask;
    const updatedItems = columns[columnId].items.map((item) =>
      item.id === task.id ? { ...item, ...newTask } : item
    );

    setColumns((prev) => ({
      ...prev,
      [columnId]: {
        ...prev[columnId],
        items: updatedItems,
      },
    }));

    setEditTask(null); // Clear edit task state
    setNewTask({ name: "", description: "" });
    setShowForm(false);
  };

  // Delete task handler
  const handleDeleteTask = (task, columnId) => {
    const updatedItems = columns[columnId].items.filter(
      (item) => item.id !== task.id
    );

    setColumns((prev) => ({
      ...prev,
      [columnId]: {
        ...prev[columnId],
        items: updatedItems,
      },
    }));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="relative flex items-center justify-around lg:justify-between gap-y-7 pb-12 px-4 flex-wrap">
        {Object.keys(columns).map((colId) => {
          const column = columns[colId];
          return (
            <div
              key={colId}
              className="min-w-[290px] w-[80%] sm:w-[45%] lg:w-1/3 xl:w-1/4 lg:max-w-[300px] rounded py-2 shadow dark:bg-secondary bg-background"
            >
              <h2
                className={`text-base flex gap-3 pl-4 font-medium my-2 ${
                  column.title === "Not Started"
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
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="py-2 px-0 rounded"
                    >
                      {colId === "backlog" && (
                        <>
                          {showForm ? (
                            <div className="mb-2">
                              <input
                                className="border-b-2 border-primary focus:outline-none placeholder:text-gray-200 placeholder:font-normal bg-transparent mb-2 p-2 w-full"
                                type="text"
                                placeholder="Task Name"
                                name="name"
                                value={newTask.name}
                                onChange={handleInputChange}
                              />
                              <input
                                className="border-b-2 border-primary focus:outline-none placeholder:text-gray-200 placeholder:font-normal bg-transparent mb-2 p-2 w-full"
                                type="text"
                                placeholder="Task Description"
                                name="description"
                                value={newTask.description}
                                onChange={handleInputChange}
                              />
                              <div className="flex justify-end">
                                {editTask ? (
                                  <button
                                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                                    onClick={updateTask}
                                  >
                                    Update
                                  </button>
                                ) : (
                                  <button
                                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                                    onClick={addNewTask}
                                  >
                                    Add
                                  </button>
                                )}
                                <button
                                  className="bg-red-500 text-white px-2 py-1 rounded"
                                  onClick={() => setShowForm(false)}
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          ) : (
                            <button
                              className="bg-blue-500 text-white px-2 py-1 mb-2 rounded w-full"
                              onClick={() => setShowForm(true)}
                            >
                              + Add New Task
                            </button>
                          )}
                        </>
                      )}

                      {column.items.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.name}
                          index={index}
                        >
                          {(provided) => (
                            <ReusableContextMenu
                              menuItems={generateContextMenuItems(item, colId)}
                            >
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="dark:bg-white dark:text-background bg-white text-foreground py-2 px-2 mb-2 rounded shadow relative"
                              >
                                <h3 className="font-semibold">{item.name}</h3>
                                <div className="flex justify-between items-center my-2">
                                  <p className="text-sm">{item.description}</p>
                                  <Avatar>
                                    <AvatarImage
                                      src="https://github.com/shadcn.png"
                                      alt="@shadcn"
                                    />
                                    <AvatarFallback>CN</AvatarFallback>
                                  </Avatar>
                                </div>

                                {/* Three-dot dropdown menu for edit/delete/move options */}
                                <div className="absolute top-2 right-2">
                                  <KanbanDropdown
                                    triggerIcon={DotsVerticalIcon}
                                    menuItems={generateContextMenuItems(
                                      item,
                                      colId
                                    )}
                                    setColumns={setColumns}
                                    task={item}
                                    columnId={colId}
                                    columns={columns}
                                  />
                                </div>
                              </div>
                            </ReusableContextMenu>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
