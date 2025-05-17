// todoStore.js
import { create } from "zustand";

const useTodoStore = create((set, get) => ({
  todos: [],
  newTodo: "",
  setTodos: (todo) =>
    set([
      ...get().todos,
      { id: Date.now(), text: get().newTodo, isCompleted: false },
    ]),
  setNewTodo: (text) => set({ newTodo: text }),
}));

export default useTodoStore;
