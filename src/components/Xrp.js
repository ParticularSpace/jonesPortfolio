import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

function Xrp() {
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchXrpPrice = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd');
        setPrice(response.data.ripple.usd);
      } catch (err) {
        setError("Failed to fetch price data. Try again later.");
        console.error(err);
      }
    };

    fetchXrpPrice();
    const interval = setInterval(fetchXrpPrice, 60000); // Refresh every 60 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-gray-100 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-cyan-400 mb-4 text-center">XRP Price Tracker</h2>

      <motion.div
        className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        {price !== null ? (
          <p className="text-4xl font-bold text-green-400">
            ${price.toFixed(2)}
          </p>
        ) : (
          <p className="text-gray-400">{error || "Loading price..."}</p>
        )}
      </motion.div>

      <div className="flex justify-between items-center mt-6">
        <span className="text-pink-500 text-sm">Updated every 60 seconds</span>
        <a
          href="https://www.coingecko.com/"
          className="text-cyan-500 hover:text-cyan-300 text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data by CoinGecko
        </a>
      </div>
    </div>
  );
}

export default Xrp;
