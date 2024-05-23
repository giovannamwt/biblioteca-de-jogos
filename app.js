const darkModeToggle = document.getElementById('darkMode');

darkModeToggle.addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('page-dark');
    darkModeToggle.classList.toggle('light-mode');
    const turnoText = darkModeToggle.textContent;
    const newText = turnoText === 'Dia' ? 'Noite' : 'Dia';
    darkModeToggle.textContent = newText;
});






const cardGame = document.querySelector('#cardGame')
const adc = document.querySelector('#formContainer')

adc.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const imgSrc = document.querySelector('#imgSrc').value;

    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.innerHTML = `<h2>${title}</h2> <img src="${imgSrc}" alt="">`;

    const containerGames = document.querySelector('#containerGames');
    containerGames.appendChild(newCard);

    document.querySelector('#title').value = '';
    document.querySelector('#imgSrc').value = '';
});
