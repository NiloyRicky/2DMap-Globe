
import LocationPin from "./LocationPin";

function Pins({ radius }) {
  


// function latLongToVector3(lat, lon, radius) {
//   const phi = (90 - lat) * (Math.PI / 180);
//   const theta = (lon + 180) * (Math.PI / 180);

//   const x = -radius * Math.sin(phi) * Math.cos(theta);
//   const y = radius * Math.cos(phi);
//   const z = radius * Math.sin(phi) * Math.sin(theta);

//   return [x, y, z];
// }


// const pins = [
//   { lat: 28.6139, lon: 77.2090, label: "New Delhi" },
//   { lat: 40.7128, lon: -74.0060, label: "New York" },
//   { lat: 35.6895, lon: 139.6917, label: "Tokyo" },
// ];



const pins = [
  {
  name: "Usain Bolt",
  team: "Jamaican Sprinter",
  lat: 18.0179,
  lon: -76.8099,
  country: "Jamaica",
  image: "./usian.jpg"
}
,
  {
    name: "Cristiano Ronaldo",
    team: "Al-Nassr (Saudi Pro League)",
    lat: 32.6650,
    lon: -16.9241,
    country: "Portugal",
    image: "./CR7.jpg"
  },
  
  {
    name: "Stephen Curry",
    team: "Golden State Warriors (NBA)",
    lat: 33.5207,
    lon: -86.8025,
    country: "USA",
    image: "./Curry.jpg"
  },
  {
    name: "Virat Kohli",
    team: "India National Cricket Team",
    lat: 28.6139,
    lon: 77.2090,
    country: "India",
    image: "./virat2.jpg"
  },
  {
  name: "Faouzi Ghoulam",
  team: "Hatayspor",
  lat: 36.2021,
  lon: 36.1606,
  country: "Turkey",
  image: "./Gouhalm.jpeg"
},
{
  name: "Kalidou Koulibaly",
  team: "Al-Hilal",
  lat: 28.0339,      // Saint-Dié-des-Vosges, France
  lon: 1.6596,
  country: "Senegal",
  image: "./Alhilal.jpg"
}

];






  return pins.map((pin, i) => {
   const radius=6

    return (
     <LocationPin  key={i} lat={pin.lat} lon={pin.lon} radius={radius} name={pin.name}
     team={pin.team}
     image={pin.image} 
     country={pin.country}

     
     />
    );
  });
}
export default Pins
