import { useState, useEffect } from "react";
import Outlet from "./Outlet";

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
   <div>
    <div  className="grid grid-cols-2 justify-center items-center">
    {/* <div style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      textAlign:"center",
    }} > */}
      <div className='font-poppins font-bold text-[1.2rem] text-right'> {count.toLocaleString()} </div>
        <div className="font-poppins text-[0.6rem]">Telekung Sold</div>
        {/* </div> */}
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
     
  );
};

export default RandomCountUpCounter;
