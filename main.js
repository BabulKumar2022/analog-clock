function clockTime(){
    const hrs = document.querySelector('.hrs');
    const min = document.querySelector('.min');
    const sec = document.querySelector('.sec');

    let date = new Date();
    let hr = date.getHours() * 30;
    let mn = date.getMinutes() * 6;
    let sc = date.getSeconds() * 6

    hrs.style.transform = `rotate(${hr + (mn /12)}deg)`;
    min.style.transform = `rotate(${mn + (sc /60)}deg)`;
    sec.style.transform = `rotate(${sc }deg)`;
}
setInterval(clockTime, 1000)