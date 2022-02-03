const date = new Date();
const month = date.getMonth() + 1;
const hour = date.getHours();
const b = document.getElementById("body");

async function fetchImages(breed) {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random/1`
    );
    const data = await response.json();
}



if(month>=3 && month<=5) {
    if(hour<=8) {
        b.style.backgroundImage = ' url("./images/data1.jpg")';
    }else if(hour<=16) {
        b.style.backgroundImage = ' url("./images/data2.jpg")';
    }else if(hour<=24) {
        b.style.backgroundImage = ' url("./images/data3.jpg")';
    }
}else if(month>=6 && month<=8) {
    if(hour<=8) {
        b.style.backgroundImage = ' url("./images/data4.jpg")';
    }else if(hour<=16) {
        b.style.backgroundImage = ' url("./images/data5.jpg")';
    }else if(hour<=24) {
        b.style.backgroundImage = ' url("./images/data6.jpg")';
    } 
}else if(month>=9 && month<=11) {
    if(hour<=8) {
        b.style.backgroundImage = ' url("./images/data7.jpg")';
    }else if(hour<=16) {
        b.style.backgroundImage = ' url("./images/data8.jpg")';
    }else if(hour<=24) {
        b.style.backgroundImage = ' url("./images/data9.jpg")';
    }
}else if(month<=2 || month==12) {
    if(hour<=8) {
        b.style.backgroundImage = ' url("https://dog.ceo/api/breed/shiba/images/random/1")';
    }else if(hour<=16) {
        b.style.backgroundImage = ' url("https://images.dog.ceo/breeds/shiba/shiba-9.jpg")';
    }else if(hour<=24) {
        b.style.backgroundImage = ' url("https://images.dog.ceo/breeds/shiba/shiba-10.jpg")';
    }
}
