let boxTop = 200;
let boxLeft = 200;
let move = 10
document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    console.log('keydown event\n\n' + 'key: ' + keyName);

    if(keyName === 'ArrowUp'){
        boxTop -= move
        
    }
    if(keyName === 'ArrowDown'){
        boxTop += move
        
    }
    if(keyName === 'ArrowRight'){
        boxLeft += move
        
    }
    if(keyName === 'ArrowLeft'){
        boxLeft -= move
       
    }

   console.log(keyName)
    document.getElementById("box").style.top = `${boxTop}px`;
    document.getElementById("box").style.top = `${boxTop}px`;
    document.getElementById("box").style.left = `${boxLeft}px`;
    document.getElementById("box").style.left = `${boxLeft}px`;

  });