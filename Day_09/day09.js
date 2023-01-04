const sounds = ['buzzer','crowd','gasp','tada','victory'];
const buttons = document.getElementById('buttons');

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  btn.addEventListener('click',()=>{
    stopSongs();
    document.getElementById(sound).play();
  })
  buttons.appendChild(btn);
});

function stopSongs(){
  sounds.forEach(sound =>{
    document.getElementById(sound).pause();
    document.getElementById(sound).currentTime = 0;
  });
}