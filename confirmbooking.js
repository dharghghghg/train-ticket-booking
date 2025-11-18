
let name = localStorage.getItem("trainname");
        let num =localStorage.getItem("trainnum");
        let coach=localStorage.getItem("coach");
         coachp=localStorage.getItem("coachprice");
         let ticket=Number(localStorage.getItem("ticket"));
         let fare = ticket*coachp;
       
         document.getElementById("trainname").innerText = "Train Name : " +name;
         document.getElementById("trainnum").innerText = "Train NO : "+ num;
        document.getElementById("coach").innerText ="Coach : " + coach ;
        document.getElementById("coachp").innerText ="Price(each):   ₹ "+ coachp;
        document.getElementById("ticket").innerText = "Total Ticket : "+ticket;
        document.getElementById("ticketfare").innerText = "Total Fare : ₹"+fare;
if(ticket==0||!ticket){
        alert("Please Add Passengers again");
        window.location.href="booking.html";
       }
        const passengers = JSON.parse(localStorage.getItem("passengers")) || [];

  const container = document.getElementById("passengerDetails");

  if (passengers.length === 0) {
    container.innerHTML = "<p>No passengers added yet.</p>";
  } else {
    passengers.forEach(p => {
      
      const div = document.createElement("div");
      div.classList.add("passenger-card");

      div.innerHTML = `
        <h3>Passenger ${p.id}</h3>
        <p><strong>Name:</strong> ${p.name}</p>
        <p><strong>Age:</strong> ${p.age}</p>
         <p><strong>Berth:</strong> ${p.berth}</p>
          <p><strong>Gender:</strong> ${p.gender}</p>
        <hr>
      `;

      container.appendChild(div);
    });
  }
  function booked() {

   

    
    if (!localStorage.getItem("userData")) {
       document.getElementById("popupsignup").style.display = "block";
        return;
    }
  const trainName = localStorage.getItem("trainname");
  const trainNum = localStorage.getItem("trainnum");
  const coach = localStorage.getItem("coach");
  const coachPrice = parseInt(localStorage.getItem("coachprice")) || 0;
  const ticket = parseInt(localStorage.getItem("ticket")) || 0;
  const totalFare = coachPrice * ticket;
  const passengers = JSON.parse(localStorage.getItem("passengers")) || [];
const tdate=localStorage.getItem("date");
  const userData = JSON.parse(localStorage.getItem("userData"));
  const username = userData.username;
const from=localStorage.getItem("fromcity");
const to=localStorage.getItem("tocity");

  const pnr = "PNR" + Math.floor(100000 + Math.random() * 900000);

  
  const booking = {
    pnr,
    username,
    trainName,
    trainNum,
    coach,
    totalFare,
    bookingDate: new Date().toLocaleString(),
    passengers,
    tdate,
    from,
    to
  };

  
  const allBookings = JSON.parse(localStorage.getItem("allBookings")) || [];
  allBookings.push(booking);
  localStorage.setItem("allBookings", JSON.stringify(allBookings));

  
  document.getElementById("popupbook").style.display = "flex";
  confetti({
        particleCount: 500,
        spread: 100,
        origin: { y: 0.6 }
    });
}


function closePopupBook() {
 window.location.href="mybooking.html";

}

window.addEventListener("beforeunload",function(){
  localStorage.removeItem("passengers");
  localStorage.setItem("ticket", 0);
    
 
    
}
)
