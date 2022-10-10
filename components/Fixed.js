import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Fixed = () => {
  /* const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ?  createPortal(
    <div className="fixed w-full h-screen inset-0">
      <div id="animDiv1" className="animDiv1 absolute inset-0 z-10 w-full h-screen bg-blue-500 scale-[30%]"></div>
      <div id="animDiv2" className="animDiv2 absolute inset-0 z-20 w-full h-screen bg-red-500 scale-0"></div>
    </div>,
    document.body
  ) : null; */
  return (
    <div className="fixed w-full h-screen inset-0">
      <div id="animDiv1" className="animDiv1 absolute inset-0 z-10 w-full h-screen bg-blue-500 scale-[30%]"></div>
      <div id="animDiv2" className="animDiv2 absolute inset-0 z-20 w-full h-screen bg-red-500 scale-0"></div>
    </div>
  );
};

export default Fixed;
