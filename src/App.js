import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import image from "./images/test.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from "./images/testt (1).jpg"
import image2 from "./images/pexels-rajesh-s-balouria-13829114.jpg"
import image3 from "./images/testt (3).jpg"
function App() {

  const [data, setdata] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://api.adviceslip.com/advice');
        console.log(res.data.slip.advice, "hii");
        setdata(res.data.slip.advice)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const fetchdataa = () => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://api.adviceslip.com/advice');
        console.log(res.data.slip.advice, "hii");
        setdata(res.data.slip.advice)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

  }

  return (
    <>

      <div style={{ position: "relative", overflow: "auto", height: "100vh" }}>
        <Carousel showThumbs={false} autoPlay={true} showStatus={false}>
          <div>
            <h1 className="legend" style={{ color: "white", textAlign: "center" }}>{data}</h1>
            <img src={image3} style={{ maxWidth: "100%", height: "100vh" }} />
          </div>
          <div>
            <h1 className="legend" style={{ color: "white", textAlign: "center" }}>{data}</h1>
            <img src={image1} style={{ maxWidth: "100%", height: "100vh" }} />

          </div>
          <div>
            <h1 className="legend" style={{ color: "white", textAlign: "center" }}>{data}</h1>
            <img src={image2} style={{ maxWidth: "100%", height: "100vh" }} />
          </div>
        </Carousel>
        <button onClick={fetchdataa} style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          borderRadius: "5px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}>
          Give Me Advice
        </button>
      </div>
    </>

  );
}

export default App;
