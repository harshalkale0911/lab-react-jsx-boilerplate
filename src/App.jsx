import "./App.css";
import elephant from "./images/elephant.jpeg";

const imageData = () => {
  return [
    { id: 1, img: elephant },
    { id: 2, img: elephant },
    { id: 3, img: elephant },
    { id: 4, img: elephant },
  ];
};

function App() {
  const images = imageData(); // Get image data

  return (
    <div className="container">
      {images.map((item) => (
        <img key={item.id} src={item.img} alt={`Elephant ${item.id}`} className="image" />
      ))}
    </div>
  );
}

export default App;
