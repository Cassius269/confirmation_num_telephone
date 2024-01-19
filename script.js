// Déclaration et assignation de la variable regex contenant le regex du numéro de télphone

let regex=/^0(6|7)[0-9]{8}$/;

let num="0712345678";

console.log(regex.test(num))