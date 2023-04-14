function validation() {

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var nname = document.getElementById('nname').value;
    var number = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var addres = document.getElementById('addres').value;


    let flncheck = /^[A-Za-z]{3,20}$/;
    let numcheck = /^[6789]{1}[0-9]{9}$/;
    let emcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;


    if (fname == '' && lname == '' && nname == '' && number == '' && email == '' && (this.genm.checked === false && this.genf.checked === false) && addres == '') {
        // document.getElementById('all_field').innerText = '** All Field requied'
        document.getElementById('fname1').innerText = '* Please fill the First Name';
        document.getElementById('lname1').innerText = '* Please fill the Last Name';
        document.getElementById('nname1').innerText = '* Please fill the Nick Name';
        document.getElementById('number1').innerText = '* Please fill the Number';
        document.getElementById('email1').innerText = '* Please fill the Email';
        document.getElementById('gender1').innerText = '* Please fill Your Gender';
        document.getElementById('addres1').innerText = '* Please fill Your Addres';
    }
    if (fname == '') {
        document.getElementById('fname1').innerText = '* Please fill the First Name';
        return false;
    } else if (flncheck.test(fname)) {
        document.getElementById('fname1').innerText = '';
    } else {
        document.getElementById('fname1').innerText = '* First Name is Invalid';
        return false;
    }



    if (lname == '') {
        document.getElementById('lname1').innerText = '* Please fill the Last Name';
        return false;
    } else if (flncheck.test(lname)) {
        document.getElementById('lname1').innerText = '';
    } else {
        document.getElementById('lname1').innerText = '* Last name is invalid';
        return false;
    }

    if (nname == '') {
        document.getElementById('nname1').innerText = '* Please fill the Nick Name';
        return false;
    } else if (flncheck.test(nname)) {
        document.getElementById('nname1').innerText = '';
    } else {
        document.getElementById('nname1').innerText = '*  Nick Name is invalid';
        return false;
    }


    if (number == '') {
        document.getElementById('number1').innerText = '* Please fill the Number';
        return false;
    } else if (numcheck.test(number)) {
        document.getElementById('number1').innerText = '';
    } else {
        document.getElementById('number1').innerText = '* Number is invalid';
        return false;
    }

    if (email == '') {
        document.getElementById('email1').innerText = '* Please fill the Email';
        return false;
    } else if (emcheck.test(email)) {
        document.getElementById('email1').innerText = '';
    } else {
        document.getElementById('email1').innerText = '* Email is invalid';
        return false;
    }


    if (this.genm.checked === false && this.genf.checked === false) {
        document.getElementById('gender1').innerText = '* Please fill Your Gender';

        return false;
    } else {
        document.getElementById('gender1').innerText = '';
    }
    let Gender = '';
    if (this.genm.checked === true) {
        Gender += genm.value;
    } else if (this.genf.checked === true) {
        Gender += genf.value;
    }

    if (addres == '') {
        document.getElementById('addres1').innerText = '* Please fill Your Addres';
        return false;
    } else {
        document.getElementById('addres1').innerText = '';
    }

    // localStorage Add Data...

    localStorage.setItem('First Name', fname);
    localStorage.setItem('Last Name', lname);
    localStorage.setItem('Nick Name', nname);
    localStorage.setItem('Mobile Number', number);
    localStorage.setItem('Email', email);
    localStorage.setItem('Gender', Gender);
    localStorage.setItem('Addres', addres);


    document.cookie = `First Name=  ${fname}`;
    document.cookie = `Last Name= ${lname}`;
    document.cookie = `Nick Name= ${nname}`;
    document.cookie = `Mobile Number= ${number}`;
    document.cookie = `Email= ${email}`;
    document.cookie = `Gender= ${Gender}`;
    document.cookie = `Addres= ${addres}`;



}


function display() {
    var data = document.getElementById('data');

    data.innerHTML = `<table border="1">
    <tr>
        <td>First Name </td>
        <td>${localStorage.getItem('First Name')}</td>
    </tr>
    <tr>
        <td>Last Name </td>
        <td>${localStorage.getItem('Last Name')}</td>
    </tr>
    <tr>
        <td>Nick Name </td>
        <td>${localStorage.getItem('Nick Name')}</td>
    </tr>
    <tr>
        <td>Mobile Number </td>
        <td>${localStorage.getItem('Mobile Number')}</td>
    </tr>
    <tr>
        <td>Email </td>
        <td>${localStorage.getItem('Email')}</td>
    </tr>
    <tr>
        <td>Gender </td>
        <td>${localStorage.getItem('Gender')}</td>
    </tr>
    <tr>
        <td>Addres </td>
        <td>${localStorage.getItem('Addres')}</td>
    </tr>
    </table>`

}