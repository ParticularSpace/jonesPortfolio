import React, { useEffect, useRef } from 'react';

const ParticleSwirl = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];
        const numberOfParticles = 50;

        // Initialize particles
        const initParticles = () => {
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push({
                    x: Math.random() * canvas.width, // Initial x position
                    y: Math.random() * canvas.height, // Initial y position
                    size: Math.random() * 5 + 1, // Size
                    speed: Math.random() * 2 - 1, // Speed
                    angle: Math.random() * 360, // Movement angle
                });
            }
        };

        const updateParticles = () => {
            particles.forEach(particle => {
                particle.x += Math.cos(particle.angle) * particle.speed;
                particle.y += Math.sin(particle.angle) * particle.speed;

                if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
                    particle.x = Math.random() * canvas.width;
                    particle.y = Math.random() * canvas.height;
                }
            });
        };

        // Draw particles
        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = '#ffffff';
                ctx.fill();
            });
        };

        // loop
        const animate = () => {
            updateParticles();
            drawParticles();
            requestAnimationFrame(animate);
        };

        initParticles();
        animate();
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default ParticleSwirl;
