document.getElementById('login-btn').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;

    const userPass = document.getElementById('user-pass');
    const password = userPass.value;
    console.log(email, password);
    if (email === 'baper@bank.com' && password === 'baper bank') {
        alert('welcome baper bank');
        window.location.href = 'bank.html'
    }
    else {
       alert('invalid password');
    }
})