// import reactLogo from './assets/react.svg'
import NavBar from "./components/navbar";
import Card, { Card2 } from "./components/card";
import darkVader from './assets/images/Star_Wars_-_Darth_Vader.jpg'
import yoda from './assets/images/images.jpg'
import "./App.css";

function App() {
  const products = [
    {
      name: "Product 1",
      description: "This is product 1.",
      price: "$ 10.000",
      img: darkVader,
    },
    {
      name: "Product 2",
      description: "This is product 2.",
      price: "$ 20.000",
      img: yoda,
    },
    {
      name: "Product 3",
      description: "This is product 3.",
      price: "$ 5.000",
      img: null,
    },
    {
      name: "Product 4",
      description: "This is product 4.",
      price: "$ 1.000",
      img: "",
    },
  ];
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <Card2 />
        <div className="row mt-4">
          {
          products.map((item, index)=>{
            return (
            <div key={index} className="col">
              <Card product={item} />
            </div>
          );})
          }
        </div>
      </div>
    </>
  );
}

export default App;
