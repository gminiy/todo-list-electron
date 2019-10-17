const signupController = require('./signup-controller');
const signupButton = document.querySelector('#signup-button');
const idBox = document.querySelector('#id-box');
const passwordBox = document.querySelector('#password-box');

idBox.focus();

signupButton.addEventListener('click', signup);
passwordBox.addEventListener('keypress', (e) => {
    const key = e.which || e.keyCode;
    if(key === 13) {
        signup();
    }
});

function signup() {
    const id = idBox.value;
    const password = passwordBox.value;

    if (!(password && id)) {
        alert("아이디와 패스워드를 입력해주세요.");
        return;
    }

    if(signupController.saveUser(id, password)) {
        alert("회원가입이 완료되었습니다. 로그인해주세요");
        window.location.href = './login.html';
    }
}