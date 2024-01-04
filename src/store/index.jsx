import { create } from "zustand";

export const useStore = create((set) => ({
  messages: [
    {
      id: 1,
      name: "Wade Cooper",
      message:
        "The service you wrote for cloude updates don't work quite right.",
      time: "5 days ago",
      archived: false,
    },
    {
      id: 2,
      name: "Arlene Mccoy",
      message:
        "The service you wrote for cloude updates don't work quite right.",
      time: "5 days ago",
      archived: false,
    },
    {
      id: 3,
      name: "Devon Webb",
      message:
        "The service you wrote for cloude updates don't work quite right.",
      archived: false,
      time: "5 days ago",
    },
    {
      id: 4,
      name: "Tom Cook",
      message:
        "The service you wrote for cloude updates don't work quite right.",
      archived: false,
      time: "5 days ago",
    },
    {
      id: 5,
      name: "Tanya Fox",
      message:
        "The service you wrote for cloude updates don't work quite right.",
      archived: false,
      time: "5 days ago",
    },
    {
      id: 6,
      name: "Hellen Schmidt",
      message:
        "The service you wrote for cloude updates don't work quite right.",
      archived: false,
      time: "5 days ago",
    },
    {
      id: 7,
      name: "Caroline Schultz",
      message:
        "The service you wrote for cloude updates don't work quite right.",
      archived: false,
      time: "5 days ago",
    },
    {
      id: 8,
      name: "Mason Heaney",
      message:
        "The service you wrote for cloude updates don't work quite right.",
      archived: false,
      time: "5 days ago",
    },
  ],
  showArchived: false,
  toggleShowArchived: () =>
    set((state) => ({ showArchived: !state.showArchived })),
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  archiveMessage: (id) =>
    set((state) => ({
      messages: state.messages.map((message) =>
        message.id === id ? { ...message, archived: true } : message
      ),
    })),
  deleteMessage: (id) =>
    set((state) => ({
      messages: state.messages.filter((message) => message.id !== id),
    })),
}));
