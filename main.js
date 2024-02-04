document.addEventListener('DOMContentLoaded', () => {
    const embedForm = document.getElementById('embed-form');
    const urlInput = document.getElementById('url-input');
    const embeddedContent = document.getElementById('embedded-content');

    function embedUrl() {
        const url = urlInput.value.trim();
        if (url === '') {
            alert('Please enter a valid URL.');
            return;
        }

        // Create an iframe element and set its attributes
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.classList.add('embedded-item');

        // Append the iframe to the embedded content container
        embeddedContent.appendChild(iframe);

        // Clear the input field after embedding
        urlInput.value = '';
    }

    // Expose the embedUrl function to the global scope for testing purposes
    window.embedUrl = embedUrl;
});
