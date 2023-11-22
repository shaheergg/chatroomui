import React from "react";
import { Menu } from "@headlessui/react";
import { motion } from "framer-motion";

function Message({ message, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      exit={{ opacity: 0, x: 50 }}
      key={idx}
      className="flex items-center gap-4 p-4 transition-all cursor-pointer group hover:bg-neutral-700"
    >
      <div>
        <img
          src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${message.name}`}
          alt="avatar"
          className="object-cover w-12 h-12 bg-[#191919] rounded-full"
        />
      </div>
      <div className="w-full space-y-2">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-xl font-semibold">
            {message.name}{" "}
            <span className="text-sm font-medium text-neutral-400">
              at 4:40 PM
            </span>{" "}
          </h2>
          <span className="p-2 transition-all scale-0 rounded-full hover:bg-neutral-600 group-hover:scale-100">
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
          </span>
        </div>
        <p className="text-lg">{message.message}</p>

        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-neutral-400">
            {message.time}
          </span>

          <button className="text-sm font-medium underline text-neutral-400">
            Delete
          </button>
          <button className="text-sm font-medium underline text-neutral-400">
            Reply
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Message;
