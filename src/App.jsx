import { useState } from "react";
import "./App.css";
import Message from "./components/Message";
function App() {
  const [currMessage, setCurrMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Wade Cooper",
      message:
        "The service you wrote for cloude updates don't work quite right.",
      time: "5 days ago",
    },
    {
      id: 2,
      name: "Arlene Mccoy",
      message:
        "The service you wrote for cloude updates don't work quite right.",
      time: "5 days ago",
    },
    {
      id: 3,
      name: "Devon Webb",
      message:
        "The service you wrote for cloude updates don't work quite right.",
      time: "5 days ago",
    },
    {
      id: 4,
      name: "Tom Cook",
      message:
        "The service you wrote for cloude updates don't work quite right.",
      time: "5 days ago",
    },
    {
      id: 5,
      name: "Tanya Fox",
      message:
        "The service you wrote for cloude updates don't work quite right.",
      time: "5 days ago",
    },
    {
      id: 6,
      name: "Hellen Schmidt",
      message:
        "The service you wrote for cloude updates don't work quite right.",
      time: "5 days ago",
    },
    {
      id: 7,
      name: "Caroline Schultz",
      message:
        "The service you wrote for cloude updates don't work quite right.",
      time: "5 days ago",
    },
    {
      id: 8,
      name: "Mason Heaney",
      message:
        "The service you wrote for cloude updates don't work quite right.",
      time: "5 days ago",
    },
  ]);
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
              <h2 className="text-4xl font-semibold">Indusapps workspace.</h2>
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
            <div className="w-full pb-12 rounded-lg shadow-lg bg-neutral-800">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">All Messages</h2>
                  <button className="text-sm font-medium underline text-neutral-400">
                    Archived
                  </button>
                </div>
              </div>
              {messages.map((message, idx) => {
                return <Message message={message} idx={idx} key={idx} />;
              })}
            </div>
            <div className="fixed inline-block min-w-[50%] p-4 text-center transform -translate-x-1/2 border rounded-lg shadow bottom-5 backdrop-blur-lg border-neutral-700 left-1/2">
              <div className="flex items-center w-full">
                <input
                  value={currMessage}
                  onChange={(e) => setCurrMessage(e.target.value)}
                  type="text"
                  className="flex-1 px-4 py-2 rounded-md bg-[#191919] outline-none"
                  placeholder="Type your message here..."
                />

                <button
                  onClick={() => {
                    setMessages([
                      {
                        id: 9,
                        name: "Gordon Ramsey",
                        message: currMessage,
                        time: "5 days ago",
                      },
                      ...messages,
                    ]);
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
