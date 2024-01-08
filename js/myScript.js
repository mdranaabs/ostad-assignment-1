document.getElementById('age').addEventListener('keyup', function(){
    let child = document.getElementById('child');
    let adult = document.getElementById('adult');
    let message = document.getElementById('msg');
    let ageValue = parseInt(document.getElementById('age').value);

    if(ageValue >= 18){
        child.style.display = 'none';
        message.innerHTML = 'You are Adult &#129333;';
    }else{
        child.style.display = 'block';
        message.innerHTML = '';
    }

    if(ageValue < 18){
        adult.style.display = 'none';
        message.innerHTML = 'You are Child &#128110;';
    }else{
        adult.style.display = 'block';
    }
});