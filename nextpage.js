
      window.addEventListener("DOMContentLoaded", function() {
            let name1 = localStorage.getItem("train1name");
            let name2 = localStorage.getItem("train2name");
            let num1 = localStorage.getItem("train1num");
            let num2 = localStorage.getItem("train2num");
            let sl1 = localStorage.getItem("price_sl1");
            let sl2 = localStorage.getItem("price_sl2");
            let a31 = localStorage.getItem("price_3a1");
            let a32= localStorage.getItem("price_3a2");
            let a21 = localStorage.getItem("price_2a1");
            let a22= localStorage.getItem("price_2a2");
            let a11 = localStorage.getItem("price_1a1");
            let a12 = localStorage.getItem("price_1a2");
            let tdate = localStorage.getItem("date");
             let city1= localStorage.getItem("fromcity");
             let city2=localStorage.getItem("tocity");
             let city=document.getElementById("city")

           

  document.getElementById("train1name").innerText =name1;
  document.getElementById("train2name").innerText =name2;
  document.getElementById("train1num").innerText =num1;
  document.getElementById("train2num").innerText =num2;
  document.getElementById("price_sl1").innerText =sl1;
  document.getElementById("price_sl2").innerText =sl2;
  document.getElementById("price_3a1").innerText =a31;
   document.getElementById("price_3a2").innerText =a32;
    document.getElementById("price_2a1").innerText =a21;
     document.getElementById("price_2a2").innerText =a22;
      document.getElementById("price_1a1").innerText =a11;
       document.getElementById("price_1a2").innerText =a12;
    let d = document.getElementsByClassName("date");
let c= document.getElementsByClassName("city");

for (let i = 0; i < d.length; i++) {
    d[i].innerText = "DATE: " + tdate;
}
for (let i = 0; i < c.length; i++) {
c[i].innerHTML = city1.toUpperCase() + "  →  " + city2.toUpperCase();
}
 
});

function booking1() {
      let name =localStorage.getItem("train1name");
        let num = localStorage.getItem("train1num");
        let coachp = localStorage.getItem("price_sl1");
localStorage.setItem("trainname",name );
 localStorage.setItem("trainnum",num );
 localStorage.setItem("coach","SLEEPER" );
 localStorage.setItem("coachprice",coachp );
      window.location.href="booking.html";
    }
        
    function booking2() {
      let name =localStorage.getItem("train1name");
        let num = localStorage.getItem("train1num");
        let coachp = localStorage.getItem("price_3a1");
        
localStorage.setItem("trainname",name );
 localStorage.setItem("trainnum",num );
 localStorage.setItem("coach","3AC" );
 localStorage.setItem("coachprice",coachp );
      window.location.href="booking.html";
    }
        
    function booking3() {
      let name =localStorage.getItem("train1name");
        let num = localStorage.getItem("train1num");
        let coachp = localStorage.getItem("price_2a1");
localStorage.setItem("trainname",name );
 localStorage.setItem("trainnum",num );
 localStorage.setItem("coach","2AC" );
 localStorage.setItem("coachprice",coachp );
      window.location.href="booking.html";
    }
        
    function booking4() {
      let name =localStorage.getItem("train1name");
        let num = localStorage.getItem("train1num");
        let coachp = localStorage.getItem("price_1a1");
localStorage.setItem("trainname",name );
 localStorage.setItem("trainnum",num );
 localStorage.setItem("coach","1AC" );
 localStorage.setItem("coachprice",coachp );
      window.location.href="booking.html";
    }
        
    function booking5() {
      let name =localStorage.getItem("train2name");
        let num = localStorage.getItem("train2num");
        let coachp = localStorage.getItem("price_sl2");
localStorage.setItem("trainname",name );
 localStorage.setItem("trainnum",num );
 localStorage.setItem("coach","SLEEPER" );
 localStorage.setItem("coachprice",coachp );
      window.location.href="booking.html";
    }
        
    function booking6() {
      let name =localStorage.getItem("train2name");
        let num = localStorage.getItem("train2num");
        let coachp = localStorage.getItem("price_3a2");
localStorage.setItem("trainname",name );
 localStorage.setItem("trainnum",num );
 localStorage.setItem("coach","3AC" );
 localStorage.setItem("coachprice",coachp );
      window.location.href="booking.html";
    }
        
    function booking7() {
      let name =localStorage.getItem("train2name");
        let num = localStorage.getItem("train2num");
        let coachp = localStorage.getItem("price_2a2");
localStorage.setItem("trainname",name );
 localStorage.setItem("trainnum",num );
 localStorage.setItem("coach","2AC" );
 localStorage.setItem("coachprice",coachp );
      window.location.href="booking.html";
    }
        
    function booking8() {
      let name =localStorage.getItem("train2name");
        let num = localStorage.getItem("train2num");
        let coachp = localStorage.getItem("price_1a1");
localStorage.setItem("trainname",name );
 localStorage.setItem("trainnum",num );
 localStorage.setItem("coach","1AC" );
 localStorage.setItem("coachprice",coachp );
      window.location.href="booking.html";
    }
        