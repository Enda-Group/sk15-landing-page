import { useState, useEffect } from "react";

const RandomCountUpCounter = () => {
  const [count, setCount] = useState(1533483);
  const [isClient, setIsClient] = useState(false); // Track if we are on the client side

  useEffect(() => {
    // Set isClient to true after the initial render to avoid hydration mismatch
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return; // Skip interval setup on server

    const intervalId = setInterval(() => {
      const random = Math.random() * 11;
      const increment2 = Math.floor(random - 8);
      const increment = increment2 < 0 ? 0 : increment2;
      setCount((prevCount) => prevCount + increment);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [isClient]);

  // Render nothing until we are on the client to avoid hydration mismatch
  if (!isClient) return null;

  return (
    <div style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      textAlign:"center"
    }}>
      <h1>Count: {count.toLocaleString()}</h1>
    </div>
  );
};

export default RandomCountUpCounter;
