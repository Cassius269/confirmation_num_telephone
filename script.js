// Déclaration et assignation de la variable regex contenant le regex du numéro de télphone

let regex=/^0(6|7)[0-9]{8}$/;
/* Test du regex 

let num="0712345678";

console.log(regex.test(num));
*/

// Sélectionner l'input de numéro de téléphone

let inputDuTelephone=document.querySelector("#tel");

inputDuTelephone.addEventListener("input",()=>{
    let iconeDalerteNum=document.querySelector("#form_imageIndicateurTel");

    if(regex.test(inputDuTelephone.value)){ // dans le cas où le motif de l'expression regulière correspond à la saise utilisateur
        console.log("numero ok");// test
        iconeDalerteNum.style.fill="green";
        iconeDalerteNum.style.visibility="visible";
    }
    else{ // dans le cas où le motif de l'expression regulière ne correspond pas à la saise utilisateur
        console.log("numero pas ok");// test
        iconeDalerteNum.style.fill="red";
        iconeDalerteNum.style.visibility="visible";
    }
})

