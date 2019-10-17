const signupButton = document.getElementById('signup-button');
const loginButton = document.getElementById('login-button');
const passwordBox = document.getElementById('password-box');
const idBox = document.getElementById('id-box');
const loginController = require('./login-controller');
const model = require('./model');

model.initJSONFiles();
idBox.focus();
signupButton.addEventListener('click', () => {
    window.location.href = './signup.html';
});

loginButton.addEventListener('click', login);

passwordBox.addEventListener('keypress', (e) => {
    const key = e.which || e.keyCode;
    if(key === 13) {
        login();
    }
})

function login() {
    const id = idBox.value;
    const password = passwordBox.value;
    if(loginController.login(id, password)) {
        window.location.href = './index.html';
        return;
    }
    alert("회원 정보가 일치하지 않습니다.");
}