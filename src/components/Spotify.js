import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSpotify } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Spotify = () => {
    const [topTracks, setTopTracks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTopTracks = async () => {
            try {
                const response = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_SPOTIFY_API_KEY}`,
                    },
                });
                setTopTracks(response.data.items);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Failed to load top tracks. Please check your API key or authentication.');
                setLoading(false);
            }
        };
        fetchTopTracks();
    }, []);

    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <FaSpotify className="mr-2" /> Top Tracks
            </h2>

            {loading ? (
                <p className="text-gray-300">Loading...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {topTracks.map((track, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gray-700 p-4 rounded-lg shadow-lg"
                        >
                            <img
                                src={track.album.images[0].url}
                                alt={track.name}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                            <h3 className="text-white font-bold mt-2">{track.name}</h3>
                            <p className="text-gray-300">{track.artists[0].name}</p>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Spotify;
