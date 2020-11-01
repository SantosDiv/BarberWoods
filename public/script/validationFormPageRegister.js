// select elements of DOM
var buttonE = document.querySelector('#button');
var inputsElements = document.querySelectorAll('input');
var array = [];
//desabilitando o button
buttonE.disabled = true;

//Gravando inputs no array
for(i of inputsElements){
    array.push(i.name);
}

//Pegando os inputs e Escutando os eventos de preenchimento 
inputsElements.forEach(input => {
    input.addEventListener('input', function (){
        if(this.value == ''){
            array.push(this.name);
        }else{
            if(array.indexOf(this.name) > -1){
                array.splice(this.name, 1);
            }
        }

        //Fazendo a mudança de estado do Button, a partir do tamanho do Array.
        if(array.length == 0){
            buttonE.disabled = false;
            buttonE.classList.remove('hidden');
        }else{
            buttonE.disabled = true;
            buttonE.classList.add('hidden');
        }
    });
});


//COLANDO UMA BORDA VERMELHA QUANDO O INPUT FICA VAZIO, DEPOIS DE PREENCHIDO E APAGADO.
for(var input of inputsElements){
    input.addEventListener('input', (input) => {
        if(input.target.value === ""){ //O target é o 'alvo', é os parametros que tem dentro do input. Um deles é o value.
            input.target.setAttribute('class', 'border-vermelho');
        }else{
            input.target.setAttribute('class', '');
            return true;
        }
    });
}


//create
var imgElement = document.createElement('img');
var textButton = document.createTextNode('Cadastrar');
//Atribute
imgElement.setAttribute('src', '/image/Dual-Ring-1s-200px.svg');
buttonE.appendChild(textButton);

//events
buttonE.addEventListener('click', load);
function load (){
    buttonE.removeChild(textButton);
    buttonE.appendChild(imgElement);
}