import { useEffect } from 'react';

const getInitialTasks = () => {
    const tasksFromLocalStorage = localStorage.getItem("tasks");

    return tasksFromLocalStorage
        ? JSON.parse(tasksFromLocalStorage)
        : [];
};

export const useTasks = () => {

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return {
        tasks,
    };
};