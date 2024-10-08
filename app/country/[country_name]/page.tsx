export default function CountryName({params}){
  type countryDta={
    name:string,capital:string,population:number
  } 
  
  
  const countryDta: countryDta []=[
   { 
    name:"pakistan",
    capital:"Islamabad",
     population:240000000,
    },

      {
        name:"India",
        capital:"Delhi",
        population: 1350000000
    },

      {
        name:"Iran",
        capital:"Thran",
        population: 135000000
    },

      {
        name:"Sudiarab",
        capital:"Ryhad",
        population: 50000000
    },

      {
        name:"England",
        capital:"lodon",
        population: 135000000
    }

  ]


const country=countryDta[params.country_name.toLowerCase()];
if (!country) {
    return <h1>Name:{params.country_name}</h1>
}


return(
<div>
    
<h1>Name:{country.name}</h1>
<h1>capital:{country.capital}</h1>
<h1>population:{country.population}</h1>

</div>
)
}