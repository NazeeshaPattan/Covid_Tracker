let Datacontainer = document.getElementById('Datacontainer')

async function fetchData(){ 
    let response = await fetch('https://corona.lmao.ninja/v3/covid-19/countries',{
        type:'GET'
    })
    let data = await response.json()
    displayData(data)
}

fetchData()

function displayData(data){
    Datacontainer.innerHTML = 'Loading...'
    Datacontainer.innerHTML = ''
    data.forEach(country => {
        let currentCountry = document.createElement('div')
        currentCountry.className= 'card m-3 col-lg-3 col-md-6 col-sm-12 px-0 py-1'
        currentCountry.innerHTML = (
            `
            <img src=${country.countryInfo.flag} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${country.country}</h5>
              <p class="m-0">cases : ${country.cases} </p>
              <p class="m-0">recovered : ${country.recovered}</p>
                  <p class="p-0">active : ${country.active}</p>
                  <p class="p-0">continent : <span class="continent">${country.continent}</span></p>
            </div>
            `
        )
        Datacontainer.appendChild(currentCountry)
    });

}
const query = document.getElementById("query")
query.addEventListener("input",e=>{
    const {value} = e.target
    const countryName = document.querySelectorAll(".card-title")
    countryName.forEach(Name=>{
        if(Name.innerText.toLowerCase().includes(value.toLowerCase())){
            Name.parentElement.parentElement.style.display="block"
        }else{
            Name.parentElement.parentElement.style.display="none"

        }
    })
});

const FilterBtn = document.getElementById("filter")
FilterBtn.addEventListener("click",()=>{
    document.body.classList.toggle("open")
})

const RegionFilter = document.querySelectorAll("li")
RegionFilter.forEach(Filter=>{
    Filter.addEventListener("click",()=>{
        const value = Filter.innerText
        const countryRegion = document.querySelectorAll(".continent")
        countryRegion.forEach(Region=>{
            if(Region.innerText.includes(value)||value==="All"){
                Region.parentElement.parentElement.style.display="block"
            }else{
                Region.parentElement.parentElement.style.display="none"
    
            }
        })
    })

});
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 (".inner-switch").on("click",function(){
     if($("body").hasClass("dark")) {
         $("body").removeClass("dark");
         $(".inner-switch").text("OFF");
     } else {
         $("body").addClass("dark");
         $("inner-switch").text("ON");
     }
 })