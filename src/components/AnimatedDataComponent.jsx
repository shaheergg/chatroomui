// Import necessary libraries
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// Your API endpoint
const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

const fetchData = async () => {
  const response = await fetch(API_ENDPOINT);
  const data = await response.json();
  return data;
};

const AnimatedDataComponent = () => {
  const [data, setData] = useState(null);
  const controls = useAnimation();

  useEffect(() => {
    const fetchDataAndAnimate = async () => {
      const result = await fetchData();
      setData(result);

      // Animate the component
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    };

    fetchDataAndAnimate();
  }, [controls]);

  // Initial animation values
  const initialVariants = { opacity: 0, y: 50 };

  return (
    <motion.div
      className="space-y-2"
      initial={initialVariants}
      animate={controls}
    >
      {data ? (
        // Render your data here
        data.map((item) => {
          return (
            <div className="px-2 py-4 border rounded-lg">
              <h1 className="text-xl font-semibold">{item.title}</h1>
              <p>{item.body}</p>
            </div>
          );
        })
      ) : (
        // You can add a loading spinner or message here
        <p>Loading...</p>
      )}
    </motion.div>
  );
};

export default AnimatedDataComponent;
