import React from 'react'
import "./style.css"
//import { pins } from './Pins';
import { CiGlobe } from "react-icons/ci";
import { IoMdPin } from "react-icons/io";

function App2() {
    const url1="https://raw.githubusercontent.com/turban/webgl-earth/master/images/2_no_clouds_4k.jpg"

  function project(lat, lon) {
  const x = (lon + 180) / 360;       // 0 → 1
  const y = (90 - lat) / 180;        // 0 → 1
  return { top: y * 100, left: x * 100 };
}

const pins = [
  {
    name: "Usain Bolt",
    team: "Jamaican Sprinter",
    lat: 18.0179,
    lon: -76.8099,
    country: "Jamaica",
    image: "./usian.jpg"
  },
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
  name: "Mohamed Salah",
  team: "Liverpool FC",
  lat: 30.0444,   // Cairo, Egypt
  lon: 31.2357,
  country: "Egypt",
  image: "./salah.jpg"
}

,
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



  return (
    <>
    <div className='app2'>
      <div className='map-image'>

        <img src={url1} />

  {pins.map((p, i) => {
  const { top, left } = project(p.lat, p.lon);
  return (
  

 <div
        key={i}
        className="pin"
        style={{ top: `${top}%`, left: `${left}%` }}
      >
        
        <IoMdPin size={27} />
 
        <div className="card">
          <img src={p.image} />
          <div className="card-content">
            <p>
              {p.name}<br/><br/>
              {p.team}<br />
                          </p>
              <div style={{display:"flex",gap:"5px", lineHeight:"1"}}>
                <CiGlobe style={{fontSize:"0.8rem"}} />
                <span style={{fontSize:"0.8rem"}}>{p.country}</span>
              </div>

          </div>
        </div>
        
      </div>
      

  );
})}



      </div>
    </div>



  <div className='text-content'>
        <h3>Ecosystem</h3>
        <h2 className='h2'>We bridge sports,gaming,and<br/>
           lifestyle by transforming collectibles <br/>
           into dynamic,cross-platform asssets across mobile games</h2>
      </div>

    </>
  );
}

export default App2;
