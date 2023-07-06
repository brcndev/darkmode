const switchBtn = document.getElementById('switchBtn');
const body = document.querySelector('body');
const imgSwitch = document.getElementById('imgSwitch')

function switchMode(event) {
    body.classList.toggle('darkmode');
    switchBtn.classList.toggle('darkmode');
    }

    


switchBtn.addEventListener('click', switchMode)