import MovieCard from "./components/MovieCard";
import { TMDB_BASE_URL, TMDB_API_KEY } from "./constants";
import './index.scss'
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const options = { method: "GET", headers: { accept: "application/json" } };

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies(){
      try{                                        // 정상적인 호출
        setLoading(true);
        const res = await fetch(                    
  `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=ko-KR&page=1`,
  { method: "GET", headers: { accept: "application/json" } }
);
        const data = await res.json();
        setMovies(data.results || []); 
      } catch (err){                                // 호출 실패시 에러로그
        console.error("영화 목록 불러오기 실패;", err);
      }finally{                                      //성공 실패 없이 빈화면 안나오게
        setLoading(false);
      }
    }
  
  fetchMovies();
  },[]);

  if(loading){
    return<p style={{ color:"white"}}>로딩 중...</p>;
  }

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
            id={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
            rating={movie.vote_average}
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