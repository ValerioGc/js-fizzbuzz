// Definisco variabili bottoni
const submit = document.getElementById('submit');
const refresh = document.getElementById('refresh');
// Event Listner bottone Annulla
refresh.addEventListener('click',
    function() {
        location.reload()
    });
// Event Listner bottone genera
submit.addEventListener('click', 
    function() {
        const container = document.getElementById('page');
        const user_input = parseInt(document.getElementById('number_cell').value); 
        if ((isNaN(user_input)) || (user_input == '')){
            alert('Attenzione! Dati inseriti non corretti')
            location.reload();
        }
        else if (user_input > 10000) {
            alert('Attenzione! Il numero massimo consentito di celle è 10.000')
            location.reload();
        }
        else {
            document.getElementById('page').className = "show";
            console.log(` Il tipo di dato inserito è ` + typeof(user_input) + ' ' + `Il numero scelto è ${user_input}`);
            console.log(user_input);
            for (let i = 1; i <= user_input; i++) {
                const containerInner = document.createElement('div');
                containerInner.append(i);
                if ((i % 3 == 0) && (i % 5 == 0)) {
                    containerInner.className = 'box fizzbuzz';
                    containerInner.innerHTML = 'FizzBuzz';
                }
                else if (i % 3 == 0) {
                    containerInner.className = 'box fizz';
                    containerInner.innerHTML = 'Fizz';
                }
                else if (i % 5 == 0) {
                    containerInner.className = 'box buzz';
                    containerInner.innerHTML = 'Buzz';
                }
                else {
                    containerInner.className = 'box';
                }
                container.append(containerInner);
            }
        }
});

