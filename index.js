let bcrypt = require('bcrypt');
let salt = bcrypt.genSaltSync(10);

let email = "gutok11@hotmail.com";//Simulação do banco
let passwordd = bcrypt.hashSync("guttemberg", salt);//Simulação do banco

let verify = Array();

const hash = ({ emailsend, passwordsend }) => {
    let password = bcrypt.hashSync(passwordsend, salt);
    findByLogin({ emailinput: emailsend, passwordinput: password })
}

const verify_email = async (emailverify) => {
    if (emailverify == email) {
        verify.push(true);
    } else {
        console.log("Email inválido");
    }
}

const verify_password = async (passwordverify) => {
    if (passwordverify == passwordd) {
        verify.push(true);
    } else {
        console.log("Senha inválida");
    }
}

const findByLogin = ({ emailinput, passwordinput }) => {
    verify_email(emailinput);
    verify_password(passwordinput);

    let Log = verify.filter(x => x == true).length;
    if (Log == 2) {
        console.log("Logado");
    } else {
        console.log("Falha no login");
    }
}
//  findByLogin({emailinput:"guto", passwordinput:"guttemberg"});
hash({ emailsend: "gutok11@hotmail.com", passwordsend: "guttemberg" })