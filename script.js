document.getElementById("search-bar").addEventListener("input", function() {
    let query = this.value.toLowerCase();
    filterStats(query);
});

function filterStats(query) {
    const rows = document.querySelectorAll("#team-stats tbody tr");
    rows.forEach(row => {
        const teamName = row.cells[0].textContent.toLowerCase();
        if (teamName.includes(query)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

// Función para cargar las estadísticas (puedes reemplazar esto con una API)
function loadStats() {
    const stats = [
        { team: "Equipo A", games: 10, wins: 6, draws: 2, losses: 2 },
        { team: "Equipo B", games: 10, wins: 5, draws: 3, losses: 2 },
        { team: "Equipo C", games: 10, wins: 4, draws: 4, losses: 2 }
    ];

    const tableBody = document.querySelector("#team-stats tbody");
    stats.forEach(stat => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${stat.team}</td>
            <td>${stat.games}</td>
            <td>${stat.wins}</td>
            <td>${stat.draws}</td>
            <td>${stat.losses}</td>
        `;
        tableBody.appendChild(row);
    });
}

loadStats();

