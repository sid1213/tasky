// TaskContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { Priority, Task, TaskContextType, Status } from "../types";

const TaskContext = createContext<TaskContextType | undefined>(undefined);

const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const updateLocalStorage = (newTasks: Task[]) => {
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const addTask = (
    title: string,
    description: string,
    priority: Priority,
    cStatus: "done" | "inprogress"
  ) => {
    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      priority,
      cStatus,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    updateLocalStorage([...tasks, newTask]);
  };

  const toggleTask = (newValues: Task) => {
    setTasks((prev) => {
      const findInx = prev.findIndex((ele) => ele.id === newValues.id);
      prev[findInx] = { ...newValues };
      updateLocalStorage([...prev]);
      return prev;
    });
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTaskContext = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};

export { TaskProvider, useTaskContext };
