const allBed = document.getElementsByClassName('bed');
let  countSeat =0;
let seatLeft =40;
let totalPriceCount=0;
let clickCount =0;
let totalPrice =0;

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
            seatLeft = seatLeft -1 ;
            setInnerText('bed-number', seatLeft);

            seatLeft.innerText = bedNumber;


            const ticket = e.target.parentNode.childNodes[3].innerText;
            // console.log(ticket);

            
            // console.log(e.target.parentNode.childNodes[3].innerText);

            const price = parseFloat(document.querySelector("h4").innerText);
            const selectedContainer =document.getElementById('selected-ticket');
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            td.innerText = ticket;
              

            const td2 = document.createElement('td');
            td2.innerText = "None-Ac";
            const td3 = document.createElement('td');
            td3.innerText = price;

            tr.appendChild(td);
            tr.appendChild(td2);
            tr.appendChild(td3);

            // console.log(tr);
            selectedContainer.appendChild(tr);
            totalPrice += price;
            document.getElementById('total').innerText = totalPrice;

            const grandPrice = document.getElementById('grand');
            grandPrice.innerText = totalPrice;



            // coupon
            const grandTotal = document.getElementById('grand');
            document.getElementById('coupon-btn').addEventListener('click',function(){
                const couponCode = document.getElementById('coupon-fil').value;
                if (couponCode === "NEW15"){
                    const discount = totalPrice * 0.15;
                    const totalDiscount = totalPrice - discount;
                    grandTotal.innerText = totalDiscount;
                    console.log(totalDiscount);
                }
            })

            // const placeTicket =e.target;
            // console.log(e.target);
        }
        
        else{
            countSeat = countSeat;
        }
        
        // seat.setAttributes('disabled', ' ');
        
        
        
        
    
    })
}

            // // show seat name and total 
            // const beds =document.querySelectorAll(".price");
            // // console.log(beds);

            // for (let index = 0; index < beds.length; index++) {
            //     const element = beds[index];
            //     // console.log(element);
            //   element.addEventListener("click", function (){
            //     // console.log("clicked");
            //    const price = element.querySelector("h1");
            // //    console.log(price.innerText);

            //    const titleContainer =document.getElementById("taka");
            // //    console.log(titleContainer);

              

            //   });  
                
            // }
function setInnerText(id, value){
    const setText = document.getElementById(id);
    setText.innerText = value;
}
