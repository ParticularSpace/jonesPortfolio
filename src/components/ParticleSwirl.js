import React, { useEffect, useRef } from 'react';

const ParticleSwirl = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];
        const numberOfParticles = 150;

        // Initialize particles to resemble floating raindrops
        const initParticles = () => {
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push({
                    x: Math.random() * canvas.width,         // Random x position
                    y: Math.random() * canvas.height,        // Random y position
                    size: Math.random() * 2 + 1,             // Raindrop size
                    speedY: Math.random() * 0.5 + 0.2,       // Slow downward speed
                    sway: Math.random() * 1 - 0.5,           // Side-to-side sway
                    color: `hsla(${Math.random() * 60 + 240}, 100%, 85%, 0.8)`, // Light neon-like glow
                });
            }
        };

        const updateParticles = () => {
            particles.forEach((particle) => {
                particle.y += particle.speedY; // Move downward
                particle.x += Math.sin(particle.y * 0.05) * particle.sway; // Sway gently side to side

                // Reset particle position to top when it moves out of bounds (for continuous rain)
                if (particle.y > canvas.height) {
                    particle.y = 0;
                    particle.x = Math.random() * canvas.width;
                }
            });
        };

        // Draw particles with neon glow effect
        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = 'lighter';
            particles.forEach((particle) => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.shadowBlur = 8; // Light glow for a soft neon effect
                ctx.shadowColor = particle.color;
                ctx.fill();
            });
        };

        // Animation loop
        const animate = () => {
            updateParticles();
            drawParticles();
            requestAnimationFrame(animate);
        };

        initParticles();
        animate();

        // Adjust canvas size on window resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = []; // Clear and reinitialize particles on resize
            initParticles();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                backgroundColor: '#021223', // Dark, deep blue for nighttime effect
            }}
        />
    );
};

export default ParticleSwirl;
