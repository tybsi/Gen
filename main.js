document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game-container');

    const games = [
        { name: 'Game 1', url: 'https://example.com/game1.swf' },
        { name: 'Game 2', url: 'https://example.com/game2.swf' },
        // Add more games with their respective URLs
    ];

    games.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameItem.innerHTML = `
            <h3>${game.name}</h3>
            <iframe
                width="150"
                height="150"
                frameborder="0"
                src="${game.url}"
            ></iframe>
        `;
        gameItem.addEventListener('click', () => loadGame(game.url));
        gameContainer.appendChild(gameItem);
    });

    function loadGame(url) {
        const iframe = document.createElement('iframe');
        iframe.width = '800';
        iframe.height = '600';
        iframe.frameBorder = '0';
        iframe.src = url;

        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.appendChild(iframe);

        document.body.appendChild(modal);

        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    }
});
