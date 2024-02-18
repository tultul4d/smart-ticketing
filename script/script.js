const allBed = document.getElementsByClassName('bed');
let  countSeat =0;
let seatLeft =0;
let totalPriceCount=0;
let clickCount =0;

for(let bed of allBed){
    bed.addEventListener('click', function(){
        bed.style.backgroundColor = "#1DD100";
        // seat.setAttributes('disabled', ' ');
        let bedAdd = document.getElementById('bed-count');
        let bedText = parseInt(bedAdd.innerText);
        countSeat += 1;
        bedAdd.innerText = countSeat;
    })
}