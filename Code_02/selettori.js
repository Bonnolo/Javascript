document.addEventListener('DOMContentLoaded', function() {
    console.log('loading complete');
    var miobottone = document.querySelector('button');
    miobottone.addEventListener('click', function(event) {
        paragrafo.innerHTML += ' pepega :)';
        event.preventDefault();
        alert('Ho cliccato il mio bottone');
    })
    var paragrafo = document.querySelector('p')
    paragrafo.addEventListener('click', function() {
        paragrafo.innerHTML += ' pepega :)';
        console.log('congrats hai cliccato il paragrafo');
    })
    
    var newElement = document.createElement('div'),
        newElement2 = document.createElement('span');

    newElement.innerHTML = 'Il contenuto del mio nuovo elemento';
    newElement2.innerHTML = 'Il contenuto dell\'altro nuovo elemento';

    paragrafo.appendChild(newElement);
    paragrafo.append(newElement2);
})

/* function miafunzione(mioArgomento) {
    console.log(mioArgomento);
}

function miafunzione2(mioArgomento){
    return mioArgomento
} */