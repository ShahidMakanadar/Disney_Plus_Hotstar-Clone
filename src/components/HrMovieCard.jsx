import PropTypes from "prop-types";

const IMAGE_BASE_URL= import.meta.env.VITE_IMAGE_BASE_URL;

function HrMovieCard({movie}) {
  // Use slice(0, 12) to get the first 12 characters of movie.title
  const truncatedTitle = movie.title.slice(0, 12);

  return (
    <section className='hover:scale-110 transition-all duration-150 ease-in '>
    <img src={IMAGE_BASE_URL+movie.backdrop_path} 
    className='w-[110px] md:w-[260px] rounded-lg
    hover:border-[3px] border-gray-400 cursor-pointer
    '/>
    <h2 className='w-[110px] md:w-[260px] text-white
    mt-2'>{truncatedTitle}</h2>
    </section>
  )
}

HrMovieCard.propTypes = {
    movie: PropTypes.object,

  };

export default HrMovieCard