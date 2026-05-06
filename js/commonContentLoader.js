async function loadContent(sourceFile, targetElementId) {
    try {
        const response = await fetch(sourceFile);
        if (!response.ok) {
            throw new Error(`Could not load content from ${sourceFile}: ${response.statusText}`);
        }
        const content = await response.text();
        document.getElementById(targetElementId).innerHTML = content;
    } catch (error) {
        console.error(error);
        document.getElementById(targetElementId).innerHTML = `<p>Error loading content: ${error.message}</p>`;
    }
};

window.addEventListener('DOMContentLoaded', () => {
    loadContent('nav.html', 'navID');
    loadContent('dates.html', 'datesID');
    loadContent('footer.html', 'footerID');
});