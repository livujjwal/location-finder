import React, { useState,useEffect } from "react";
import winter from "../images/winter.jpg";
import summer from "../images/summer.jpg";
const GeoLocation = () => {
  const [position, setPosition] = useState(0);
  const [hemisphere, setHemisphere] = useState("");
  const [month, setMonth] = useState(new Date().getMonth());
  function location() {
    navigator.geolocation.getCurrentPosition((p) => {
      console.log(p.coords.latitude, p.coords.longitude);
      setPosition({
        latitude: p.coords.latitude,
        longitude: p.coords.longitude,
      });
      if (p.coords.latitude > 0) {
        setHemisphere("Northern Hemisphere");
      } else if (p.coords.latitude < 0) {
        setHemisphere("Southern Hemisphere");
      } else {
        setHemisphere("Equator");
      }
    });
  }
  useEffect(() => {
    location();
  },[])
//   function getLocation() {
//     location();
//   }
  return (
    <div>
      <h4>GeoLocation</h4>
      <p>Latitude :{position.latitude}</p>
      <p>Longitude :{position.longitude}</p>
      <p>Hemisphere : {hemisphere}</p>
      {/* <button onClick={getLocation}>Get Location</button> */}
      {(hemisphere == "Northern Hemisphere" && month > 3 && month < 8) ||
      (hemisphere == "Southern Hemisphere" && (month < 3 || month > 8)) ? (
        <div>
          <h1>Welcome to Summer Season</h1>
          <img src={summer} alt="summer pic" />
        </div>
      ) : (
        <div>
          <h1>Welcome to Winter Season</h1>
          <img src={winter} alt="winter pic" />
        </div>
      )}
    </div>
  );
};
export default GeoLocation;
