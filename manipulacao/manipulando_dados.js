// Retornando ou definindo o dado de um elemento
// $(".cars_list li:first").data("ano", "1990");

// Removendo dados de um elemento
// $(".cars_list li:first").removeData("pais");

$(".cars_list li").click(function () {
  console.log(`Esse carro é do ano de ${$(this).data("ano")}`);
});
