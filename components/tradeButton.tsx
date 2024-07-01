import React from "react";

interface TradeButtonProps {}

const TradeButton: React.FC<TradeButtonProps> = () => {
  return (
    <button
      className="bg-light-button_success text-white px-2  rounded my-2"
      onClick={() => {}}
    >
      Trade
    </button>
  );
};

export default TradeButton;
