function veriForm(){
    console.log("Traitement du formulaire...")
    veriMail();
    verifPassword();
    verifCheckBox();
}

function verifCheckBox(){
    let checkedHomme = document.getElementById("homme").checked;
    let checkedFemme = document.getElementById("femme").checked;
    let checkedAutre = document.getElementById("autre").checked;
    if ( checkedHomme+checkedFemme+checkedAutre === 0){
        alert("Veuillez cocher une case")
    }else if ( checkedHomme+checkedFemme+checkedAutre > 1){
        alert("Veuillez cocher une seule case")
    }else{
        console.log("Une case est coché")
    }
}

function verifPassword(){
    let password = document.getElementById("password").value;
    let taillePassword = password.length;
    let testPassword = 0
    if (taillePassword < 5){
        alert("Le mot de passe est trop court")
        return console.error("Password trop court");
    }
    for (let i=0; i < taillePassword; i++) {
        for (let j=0; j < 10; j++)
            if (password[i] == j){
                testPassword+=1
            }
    }
    if (testPassword < 1){
        alert("Le mot de passe dois comporter un chiffre")
        return console.error("Password sans chiffre");
    }else{
        console.log("Le password est valide")
    }
}

function veriMail(){
    let mail = document.getElementById("mail").value;
    let tailleMail = mail.length;
    let testMail = 0;
    let testMail2 = 0;
    if (tailleMail < 5){
        alert("L'adresse mail n'est pas valide")
        return console.error("mail trop court");
    }
    for (let i=0; i < tailleMail; i++) {
        if (mail[i] == " "){
            alert("L'adresse mail: \"" + mail + "\" n'est pas valide")
            return console.error("mail avec un espace");
        }
        if (mail[i] == "@"){
            testMail+=1
        }
        if (mail[i] == "."){
            testMail2+=1
        }
    }
    if (testMail < 1){
        alert("L'adresse mail: \"" + mail + "\" n'est pas valide")
        return console.error("mail sans @");
    }else if (testMail2 < 1){
        alert("L'adresse mail: \"" + mail + "\" n'est pas valide")
        return console.error("mail sans point");
    }else{
        console.log("L'adresse mail est valide")
    }

}