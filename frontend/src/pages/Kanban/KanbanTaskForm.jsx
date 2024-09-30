
const KanbanTaskForm = ({ newTask, setNewTask, setColumns, setShowForm }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask((prev) => ({ ...prev, [name]: value }));
    };

    const addNewTask = () => {
        if (newTask.name && newTask.description) {
            setColumns((prev) => ({
                ...prev,
                backlog: {
                    ...prev.backlog,
                    items: [...prev.backlog.items, { ...newTask }],
                },
            }));
            setNewTask({ name: "", description: "" });
            setShowForm(false);
        }
    };

    return (
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
                <button className="bg-green-500 text-white px-2 py-1 rounded mr-2" onClick={addNewTask}>
                    Add
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => setShowForm(false)}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default KanbanTaskForm;
