//! Esercizio 1: Crea (inventa) una lista di inidirizzi mail autorizzati: Chiedi all’utente la sua email,
//! controlla che sia nella lista di chi può accedere,
//! stampa in console un messaggio appropriato sull’esito del controllo. ("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è);

// 1.creo una lista di indirizzi mail autorizzati
const emails = ['sofia@gmail.com', 'sara@gmail.com', 'klaus@gmail.com', 'diego@gmail.com', 'pepito@gmail.com'];
console.log(emails)

// 2. prendo l'elemento per scrivere in pagina il risultato
const res = document.getElementById('result')


//2. mi metto in ascolto dell'evento click del button
const btn = document.getElementById('btn')
btn.addEventListener('click', function(){

    // 3.chiedo all'utente la sua mail
    const userEmail = document.getElementById('email').value
    console.log(userEmail)

    let result = false
    // 4. controllo che la sua mail sia autorizzata ad accedere
    for( let i = 0; i < emails.length; i++ ){
        if(emails[i] === userEmail){
            result = true
        } 
    }
    // 5. se la mail è autorizzata le dò il Benvenuto
    if(result){
        console.log('Benvenuto')
        res.className = 'text-success pt-5'
        res.innerText = 'Benvenuto 😊'
        // 6. se la mail non è autorizzata le dico Spiacenti
    } else{
        console.log ('Spiacenti')
        res.className = 'text-danger pt-5'
        res.innerText = 'Spiacenti 😔'
    }
})


//! Gioco dei dadi
//! Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//! Stabilisci il vincitore, in base a chi fa il punteggio più alto e stampa  in console il risultato (ossia se ha vinto il computer o il player)
// 1. prendo gli elementi che mi servono per stampare in pagina
const playerNUM = document.getElementById('PlayerNUM')
const computerNUM = document.getElementById('ComputerNUM')
const score = document.getElementById('Score')
document.getElementById('Play').addEventListener('click', function(){

// 2.genero un numero random da 1 a 6 sia per l'utente che per il Pc
    //* Math.floor(Math.random() * (max - min)) + min;
    const randomNUsr =  Math.floor(Math.random() * (6 - 1)) +  1
    const randomNPc =  Math.floor(Math.random() * (6 - 1)) +  1
    console.log('randomNUsr:',randomNUsr,'randomNPc:',randomNPc)

// 3.stampo in pagina
    playerNUM.innerText = randomNUsr
    computerNUM.innerText = randomNPc

//4. stabilisco se il giocatore vince/perde/pareggia
    if(randomNUsr > randomNPc){
        console.log('Vince il giocatore')
        score.innerText = 'Vince il Player'
    } else if(randomNUsr === randomNPc){
        console.log('Pareggio')
        score.innerText = 'Pareggio'
    }else{
        console.log('Vince il Pc')
        score.innerText = 'Vince il Computer'
        
    }
})
// 5.mi metto in ascolta sul button per generare i numeri e per resettare 
document.getElementById('Reset').addEventListener('click',function(){
    playerNUM.innerText = ''
    computerNUM.innerText = ''
    score.innerText = ''
})







