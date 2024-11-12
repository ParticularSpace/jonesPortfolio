import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { createChart } from 'lightweight-charts';
import { motion } from 'framer-motion';

function Xrp() {
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);
  const chartContainerRef = useRef();
  const chartRef = useRef();

  useEffect(() => {
    const fetchXrpPrice = async () => {
      try {
        const response = await axios.get(
          `https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD&api_key=${process.env.REACT_APP_CRYPTO_API_KEY}`
        );
        setPrice(response.data.USD);
      } catch (err) {
        setError("Failed to fetch price data. Try again later.");
        console.error(err);
      }
    };

    fetchXrpPrice();
    const interval = setInterval(fetchXrpPrice, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        const response = await axios.get(
          `https://min-api.cryptocompare.com/data/v2/histohour?fsym=XRP&tsym=USD&limit=168&api_key=${process.env.REACT_APP_CRYPTO_API_KEY}`
        );

        const historicalData = response.data.Data.Data.map((point) => ({
          time: point.time,
          open: point.open,
          high: point.high,
          low: point.low,
          close: point.close,
        }));

        if (!chartRef.current && chartContainerRef.current) {
          chartRef.current = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: 300,
            layout: {
              backgroundColor: 'black',
              textColor: '#C084FC',
            },
            grid: {
              vertLines: { color: '#444' },
              horzLines: { color: '#444' },
            },
            crosshair: {
              mode: 1,
            },
            priceScale: {
              borderColor: '#C084FC',
            },
            timeScale: {
              borderColor: '#C084FC',
            },
          });

          const candleSeries = chartRef.current.addCandlestickSeries({
            upColor: '#00FF00',
            downColor: '#FF497A',
            borderUpColor: '#00FF00',
            borderDownColor: '#FF497A',
            wickUpColor: '#00FF00',
            wickDownColor: '#FF497A',
          });
          candleSeries.setData(historicalData);
        }
      } catch (err) {
        console.error("Failed to fetch historical data:", err);
      }
    };

    fetchHistoricalData();

    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

      {/* Chart Container with Dynamic Height */}
      <div ref={chartContainerRef} className="mt-6 bg-gray-800 rounded-lg overflow-hidden"></div>

      <div className="flex justify-between items-center mt-6">
        <span className="text-pink-500 text-sm">Updated every 60 seconds</span>
        <a
          href="https://www.cryptocompare.com/"
          className="text-cyan-500 hover:text-cyan-300 text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data by CryptoCompare
        </a>
      </div>
    </div>
  );
}

export default Xrp;
