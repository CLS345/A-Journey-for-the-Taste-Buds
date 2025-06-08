// 获取访问时间记录模态框相关元素
const visitTimeLink = document.getElementById('visit-time-link');
const visitTimeModal = document.getElementById('visit-time-modal');
const visitTimeCloseBtn = document.querySelector('#visit-time-modal .close');

// 获取注册登录模态框相关元素
const registerLoginLink = document.getElementById('register-login-link');
const registerLoginModal = document.getElementById('register-login-modal');
const registerLoginCloseBtn = document.querySelector('#register-login-modal .close');

// 点击链接显示访问时间记录模态框
visitTimeLink.onclick = function () {
    visitTimeModal.style.display = "block";
}

// 点击关闭按钮隐藏访问时间记录模态框
visitTimeCloseBtn.onclick = function () {
    visitTimeModal.style.display = "none";
}

// 点击链接显示注册登录模态框
registerLoginLink.onclick = function () {
    registerLoginModal.style.display = "block";
}

// 点击关闭按钮隐藏注册登录模态框
registerLoginCloseBtn.onclick = function () {
    registerLoginModal.style.display = "none";
}

// 点击模态框外部隐藏访问时间记录模态框和注册登录模态框
window.onclick = function (event) {
    if (event.target == visitTimeModal) {
        visitTimeModal.style.display = "none";
    }
    if (event.target == registerLoginModal) {
        registerLoginModal.style.display = "none";
    }
}

// 注册函数
function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    if (username && password) {
        // 检查用户是否已存在
        const users = JSON.parse(localStorage.getItem('users')) || {};
        if (users[username]) {
            alert('该用户名已存在，请选择其他用户名。');
        } else {
            // 存储新用户信息
            users[username] = password;
            localStorage.setItem('users', JSON.stringify(users));
            alert('注册成功，请登录。');
            document.getElementById('register-username').value = '';
            document.getElementById('register-password').value = '';
            showLoginForm();
        }
    } else {
        alert('请输入用户名和密码。');
    }
}

// 显示注册表单
function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.title = '用户注册';
}

// 显示登录表单
function showLoginForm() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    document.title = '用户登录';
}

// 登录函数
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    if (username && password) {
        const users = JSON.parse(localStorage.getItem('users')) || {};
        if (users[username] === password) {
            // 登录成功
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('register-form').style.display = 'none';
            document.getElementById('success-message').style.display = 'block';
            document.getElementById('welcome-username').textContent = username;
            localStorage.setItem('isLoggedIn', 'true');
            const mainContent = document.querySelector('.container');
            mainContent.style.display = "block";
            const registerLoginModal = document.getElementById('register-login-modal');
            registerLoginModal.style.display = "none";
        } else {
            alert('用户名或密码错误，请重试。');
        }
    } else {
        alert('请输入用户名和密码。');
    }
}