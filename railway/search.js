let city1=document.getElementById('city1');
let city2=document.getElementById('city2');


var button=document.getElementById('btn');
        button.addEventListener('click',function(){
              let selectedDate = document.getElementById('travelDate').value;

    if(selectedDate === "" || selectedDate === null){
        alert("Please select journey date!");
        return;
    }

    localStorage.setItem("date", selectedDate);
           let fromcity = city1.value;
    let tocity = city2.value;

           if(fromcity === tocity)
            alert("Error :Choose Differrnt Destination");
       else if (fromcity==="delhi" && tocity==="kolkata"){
        
            localStorage.setItem("train1name", "RAJDHANI EXPRESS");
             localStorage.setItem("train2name","VANDHE BHARAT");
              localStorage.setItem("train1num","#110255" );
               localStorage.setItem("train2num", "#112003");
               
               localStorage.setItem("fromcity", fromcity);
                localStorage.setItem("tocity", tocity);
       window.location.href="nextpage.html";
       
}
  else if (fromcity==="delhi" && tocity==="mumbai"){
        
            localStorage.setItem("train1name", "MUMBAI EXPRESS");
             localStorage.setItem("train2name","VANDHE BHARAT");
              localStorage.setItem("train1num","#110256" );
               localStorage.setItem("train2num", "#112003");
               localStorage.setItem("price_sl1", "450");
               localStorage.setItem("price_sl2", "550");
               localStorage.setItem("price_3a1", "1050");
               localStorage.setItem("price_3a2", "1350");
               localStorage.setItem("price_2a1", "2250");
               localStorage.setItem("price_2a2", "2550");
               localStorage.setItem("price_1a1", "4250");
               localStorage.setItem("price_1a2", "4550");  
               
               localStorage.setItem("fromcity", fromcity);
                localStorage.setItem("tocity", tocity);
               
       window.location.href="nextpage.html";
       
}
  else if (fromcity==="delhi" && tocity==="chennai"){
        
            localStorage.setItem("train1name", "CHENNAI EXPRESS");
             localStorage.setItem("train2name","DELHI EXPRESS");
              localStorage.setItem("train1num","#110255" );
               localStorage.setItem("train2num", "#112803");
               localStorage.setItem("price_sl1", "450");
               localStorage.setItem("price_sl2", "550");
               localStorage.setItem("price_3a1", "1050");
               localStorage.setItem("price_3a2", "1250");
               localStorage.setItem("price_2a1", "2250");
               localStorage.setItem("price_2a2", "2550");
               localStorage.setItem("price_1a1", "4250");
               localStorage.setItem("price_1a2", "4550");
             
               localStorage.setItem("fromcity", fromcity);
                localStorage.setItem("tocity", tocity);

       window.location.href="nextpage.html";
       
}
  else if (fromcity==="mumbai" && tocity==="kolkata"){
        
            localStorage.setItem("train1name", "RAJDHANI EXPRESS");
             localStorage.setItem("train2name","SHATABDI EXPRESS");
              localStorage.setItem("train1num","#110255" );
               localStorage.setItem("train2num", "#114503");
               localStorage.setItem("price_sl1", "350");
               localStorage.setItem("price_sl2", "450");
               localStorage.setItem("price_3a1", "1150");
               localStorage.setItem("price_3a2", "1250");
               localStorage.setItem("price_2a1", "2150");
               localStorage.setItem("price_2a2", "2750");
               localStorage.setItem("price_1a1", "4150");
               localStorage.setItem("price_1a2", "4350");
       
               localStorage.setItem("fromcity", fromcity);
                localStorage.setItem("tocity", tocity);

       window.location.href="nextpage.html";
       
}
  else if (fromcity==="chennai" && tocity==="kolkata"){
        
            localStorage.setItem("train1name", "CHENNAI EXPRESS");
             localStorage.setItem("train2name","TEJAS EXPRESS");
              localStorage.setItem("train1num","#110755" );
               localStorage.setItem("train2num", "#112403");
               localStorage.setItem("price_sl1", "450");
               localStorage.setItem("price_sl2", "550");
               localStorage.setItem("price_3a1", "1050");
               localStorage.setItem("price_3a2", "1250");
               localStorage.setItem("price_2a1", "2250");
               localStorage.setItem("price_2a2", "2550");
               localStorage.setItem("price_1a1", "4250");
               localStorage.setItem("price_1a2", "4550");
              
               localStorage.setItem("fromcity", fromcity);
                localStorage.setItem("tocity", tocity);

       window.location.href="nextpage.html";
       
}
  else if (fromcity==="kolkata" && tocity==="delhi"){
        
            localStorage.setItem("train1name", "RAJDHANI EXPRESS");
             localStorage.setItem("train2name","VANDHE BHARAT");
              localStorage.setItem("train1num","#110255" );
               localStorage.setItem("train2num", "#112003");
               localStorage.setItem("price_sl1", "450");
               localStorage.setItem("price_sl2", "550");
               localStorage.setItem("price_3a1", "1150");
               localStorage.setItem("price_3a2", "1250");
               localStorage.setItem("price_2a1", "2350");
               localStorage.setItem("price_2a2", "2550");
               localStorage.setItem("price_1a1", "4150");
               localStorage.setItem("price_1a2", "4550");
           
               localStorage.setItem("fromcity", fromcity);
                localStorage.setItem("tocity", tocity);

       window.location.href="nextpage.html";
       
}
  else if (fromcity==="chennai" && tocity==="delhi"){
        
            localStorage.setItem("train1name", "GATIMAN EXPRESS");
             localStorage.setItem("train2name","HUMSAFAR EXPRESS");
              localStorage.setItem("train1num","#110255" );
               localStorage.setItem("train2num", "#112003");
               localStorage.setItem("price_sl1", "350");
               localStorage.setItem("price_sl2", "450");
               localStorage.setItem("price_3a1", "1070");
               localStorage.setItem("price_3a2", "1350");
               localStorage.setItem("price_2a1", "2250");
               localStorage.setItem("price_2a2", "2550");
               localStorage.setItem("price_1a1", "4250");
               localStorage.setItem("price_1a2", "4550");
              
               localStorage.setItem("fromcity", fromcity);
                localStorage.setItem("tocity", tocity);

       window.location.href="nextpage.html";
       
}
  else if (fromcity==="mumbai" && tocity==="chennai"){
        
            localStorage.setItem("train1name", "CHENNAI EXPRESS");
             localStorage.setItem("train2name","HUMSAFAR EXPRESS");
              localStorage.setItem("train1num","#110255" );
               localStorage.setItem("train2num", "#112003");
               localStorage.setItem("price_sl1", "450");
               localStorage.setItem("price_sl2", "570");
               localStorage.setItem("price_3a1", "1050");
               localStorage.setItem("price_3a2", "1250");
               localStorage.setItem("price_2a1", "2250");
               localStorage.setItem("price_2a2", "2550");
               localStorage.setItem("price_1a1", "4250");
               localStorage.setItem("price_1a2", "4750");
          
               localStorage.setItem("fromcity", fromcity);
                localStorage.setItem("tocity", tocity);

       window.location.href="nextpage.html";
       
}
  else if (fromcity==="mumbai" && tocity==="delhi"){
        
            localStorage.setItem("train1name", "MUMBAI EXPRESS");
             localStorage.setItem("train2name","HUMSAFAR EXPRESS");
              localStorage.setItem("train1num","#110255" );
               localStorage.setItem("train2num", "#112003");
               localStorage.setItem("price_sl1", "750");
               localStorage.setItem("price_sl2", "850");
               localStorage.setItem("price_3a1", "1050");
               localStorage.setItem("price_3a2", "1250");
               localStorage.setItem("price_2a1", "2250");
               localStorage.setItem("price_2a2", "2550");
               localStorage.setItem("price_1a1", "4250");
               localStorage.setItem("price_1a2", "5550");
    
               localStorage.setItem("fromcity", fromcity);
                localStorage.setItem("tocity", tocity);

       window.location.href="nextpage.html";
       
}
  else if (fromcity==="chennai" && tocity==="mumbai"){
        
            localStorage.setItem("train1name", "CHENNAI EXPRESS");
             localStorage.setItem("train2name","HUMSAFAR EXPRESS");
              localStorage.setItem("train1num","#110255" );
               localStorage.setItem("train2num", "#112003");
               localStorage.setItem("price_sl1", "450");
               localStorage.setItem("price_sl2", "650");
               localStorage.setItem("price_3a1", "1050");
               localStorage.setItem("price_3a2", "1250");
               localStorage.setItem("price_2a1", "2250");
               localStorage.setItem("price_2a2", "2550");
               localStorage.setItem("price_1a1", "4350");
               localStorage.setItem("price_1a2", "4550");
               
               localStorage.setItem("fromcity", fromcity);
                localStorage.setItem("tocity", tocity);

       window.location.href="nextpage.html";
       
}
  else if (fromcity==="kolkata" && tocity==="mumbai"){
        
            localStorage.setItem("train1name", "RAJDHANI EXPRESS");
             localStorage.setItem("train2name","VANDHE BHARAT");
              localStorage.setItem("train1num","#110255" );
               localStorage.setItem("train2num", "#112003");
               localStorage.setItem("price_sl1", "450");
               localStorage.setItem("price_sl2", "750");
               localStorage.setItem("price_3a1", "1050");
               localStorage.setItem("price_3a2", "1450");
               localStorage.setItem("price_2a1", "2250");
               localStorage.setItem("price_2a2", "2550");
               localStorage.setItem("price_1a1", "4250");
               localStorage.setItem("price_1a2", "4850");
        
               localStorage.setItem("fromcity", fromcity);
                localStorage.setItem("tocity", tocity);

       window.location.href="nextpage.html";
       
}

    });
         
