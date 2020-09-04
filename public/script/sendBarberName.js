function abrePageBarber(buttonPosition){
    let buttonClicked = buttonElements.item(buttonPosition); // estou pegando o botão na posição clicada.
    let buttonClickedValue = buttonClicked.value; // pegando o valor que é o nome do barbeiro
    
    window.location.href = '/page-registerSchedule'+'?barber='+buttonClickedValue; //Enviando o caminho com o nome do barbeiro via get.
}

