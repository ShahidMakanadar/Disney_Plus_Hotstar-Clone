import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

function Slider() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((res) => {
      // console.log(res.data.results);
      setMovieList(res.data.results);
    });
  };
  const imageUrl = import.meta.env.VITE_IMAGE_BASE_URL;

  const elementRef = useRef()
  const screenWith = window.innerWidth
  const SliderLeft = (element)=>{
    element.scrollLeft-=screenWith-125
  }
  const SliderRight = (element)=>{
    element.scrollLeft+=screenWith-125
  }

  return (
    <div>

      <HiChevronLeft className=" hidden md:block text-[45px] absolute mx-16 mt-[140px] cursor-pointer" onClick={()=>SliderLeft(elementRef.current)}/>
      <HiChevronRight  className=" hidden md:block text-[45px] absolute right-16 mt-[140px] cursor-pointer" onClick={()=>SliderRight(elementRef.current)}/>

      <div className="flex min-w-full overflow-x-auto w-full px-5 md:px-16 py-0 md:py-2  scrollbar-hide scroll-smooth " ref={elementRef}>
        {movieList.map((items,index) => index < 8 && (
          <img
            key={items.id}
            src={`${imageUrl + items.backdrop_path}`}
            alt="refresh"
            className="md:h-[310px] min-w-full h-[140px] object-cover rounded-lg
                 object-left-top mr-5  hover:border-[4px] border-gray-500 transition-all duration-150 ease-in"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
