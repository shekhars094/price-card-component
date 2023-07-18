import "./App.css";
import PriceCard from "./components/PriceCard";

function App() {
  const priceCardArray = [
    {
      type: "Starter",
      price: "5",
      features: [
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
      ],
      getStartedOnClick: () => {
        console.log("firstButtonClicked");
      },
    },
    {
      type: "Essential",
      price: "15",
      features: [
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
      ],
      getStartedOnClick: () => {
        console.log("secondButtonClicked");
      },
    },
    {
      type: "Premium",
      price: "25",
      features: [
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
      ],
      getStartedOnClick: () => {
        console.log("thirdButtonClicked");
      },
    },
  ];

  return (
    <>
      <div className="container">
        {priceCardArray.map((priceCard, index) => {
          return <PriceCard {...priceCard} key={index}/>;
        })}
      </div>
    </>
  );
}

export default App;
