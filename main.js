const URL="https://api.openweathermap.org/data/2.5/weather?q=";

const apikey="&appid=9049190123ff0e909e7f92a059ac2c2e"

const form=document.getElementById("form");

const loc=document.getElementById("location");

const src=document.getElementById("pic")
const wc=document.getElementById("w-cond");
const temp=document.getElementById("temp")
const pres=document.getElementById("pres")
const lat=document.getElementById("long-let");
const wind=document.getElementById("wind");


function removeElement(parent){
    while(parent.firstChild){
        parent.firstChild.remove()
    }
}

function getWeather(searchtext){

    axios.get(`${URL}${searchtext}${apikey}`).then((res)=>{
        const weather=res.data
        console.log(weather)
        //const di=document.createElement("div");
        //const ul=document.createElement("ul");
        const li1=document.createElement("p");
        const li2=document.createElement("p");
        const li3=document.createElement("h4");
        const li4=document.createElement("p");
        const li5=document.createElement("p");
        const li6=document.createElement("p");
        const li7=document.createElement("P");
        var img=document.createElement("img");

        //li3.append("Place Name: ");
        if(weather.weather[0].description==="overcast clouds"){
            img.src="https://media.istockphoto.com/id/157527872/photo/storm-cloud.webp?b=1&s=170667a&w=0&k=20&c=1PYZ-Fa-c1jHTnwCMHTKxPQrKr-fOFnpt5pmeibzkKc="
            src.appendChild(img)
            src.append(img)
            //div.append(src)
            
        }
        if(weather.weather[0].description==="clear sky"){
            img.src="https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D"
            src.appendChild(img)
            src.append(img)
            //div.append(src)
        }
        if(weather.weather[0].description==="haze"){
            img.src="https://images.unsplash.com/photo-1423209086112-cf2c8acd502f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGF6ZXxlbnwwfHwwfHx8MA%3D%3D"
            src.appendChild(img)
            src.append(img)
            //div.append(src)
        }
        if(weather.weather[0].description!="overcast clouds" && weather.weather[0].description!="clear sky" && weather.weather[0].description!="haze"){
            img.src="https://media.istockphoto.com/id/1292546433/photo/empty-park-bench-during-rainy-season.webp?b=1&s=170667a&w=0&k=20&c=Q0gcvBxJM1gyxlWBv1eVzNzpid6rf9l2D_qn-CJ5iNg="
            src.appendChild(img)
            src.append(img)
            //div.append(src)
        }
        li7.append("Weather Condition: ")
        li7.append(weather.weather[0].description)
        wc.append(li7)
        li3.append(weather.name);
        loc.append(li3)
        li1.append("Latitude: ");
        li1.append(weather.coord.lat);
        lat.append(li1)
        li2.append("Longitude: ");
        li2.append(weather.coord.lon);
        lat.append(li2)
        li4.append("Wind Speed: ");
        li4.append(weather.wind.speed);
        wind.append(li4)
        li5.append("Temperature: ");
        li5.append(weather.main.temp);
        li5.append(" F")
        temp.append(li5)
        li6.append("Pressure: ");
        li6.append(weather.main.pressure);
        li6.append(" hPa")
        pres.append(li6)

        
       
       
        
        //ul.append(li1);
        //ul.append(li2);
        //ul.append(li4);
        //ul.append(li3);
        //ul.append(li5);
        //ul.append(li6);
        
       // di.append(ul)
       
        
        //div.append(ul);
        
        //sec.append(div)
    })

}

form.addEventListener("submit",(e)=>{

    e.preventDefault()

    //console.log(form.children)
    const searchtext=form.children[3].value;
    //removeElement(div);
    removeElement(src)
    removeElement(loc)
    removeElement(wc)
    removeElement(temp)
    removeElement(pres)
    removeElement(lat)
    removeElement(wind)
    getWeather(searchtext);
    form.children[3].value="";

})