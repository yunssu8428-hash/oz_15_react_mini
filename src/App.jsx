import { useState } from 'react'
<<<<<<< HEAD
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
import MovieCard from "./components/MovieCard";
import movieList from "./data/movieListData.json";
import './index.scss'
import logo from "./assets/logo.png"; 

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function App() {
  const [movies] = useState(movieList.results || []);

  return (
    <main>
      <div className='title-wrap'>
      <h1 className='movie_list' style={{ color: "white" }}>영화 목록</h1>
      </div>

      <section className="movie-grid">
        <Swiper
         modules={[Navigation, Pagination, Grid]} // 사용할 스위퍼 모듈
         grid={{ rows: 1, fill: "row" }}          // 1행 그리드
         spaceBetween={16}                        // 카드간간격
         slidesPerView={4}                        // 화면에 4장만 표시
         navigation                               // 포스터 좌우로 넘기는 기능
         pagination={{ clickable: true }}         //
         style={{ paddingBottom: "20px" }}
       >

      
      
        {movies.map((movie)=> (
          <SwiperSlide key={movie.id}>
          <MovieCard
            key={movie.id}
            id={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
            rating={movie.vote_average}
            tagline={movie.tagline || "" }
            overview={movie.overview}
            genres={movie.genres}
            runtime={movie.runtime}
            release_date={movie.release_date}
          />
          </SwiperSlide>
        ))}
      </Swiper>
      </section>
    </main>
  );
}
>>>>>>> b5fc9592ccdbc038835f0f418027191fd2ddeb4d
