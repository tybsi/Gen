document.addEventListener('DOMContentLoaded', () => {
    const gameList = document.getElementById('game-list');
    const gameContainer = document.getElementById('game-container');

    const games = [
        { name: 'Slope', script: 'slope.js' },
        // Add more games as needed
    ];

    // Dynamically create game links in the navigation
    games.forEach((game, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${game.name.toLowerCase()}`;
        a.textContent = game.name;
        a.addEventListener('click', () => loadGame(game.script));
        li.appendChild(a);
        gameList.appendChild(li);
    });

    // Function to dynamically load game content
    function loadGame(script) {
        const gameContents = document.querySelectorAll('.game-content');
        gameContents.forEach(content => content.style.display = 'none');

        const scriptTag = document.querySelector(`script[src="${script}"]`);
        if (scriptTag) {
            scriptTag.remove();
        }

        const newScript = document.createElement('script');
        newScript.src = script;
        document.body.appendChild(newScript);
    }
});
