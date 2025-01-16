import './App.css';
import CurrencyConvertorRenderer from './components/CurrencyConvertorRenderer';
import PasswordGenerator from './components/PasswordGenerator';

function App() {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJoQvTOFINKluYoMuowSIfsUtQM9QWYvWRIw&s",
    "https://c1.wallpaperflare.com/preview/554/370/505/bird-bluebird-bird-png-nature-perched-spring.jpg",
    "https://e1.pxfuel.com/desktop-wallpaper/847/247/desktop-wallpaper-26693-blue-birds-bluebirds-computer.jpg",
    "https://c0.wallpaperflare.com/preview/860/959/718/feather-spring-cropped-png.jpg"
  ];
  return (
    <div style={{textAlign: "center", marginTop: "200px"}}>
      {/* <Carousel images={images} width="300px" height="200px" /> */}
      {/* <StarRating initialRating={3.9}></StarRating> */}
      <CurrencyConvertorRenderer />
    </div>
  );
}

export default App;
