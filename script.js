let randomVar = Math.floor(Math.random()*101);
let chances = 100;
let count = 0;

let btn = document.getElementById('btn');
let resetbtn = document.getElementById('resetbtn');
let message = document.getElementById('message');
message.innerHTML = '';
let notify = document.getElementById('notify');

function win () {
    let score = chances-count;
    message.style.display = 'block';
    message.innerHTML = `Your score = ${score} and The guessed number is ${randomVar}
                ( Click playagain to restart )   `

    
}


btn.addEventListener('click',()=>{
    
    let userInp = document.getElementById('text').value;
    count++;

    if(userInp == randomVar) {
        notify.innerHTML = `Hurray 🥳 You guessed right`;
        win();
        btn.style.display = 'none';
        resetbtn.style.display = 'inline';
        resetbtn.onclick = ()=>{

            randomVar = Math.floor(Math.random()*101);
            btn.style.display = 'inline';
            resetbtn.style.display = 'none';
            document.getElementById('text').value = "";
            count = 0;
            notify.innerHTML = 'Enter a number below';
            message.style.display = 'none';
        }

    }else if(userInp > randomVar){
        notify.innerHTML = `You guessed too high`;
        document.getElementById('text').value = "";

    }else if (userInp < randomVar){
        notify.innerHTML = `You guessed too low`;
        document.getElementById('text').value = "";
        
    }
})

//  console.log(randomVar);