const date = new Date();
const month = date.getMonth() + 1;
const hour = date.getHours();
const b = document.getElementById("body");
const div = document.querySelector('.localStorage');
const btnSave = document.querySelector('.btnSave');
const btnRead = document.querySelector('.btnRead');
const input = document.querySelector('input');


if(month>=3 && month<=5) {
    if(hour<=8) {
        b.style.backgroundImage = ' url("https://images.dog.ceo/breeds/shiba/shiba-1.jpg")';
        btnSave.addEventListener('click', () => {
            const data = input.value;
            localStorage.setItem('myKey1',data);
        });
        btnRead.addEventListener('click', () => {
            const data = localStorage.getItem('mykey1');
            input.value = data;
        });
    }else if(hour<=16) {
        b.style.backgroundImage = ' url("https://images.dog.ceo/breeds/shiba/shiba-2.jpg")';
        btnSave.addEventListener('click', () => {
            const data = input.value;
            localStorage.setItem('myKey2',data);
        });
    }else if(hour<=24) {
        b.style.backgroundImage = ' url("https://images.dog.ceo/breeds/shiba/shiba-3.jpg")';
        btnSave.addEventListener('click', () => {
            const data = input.value;
            localStorage.setItem('myKey3',data);
        });
    }
}else if(month>=6 && month<=8) {
    if(hour<=8) {
        b.style.backgroundImage = ' url("https://images.dog.ceo/breeds/shiba/shiba-4.jpg")';
        btnSave.addEventListener('click', () => {
            const data = input.value;
            localStorage.setItem('myKey4',data);
        });
    }else if(hour<=16) {
        b.style.backgroundImage = ' url("https://images.dog.ceo/breeds/shiba/shiba-5.jpg")';
        btnSave.addEventListener('click', () => {
            const data = input.value;
            localStorage.setItem('myKey5',data);
        });
    }else if(hour<=24) {
        b.style.backgroundImage = ' url("https://images.dog.ceo/breeds/shiba/shiba-6.jpg")';
        btnSave.addEventListener('click', () => {
            const data = input.value;
            localStorage.setItem('myKey6',data);
        });
    } 
}else if(month>=9 && month<=11) {
    if(hour<=8) {
        b.style.backgroundImage = ' url("https://images.dog.ceo/breeds/shiba/shiba-7.jpg")';
        btnSave.addEventListener('click', () => {
            const data = input.value;
            localStorage.setItem('myKey7',data);
        });
    }else if(hour<=16) {
        b.style.backgroundImage = ' url("https://images.dog.ceo/breeds/shiba/shiba-8.jpg")';
        btnSave.addEventListener('click', () => {
            const data = input.value;
            localStorage.setItem('myKey8',data);
        });
    }else if(hour<=24) {
        b.style.backgroundImage = ' url("https://images.dog.ceo/breeds/shiba/shiba-9.jpg")';
        btnSave.addEventListener('click', () => {
            const data = input.value;
            localStorage.setItem('myKey9',data);
        });
    }
}else if(month<=2 || month==12) {
    if(hour<=8) {
        b.style.backgroundImage = ' url("https://images.dog.ceo/breeds/shiba/shiba-10.jpg")';
        btnSave.addEventListener('click', () => {
            const data = input.value;
            localStorage.setItem('myKey10',data);
        });
    }else if(hour<=16) {
        b.style.backgroundImage = ' url("https://images.dog.ceo/breeds/shiba/shiba-11.jpg")';
        btnSave.addEventListener('click', () => {
            const data = input.value;
            localStorage.setItem('myKey11',data);
        });
    }else if(hour<=24) {
        b.style.backgroundImage = ' url("https://images.dog.ceo/breeds/shiba/shiba-12.jpg")';
        btnSave.addEventListener('click', () => {
            const data = input.value;
            localStorage.setItem('myKey12',data);
        });
        btnRead.addEventListener('click', () => {
            const data = localStorage.getItem('myKey12');
            input.value = data;
        });
    }
}
