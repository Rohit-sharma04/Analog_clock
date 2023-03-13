setInterval( function(){
  let currentTime=new Date();
  let hour=currentTime.getHours();
  let minutes=currentTime.getMinutes();
  let seconds=currentTime.getSeconds();
  let hourRotation=hour*30 + minutes/2;
  let minutesRotation=minutes*6;
  let secondsRotation=seconds*6;
  let miliSecond=currentTime.getMilliseconds();
  let miliRotation=secondsRotation+(miliSecond*6)/1000;

  document.querySelector(".hour").style.transform=`rotate(${hourRotation}deg)`

  document.querySelector(".minute").style.transform=`rotate(${minutesRotation}deg)`
  document.querySelector(".second").style.transform=`rotate(${miliRotation}deg)`
 
},1)