//aqui irei agendar os dias marcados em uma lista, mas na vida real eles seriam colocados em um banco de dados, pois assim que recarregar a página os agendamentos da lista não existirão mais
var agenda = [];
var pessoaAgenda = {};

function agendar() {
  //pegar os valores das caixas e juntar em uma variável
  var cidade = document.getElementById("cidade").value;
  var dia = document.getElementById("dia").value;
  var estacao = document.getElementById("estacao").value;
  var cidadeDiaNum = cidade + dia + estacao;
  var pessoa = document.getElementById("nome").value;

  //verificar quantas vezes já foram agendados os valores da caixa de seleção
  var soma = 0;
  for (var i = 0; i < agenda.length; i++) {
    if (agenda[i] == cidadeDiaNum) {
      soma++;
    }
  }
  //agendar se ainda não estiver lotado ou avisar que está lotado
  //o número 2 pode ser alterado para qual for a lotação máxima do local
  if (soma >= 2) {
    document.getElementById("resultado").innerHTML =
      "Estação ocupada neste dia e local. Por favor, escolha outro dia, outro escritório e/ou outra estação.";
  } else {
    agenda.push(cidadeDiaNum);
    pessoaAgenda[pessoa] = cidadeDiaNum;
    document.getElementById("resultado").innerHTML =
      "Agendamento realizado com sucesso!";
    console.log(agenda);
    console.log(pessoaAgenda);
  }
}