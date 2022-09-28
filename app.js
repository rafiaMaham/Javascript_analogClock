const hourh = document.querySelector(".hour");
const minuteh = document.querySelector(".minute");
const secondh = document.querySelector(".second");

function updateClock(){
    const currentDate = new Date();


    setTimeout(updateClock, 1000);

    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    console.log(hour, minute, second);

    const hourdeg = (hour/12)*360;
    hourh.style.transform = `rotate(${hourdeg}deg)`;

    const minutedeg = (minute/60)*360;
    minuteh.style.transform = `rotate(${minutedeg}deg)`;

    const seconddeg = (second/60)*360;
    secondh.style.transform = `rotate(${seconddeg}deg)`
}

updateClock();