function additem() {
    var txt = document.getElementById('name').value;

    if (txt == '') {
        alert('You must write something!')
    } else {
        let box = document.getElementById('box');

        let li = document.createElement('li');
        li.textContent = txt;

        let span = document.createElement('span');
        span.className = 'fa fa-times';
        li.appendChild(span);

        

        box.appendChild(li)


        let btn = document.querySelector('ul');
        btn.addEventListener('click', function (e) {
            let box = document.getElementById('box');
            let li = e.target.parentNode;
            box.removeChild(li);
        })

    }
    document.getElementById('name').value = '';
}