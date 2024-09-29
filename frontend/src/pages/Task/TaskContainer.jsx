import KanbanBoard from "../Kanban/KanbanBoard";

export default function TaskContainer() {
  return (
    <div className="w-full">
      {/* <h3>Task Container</h3> */}
      <div className="w-full">
        <KanbanBoard />
      </div>
    </div>
  );
}
