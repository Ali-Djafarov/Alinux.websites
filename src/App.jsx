import Buttons from "./Buttons";
import "./App.css";
import { useEffect, useState } from "react";

const getRandomColor = () => {
  const h = Math.floor(Math.random() * 360); 
  const s = Math.floor(Math.random() * 50) + 50; 
  const l = Math.floor(Math.random() * 40) + 20; 
  return `hsl(${h}, ${s}%, ${l}%)`; 
};

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [color, setColor] = useState(getRandomColor());

  const fetchData = async () => {
    try {
      const response = await fetch("https://quotes-api-self.vercel.app/quote");
      const result = await response.json();
      setTimeout(() => {
        setData(result);
        setLoading(false);
      }, 800)
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createQuote = () => {
    setLoading(true);
    setColor(getRandomColor());
    fetchData();
  };

  return (
    <div id="main" style={{ backgroundColor: color, color: color }}>
      <div id="quote-box">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p id="text">{data.quote}</p>
            <div id="author-wrap">
              <p id="author">- {data.author}</p>
            </div>
            <Buttons
              tweetHref={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                `"${data.quote}" - ${data.author}`
              )}`}
              newQuote={createQuote}
              linkStyle={{ backgroundColor: color, color: color }}
              buttonStyle={{ backgroundColor: color }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
