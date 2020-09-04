function nameReturn(){
    var test = window.location.search; // pegando o caminho do barbeiro via get ('?barber=Diogenes%20Woods');
    let nameComplet = test.split('='); // Aqui estou trasnformando o array ['?barber', ' Diogenes%20Woods' ]
    let nameOffSpace = nameComplet[1].split('%20'); // Aqui estou transformando o array ['Diogenes', 'Woods']
    let nameBarber = nameOffSpace[0] + ' ' + nameOffSpace[1]; //Aqui estou unindo as duas palavras Diogenes + Woods com o espaço
    return(nameBarber);
}

// Query of elements
const legendElement = document.querySelector('div.top-fieldset legend');
const nameProffisionalElement = document.querySelector('#name-profisional');

//Criation of Elements
const textTagProfisional = document.createTextNode('Profissional: '+nameReturn());
const textLegendElement = document.createTextNode('Barbeiro: ' + nameReturn());

// atribuindo o texto nos elements
legendElement.appendChild(textLegendElement);
nameProffisionalElement.appendChild(textTagProfisional);
