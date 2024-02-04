const cityName=document.getElementById('cityName');
const submitbtn= document.getElementById('submitbtn');
const city_name = document.getElementById('city_name');

const temp_status=document.getElementById('temp_status');
const temp=document.getElementById('temp');

const getInfo=async(event)=>{
event.preventDefault();
    let cityVal=cityName.value;
     if(cityVal===""){
          city_name.innerText=`Mohan said this is not correct name of the city`;
     }
     else{
        try{
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=deb45cffdaadac5f69ca96c84eb56bea`;
             const response=await fetch(url);
            const data=   await response.json();
            console.log(data);
            const arrData=[data];
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText=arrData[0].main.temp;


            

            const tempMood =arrData[0].weather[0].main.toLowerCase();
            console.log(tempMood);
            if(tempMood=="clouds"){
               temp_status.innerHTML="<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }
          else  if(tempMood=="clear"){
               temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
          else  if(tempMood=="rain"){
               temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
    }
  
    catch{
          city_name.innerTexr=`plz enter the city name properly`;
    }
     }
}

submitbtn.addEventListener('click',getInfo);