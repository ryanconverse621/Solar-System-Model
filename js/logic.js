document.addEventListener('DOMContentLoaded', function () {
    const planetImages = document.querySelectorAll('.objects span img'); 
    planetImages.forEach(img => {
        img.addEventListener('click', function() {
            const planetName = img.alt.match(/Picture of (.*)/)[1].toLowerCase();
            updateInfoBox(planetName);
        });
    });
    updateInfoBox("sun");
});

function updateInfoBox(planetName) {
    const planetData = data.find(planet => planet.name.toLowerCase() === planetName);

    const infoBox = document.querySelector('.info');

    infoBox.innerHTML = `
        <a href="${planetData.link}" target="_blank">${planetData.name}</a>
        <hr>
        <img src="${planetData.img}" alt="Picture of ${planetData.name}">
        <div class="facts">
            <h1>Size</h1>
            <h2>${planetData.size}</h2>
            <h1>Distance</h1>
            <h2>${planetData.distance}</h2>
            <h1>Orbit</h1>
            <h2>${planetData.orbit}</h2>
            <h1>Rotation</h1>
            <h2>${planetData.rotation}</h2>
            <h1>Gases</h1>
            <h2>${planetData.gases}</h2>
            <h1>Gravity</h1>
            <h2>${planetData.gravity}</h2>
            <h1>Temperature</h1>
            <h2>${planetData.temperature}</h2>
        </div>
    `;
}
