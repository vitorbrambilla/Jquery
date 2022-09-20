// $("#books_list tbody").on("click", "tr", function (e) {

//   $(e.delegateTarget).find('tr').removeClass("trselected");

//   $(this).addClass("trselected");
// });

// $("#btn_add_book").on("click", function () {
//   let tr = `
//     <tr>
//         <td>Til</td>
//         <td>José de Alencar</td>
//     </tr>
//   `;

//   $("#books_list tbody").append(tr);
// });

// Parando a propagação de eventos
// $("#form_login").on("change", "[name]", function() {
//   alert(`Elemento mudou. Seu valor: ${$(this).val()}`);
// });

// $("#form_login [name=bio]").on("change", function(event) {
//   event.stopPropagation();

//   $(this).css("background", "red");
// });
