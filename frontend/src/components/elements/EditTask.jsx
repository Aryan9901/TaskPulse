import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogClose,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function EditTask({ children, task, columnId, setColumns, columns }) {
    const [newTask, setNewTask] = useState({
        name: task.name,
        description: task.description,
    });

    const updateTask = () => {
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
    };


    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Task</DialogTitle>
                    <DialogDescription>
                        Modify the task details and save your changes.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"
                            value={newTask.name}
                            onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Description
                        </Label>
                        <Input
                            id="description"
                            value={newTask.description}
                            onChange={(e) =>
                                setNewTask({ ...newTask, description: e.target.value })
                            }
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose>
                        <Button onClick={updateTask}>Save changes</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
