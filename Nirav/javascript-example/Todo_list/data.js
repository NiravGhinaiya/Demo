
function display() {
    let txt = document.getElementById('txt').value;

    if (txt == '') {
        alert('You must write something!')
    } else {

        // Remove All
        let clear = document.getElementById('clear');
        clear.addEventListener('click', function () {
            li.remove();
        })

        let box = document.getElementById('box');

        let li = document.createElement('li');         

        let inp = document.createElement('input');
        inp.setAttribute("readonly", "readonly");
        inp.value = txt;

        let btne = document.createElement('button');
        btne.innerHTML = 'Edit'

        let btnd = document.createElement('button');
        btnd.innerHTML = 'Delete';




        // Edit
        btne.addEventListener('click', function (e) {
            if (btne.innerText == 'Edit') {
                inp.removeAttribute("readonly");
                inp.focus();
                btne.innerText = 'Save';
            } else {
                inp.setAttribute("readonly", "readonly");
                btne.innerText = 'Edit';
            }
        })


        // Delete 
        btnd.addEventListener("click", function (e) {
            let box = document.getElementById('box');
            let li = e.target.parentNode;
            box.removeChild(li);
        })


        li.appendChild(inp);
        li.appendChild(btne);
        li.appendChild(btnd);

        box.appendChild(li);

    }

    document.getElementById('txt').value = '';
}