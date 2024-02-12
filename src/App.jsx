import React, { useState } from "react";

export default function App() {
  const [isVisible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && <p>visible</p>}

      <button onClick={toggleVisible}>GYTFYF</button>
    </div>
  );
}
