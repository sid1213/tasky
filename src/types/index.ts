export enum Priority {
  Low = "low",
  Medium = "medium",
  High = "high",
}
export enum Status {
  Done = "done",
  Inprogress = "inprogress",
}

export type Task = {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  cStatus: "done" | "inprogress";
};

export type TaskContextType = {
  tasks: Task[];
  addTask: (
    title: string,
    description: string,
    priority: Priority,
    cStatus: "done" | "inprogress"
  ) => void;
  toggleTask: (newValues: Task) => void;
};
