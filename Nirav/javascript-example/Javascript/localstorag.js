// signup-form
const signUp = (e) => {

    let formData = {
        fname: document.getElementById('s_name').value,
        email: document.getElementById('s_email').value,
        pwd: document.getElementById('s_pass').value,
    }

    localStorage.setItem('formData', JSON.stringify(formData));
    // console.log(localStorage.getItem('formData'));
    e.preventDefault();

    alert('Data Submit Success....')
    console.log('Data Submit Success....')
}

let { fname, email, pwd } = JSON.parse(localStorage.getItem('formData'))

//Login-form

console.log(email)
console.log(pwd)

const login = (e) => {
    let email1 = document.getElementById('l_email').value;
    let pwd1 = document.getElementById('l_pass').value;

 
    if (!(email === email1)) {
        alert('Enter Valid Email')
    } else if (!(pwd === pwd1)) {
        alert('Enter Valid PassWord')
    } else {
        alert('Login  Success....')
        console.log('Login  Success....!')
    }
}





