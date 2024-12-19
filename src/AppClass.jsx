import { Component } from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component {
  imageData = () => {
    return [
      { id: 1, img: elephant },
      { id: 2, img: elephant },
      { id: 3, img: elephant },
      { id: 4, img: elephant },
    ];
  };

  render() {
    const images = this.imageData(); // Get image data

    return (
      <div className="container">
        {images.map((item) => (
          <img key={item.id} src={item.img} alt={`Elephant ${item.id}`} className="image" />
        ))}
      </div>
    );
  }
}
