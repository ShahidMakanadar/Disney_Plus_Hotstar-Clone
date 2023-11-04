import disney from "../assets/images/disney.png";
import pixar from "../assets/images/pixar.png";
import marvel from "../assets/images/marvel.png";
import starwar from "../assets/images/starwar.png";
import nationalG from "../assets/images/nationalG.png";
//video importing
import disneyV from "../assets/videos/disney.mp4";
import pixarV from "../assets/videos/pixar.mp4";
import marvelV from "../assets/videos/marvel.mp4";
import starwarV from "../assets/videos/star-wars.mp4";
import nationalGeographicV from "../assets/videos/national-geographic.mp4";

function ProductionHouse() {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwar,
      video: starwarV,
    },
    {
      id: 5,
      image: nationalG,
      video: nationalGeographicV,
    },
  ];

  return (
    <div className="flex gap-2 md:gap-5 p-6">
      {productionHouseList.map((items) => (
        <div
          key={items.id}
          className=" border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer relative shadow-xl shadow-black"
        > 
          <video
            src={items.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-90"
          />
          <img src={items.image} className="w-full z-[1] opacity-100" />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
