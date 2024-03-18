import React, { useState } from 'react';
import Confetti from 'react-confetti';

const ConfettiButton = ({ active, onClick }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleButtonClick = () => {
    setShowConfetti(true);
    onClick();

    setTimeout(() => {
      setShowConfetti(false);
    }, 5000); // 5 seconds timeout
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Sold</button>
      {active && showConfetti && <Confetti />}
    </div>
  );
};

export default ConfettiButton;
