import React, { useState } from "react";

interface AssetOption {
  label: string;
  value: string;
}

const assets: AssetOption[] = [
  { label: "Bitcoin", value: "BTC" },
  { label: "Ethereum", value: "ETH" },
  { label: "Dogecoin", value: "DOGE" },
  { label: "Algorand", value: "ALGO" },
  { label: "Polkadot", value: "DOT" },
  { label: "Uniswap", value: "UNI" },
  { label: "Compound", value: "COMP" },
];

const TokenSwap: React.FC = () => {
  const [fromAsset, setFromAsset] = useState<string>(assets[0].value);
  const [toAsset, setToAsset] = useState<string>(assets[1].value);
  const [fromAmount, setFromAmount] = useState<any>(0.0);
  const [toAmount, setToAmount] = useState<any>(0.0);

  const handleSwap = () => {
    alert(`Swapping ${fromAmount} ${fromAsset} to ${toAmount} ${toAsset}`);
  };

  return (
    <div className="w-full h-full bg-black flex flex-col items-center mr-10 justify-center mx-auto mt-6">
      <div className="text-white text-lg font-bold ">Swap Tokens</div>
      <div className="p-4 max-w-lg mx-auto bg-gray-800 shadow-md rounded-lg">
        <div className="flex flex-row">
          <div className="flex justify-between flex-row items-center mb-4">
            <div className="flex-1 mr-2">
              <input
                type="number"
                id="fromAmount"
                defaultValue={0}
                onChange={(e) => setFromAmount(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border  p-2.5 bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="flex-1 ml-2">
              <select
                id="fromAsset"
                value={fromAsset}
                onChange={(e) => setFromAsset(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border  p-2.5 bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white rounded-md shadow-sm focus:outline-none  sm:text-sm"
              >
                {assets.map((asset) => (
                  <option key={asset.value} value={asset.value}>
                    {asset.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4 ml-5">
            <div className="flex-1 mr-2">
              <input
                type="number"
                id="toAmount"
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border  p-2.5 bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="flex-1 ml-2">
              <select
                id="toAsset"
                value={toAsset}
                onChange={(e) => setToAsset(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border  p-2.5 bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white rounded-md shadow-sm focus:outline-none  sm:text-sm"
              >
                {assets.map((asset) => (
                  <option key={asset.value} value={asset.value}>
                    {asset.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={handleSwap}
        className="  text-white py-2 px-4 mt-4 rounded-md shadow-sm bg-light-button mx-auto"
      >
        Swap Tokens
      </button>
    </div>
  );
};

export default TokenSwap;
