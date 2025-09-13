import React, { useState,useEffect } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';



const TitleCards = ({title,category}) => {
    const [movies, setMovies] = useState([]);
    const url = `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTUzMjAyYjUwZGI2M2Q5ZGE1NWY5YzkwODIyOTk5YSIsIm5iZiI6MTc1Nzc1MDY0Ny4yMTgsInN1YiI6IjY4YzUyNTc3N2NjMjQ4OTk2YWE4NWZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HcquXMdnnkKM0aMNzcwb2bHqVVI21NS_N2zbcNQA1ak'
  }
};

useEffect(()=>{
  fetch(url, options)
  .then(res => res.json())
  .then(json => setMovies(json.results))
  .catch(err => console.error(err));

},[category])


  return (
    <div className="title-cards mt-[50px] mb-[30px]">
      <h2 className="mb-2 text-white text-xl font-semibold">
        {title?title: "Popular on Netflix"}
      </h2>
      <div className="card-list flex gap-[10px] overflow-x-scroll">
        {movies.map((movie) => {
          return (
            <Link to={`/player/${movie.id}`}
              className="card  flex-shrink-0 cursor-pointer relative "
              key={movie.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500`+movie.backdrop_path}
                alt={movie.original_title}
                className="w-[240px] rounded cursor-pointer"
              />
              <p className="mt-2 text-white text-sm absolute bottom-3 right-3">{movie.original_title}</p>
            </Link>
          );
        })}

      </div>
    </div>
  );
};
export default TitleCards;

// const TitleCards = () => {
//   return (
//     <div className='title-cards '>
//       <h2 className=''>Popular on Netflix</h2>
//       <div className="card-list ">
//         {cards_data.map((card)=>{
//           return <div className="card w-56" key={card.title} >
//             <img src={card.image} alt="" className=''/>
//             <p>{card.name}</p>
//           </div>
//         })}
//       </div>
//     </div>
//   )
// }

