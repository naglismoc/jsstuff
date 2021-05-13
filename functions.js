





console.log([...Array(130)].map(() => Math.random().toString(36)[2]).join(''));

function rndStr(length) {
    let result           = [];
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   return result.join(',');
}

HTML = "";
for (let i = 0; i < 10; i++) {
    if(i%2==0){
    HTML += `<p class="pav"> ${i} </p>`;
    }
}

// document.getElementById('sq').innerHTML = HTML;

function h1(text) {
    return "<h1>" + text + "</h1>";
}
function p(text) {
    return "<p>" + text + "</p>";
}

let pasisveikinimas = "labukas";

// document.getElementById('sq').innerHTML = h1(pasisveikinimas);



function numbersTogether(){
    let HTML = "";
    let nums = "";
    let wasNum = false;
    let randomTekstas = [...Array(30)].map(() => Math.random().toString(36)[2]).join('');
    for (let i = 0; i < randomTekstas.length; i++) {
        let symbol = randomTekstas[i];
        if(isFinite(symbol)){
            wasNum = true;
            nums+=symbol;
        }else{
            if(wasNum){
                HTML += h1(nums);
                wasNum = false;
                nums = "";
            }
            HTML += p(symbol); 
        }      
    }
    return HTML;
}
document.getElementById('sq').innerHTML = numbersTogether();
console.log(isFinite("17"));