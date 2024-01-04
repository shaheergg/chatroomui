import { useEffect, useState } from "react";
import "./App.css";
import Message from "./components/Message";
import { useStore } from "./store";
function App() {
  const [currMessage, setCurrMessage] = useState("");
  const messages = useStore((state) =>
    state.messages.filter((m) => !m.archived)
  );
  const showArchived = useStore((state) => state.showArchived);
  const toggleShowArchived = useStore((state) => state.toggleShowArchived);
  const addMessage = useStore((state) => state.addMessage);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addMessage({
        id: messages.length + 1,
        name: "Wade Cooper",
        message: currMessage,
        time: "5 days ago",
        archived: false,
      });
      setCurrMessage("");
    }
  };
  return (
    <>
      <div className="flex flex-col text-white">
        <div className="sticky top-0 flex items-center p-4 backdrop-blur-lg bg-neutral-800/50">
          <div>
            <h2 className="flex items-center gap-4 text-4xl font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M24 10.665h-7.018l6.078-3.509l-1.335-2.312l-6.078 3.509l3.508-6.077L16.843.94l-3.508 6.077V0h-2.67v7.018L7.156.94L4.844 2.275l3.509 6.077l-6.078-3.508L.94 7.156l6.078 3.509H0v2.67h7.017L.94 16.844l1.335 2.313l6.077-3.508l-3.509 6.077l2.312 1.335l3.509-6.078V24h2.67v-7.017l3.508 6.077l2.312-1.335l-3.509-6.078l6.078 3.509l1.335-2.313l-6.077-3.508h7.017v-2.67H24zm-12 4.966a3.645 3.645 0 1 1 0-7.29a3.645 3.645 0 0 1 0 7.29z"
                />
              </svg>
              Loom
            </h2>
          </div>
        </div>
        <div className="container py-12 mx-auto">
          <div className="space-y-12">
            <div className="flex items-center justify-between p-4">
              <h2 className="text-4xl font-semibold">Slack</h2>
              <button className="p-2 rounded-full hover:bg-neutral-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </button>
            </div>
            <div className="flex gap-4">
              <div className="w-56 rounded-lg shadow-lg bg-neutral-800"></div>
              <div className="w-full pb-12 rounded-lg shadow-lg bg-neutral-800">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">
                      {showArchived ? "Archived" : "All"} Messages
                    </h2>
                    <button
                      onClick={toggleShowArchived}
                      className="text-sm font-medium underline text-neutral-400"
                    >
                      Archived
                    </button>
                  </div>
                </div>
                {messages.map((message) => (
                  <Message archive message={message} key={message.id} />
                ))}
              </div>
            </div>
            <div className="fixed inline-block min-w-[50%] p-4 text-center transform -translate-x-1/2 border rounded-lg shadow bottom-5 backdrop-blur-lg border-neutral-700 left-1/2">
              <div className="flex items-center w-full">
                <input
                  value={currMessage}
                  onKeyDown={handleKeyDown}
                  onChange={(e) => setCurrMessage(e.target.value)}
                  type="text"
                  className="flex-1 px-4 py-2 rounded-md bg-[#191919] outline-none"
                  placeholder="Type your message here..."
                />

                <button
                  onClick={() => {
                    addMessage({
                      id: messages.length + 1,
                      name: "Wade Cooper",
                      message: currMessage,
                      time: "5 days ago",
                      archived: false,
                    });
                    setCurrMessage("");
                  }}
                  className="px-4 py-2 ml-4 font-semibold rounded-md text-neutral-200 bg-neutral-700 hover:bg-neutral-600"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
