const hour = document.querySelector(".needleHrs")
const minute = document.querySelector('.needleMin')
const second = document.querySelector('.needleSec')

setInterval(runClock,1000);

// 


function runClock(){
    const time = new Date();
    const hrs = (time.getHours())/12;
    const min = (time.getMinutes())/60;
    const sec = time.getSeconds()/60;

    // console.log(hrs,min,sec);

    hour.style.setProperty('--rotation',hrs*360)
    minute.style.setProperty('--rotation',min*360)
    second.style.setProperty('--rotation',sec*360)

}

runClock()