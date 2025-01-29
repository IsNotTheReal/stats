const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta para generar una imagen SVG con los datos del usuario
app.get("/card/:username", async (req, res) => {
    const { username } = req.params;

    try {
        const { data } = await axios.get(`https://api.github.com/users/${username}`);

        // Calcular la antigüedad de la cuenta en años
        const createdAt = new Date(data.created_at);
        const currentYear = new Date().getFullYear();
        const accountAge = currentYear - createdAt.getFullYear();

        const svg = `
<svg width="500" height="220" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#0D1117; stop-opacity:1" />
            <stop offset="100%" style="stop-color:#161B22; stop-opacity:1" />
        </linearGradient>
        <style>
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            text {
                font-family: 'Segoe UI', Roboto, sans-serif;
                animation: fadeIn 0.8s ease-in-out;
                text-anchor: middle;
                dominant-baseline: middle;
            }
            .label {
                fill: white;
                font-size: 20px;
                font-weight: bold;
            }
            .data {
                fill: #8B949E;
                font-size: 20px;
                font-weight: bold;
            }
        </style>
    </defs>

    <!-- Background and Border -->
    <rect x="0" y="0" width="100%" height="100%" rx="45" ry="45" fill="url(#grad)" />

    <!-- Stats with part white and part gray text -->
    <text x="50%" y="35%">
        <tspan class="label">📅 Account Age: </tspan>
        <tspan class="data">${accountAge} years</tspan>
    </text>
    
    <text x="50%" y="50%">
        <tspan class="label">📦 Repositories: </tspan>
        <tspan class="data">${data.public_repos}</tspan>
    </text>
    
    <text x="50%" y="65%">
        <tspan class="label">👥 Followers: </tspan>
        <tspan class="data">${data.followers}</tspan>
        <tspan class="label"> | 🔗 Following: </tspan>
        <tspan class="data">${data.following}</tspan>
    </text>
</svg>

        `;

        res.setHeader("Content-Type", "image/svg+xml");
        res.send(svg);
    } catch (error) {
        res.status(500).send("Error generating the card.");
    }
});

// Iniciar servidor
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
