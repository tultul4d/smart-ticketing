const allBed = document.getElementsByClassName('bed');
let  countSeat =0;
let seatLeft =40;
let totalPriceCount=0;
let clickCount =0;

for(let bed of allBed){
    bed.addEventListener('click', function(e){


        if ( countSeat < 4){
            countSeat = countSeat + 1;
            bed.style.backgroundColor = "#1DD100";
            setInnerText('bed-count', countSeat);
            const bedAdd = document.getElementById('bed-count');
            const bedText = parseInt(bedAdd.innerText);
            bedAdd.innerText = countSeat;




            let bedNumber = document.getElementById('bed-number');
            const seatSubText = parseInt(bedNumber.innerText);
            seatLeft = seatLeft -1;
            setInnerText('bed-number', seatLeft)

            bedNumber.innerText = seatLeft;

            // const placeTicket =e.target;
            // console.log(e.target);
        }
        else{
            countSeat = countSeat;
        }
        
        // seat.setAttributes('disabled', ' ');
        
        
        
        
    
    })
}
function setInnerText(id, value){
    const setText = document.getElementById(id);
    setText.innerText = value;
}
