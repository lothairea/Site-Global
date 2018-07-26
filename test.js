let age = 20;
let bateau = 'Intercepteur';
console.log("age");
// if(age >= 18) {
// 	alert("Tu es majeur")
// }else{
// 	alert("tu n'es pas majeur")
// }


console.log($('.test'));

$('.test').text("Test de jquery");
$('.test').append(bateau);
$('.test').click(e => {
	$('body').css("color","red");
})
