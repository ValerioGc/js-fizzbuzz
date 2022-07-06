const submit = document.getElementById('submit');
submit.addEventListener('click', 
    function() {
        document.getElementById('page').className = "show";
        const container = document.getElementById('page');
        const user_input = parseInt(document.getElementById('number_cell').value); 
        console.log(typeof user_input);
        console.log(user_input);
        for (let i = 0; i <= user_input; i++) {
            const containerInner = document.createElement('div');
            containerInner.append(i);
            containerInner.className = 'box';
            container.append(containerInner);
        }
});