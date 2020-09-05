# BarberWoods
Sistema de agendamento de horários para clientes da barbearia Barber Woods

# Sobre o projeto
<p> Projeto com o objetivo de auxiliar uma barbearia a ter um maior controle nos horários dos seus clientes. 
Um escopo simples e direto, e de poucos passos para a melhor interação com o usuário. </p> 

## Desafios de escopo
  - <s>Guardar nome do barbeiro escolhido na páginia (/page-barber) e passar para a página de cadastro de horário (/page-registerSchedule);</s>  <i> Resolvido </i>
  - <s> Recuperar o nome do barbeiro e imprimir no front-end na página /page-registerSchedule;</s> <i> Resolvido </i>
  - <s> Manipular calendário em JavaScript e pegar a data selecionada para envio ao banco de dados;</s> <i> Resolvido </i>
  - Retirar o horário reservado da lista de horários disponíveis na página /page-registerSchedule; 
  - Inverter data para padrão Brasil e imprimir na page-clients (ainda para ser criada); 
  - Retirar do banco de dados todos os clientes cadastrados e colocar na page-clients (ainda para ser criada); 
  - Criar filtro para a page-clients, de horário, dia da semana e mês; 
  
## Soluções Encontradas (respectivamente)
 - Foi utilizado a propriedade <code> item() </code> do javascript para pegar o elemento correspondente a posição enviada pelo clique do botão. 
       Com isso foi possível usar a propriedade <code> value </code> e extrair o valor (que era o nome do barbeiro, cadastrado no db). Após isso 
       foi possível enviar utilizando <code> window.location.href = '/page-registerSchedule' + '?barber='+ nomedoBarbeiro;</code> via get. 
 - Para recuperar o dato enviado via get par a página, utilizei a propriedade: <code> window.location.search </code>, que recupera a string
       a partir do '?'. Assim fui apenas manipulando essa string com a propriedade <code> split()</code> até chegar no nome do barbeiro puro. 
       Para coloca-lo em tela, selecionei a tag que queria colocar com o <code> querySelector() </code> e criei um novo texto com o <code> createTexteNode ()</code>
       passando como parâmetro o nome do barberio. Por fim, foi só atribuir esse valor na tag com a propriedade <code> appendChild() </code>, tendo como Pai a tag 
       escolhida e como filho o texto criado. 
 - Para manipular o calendário, foi preciso entender como o calendário funcionava e aprender sobre as propriedade <code> date() </code>. Assim pude extrair
       a data selecionada e coloca-la em um input com 'display: none', para assim ser possível cadastrar no meu banco de dados. Utilizei ainda o <code> slice() </code>
       para poder pegar apenas a parte da string que desejo da data. 
    
## Links úteis 
   - <a href = "barberwoods.vercel.app" > Sistema em funcionamento </a>  <br>
   - <a href = "https://developer.mozilla.org/pt-BR/docs/Web/API/Location/search" > Sobre Location.search </a> <br>
   - <a href = "https://developer.mozilla.org/pt-BR/docs/Web/API/Location/href" > Sobre Location.href </a>  <br>
   - <a href = "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split" > Sobre split() </a> <br>
   - <a href = "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" > Sobre slice() </a> <br>
   - <a href = "https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild" > Sobre appendChild() </a><br>
   - <a href = "https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode" > Sobre createTexteNode() </a> <br>
   
   
