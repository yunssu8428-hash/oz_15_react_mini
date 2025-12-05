import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_BASE, TMDB_BASE_URL, TMDB_API_KEY } from "../constants"; 

const options = { method: "GET", headers: { accept: "application/json" } };

export default function MovieDetail() {        
  const { id } = useParams();           
  const [movie, setMovie] = useState(null);    //카드에서 넘겨준 객체를 가져옴
  const [loading, setLoading] = useState(true);
  const [error, setError]  = useState("");
  
  useEffect(() =>{
    async function fetchDetail(){
      try {
        setLoading(true);
        const res = await fetch(
          `${TMDB_BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}&language=ko-KR`,options
        );
        if (!res.ok) throw new Error ("상세 호출 실패");  // 404처럼 호출 실패하는 경우에 앱이 멈추지 않도록함 
        const data = await res.json();
        setMovie(data);
      }catch(err){
        console.error(err);
        setError("영화 정보를 불러올 수 없습니다.");
      }finally{
        setLoading(false);
      }
    }

    if(id) fetchDetail();
  },[id]);

    if (loading) return <p>로딩 중...</p>;
    if (error) return <p>{error}</p>;
    if (!movie) return <p>영화 정보를 불러올 수 없습니다.</p>;
  
  //Detail JSON을 detail movie로 사용

      return (
         <div className="detail-wrapper">
           <div className="backdrop"
             style={{
              backgroundImage: `url(${IMAGE_BASE + (movie.backdrop_path || movie.poster_path)})`,
        }}
      />
      <section className="detail-content">
        <img
          className="detail-poster"    // 상세 페이지 왼쪽 포스터
          src={`${IMAGE_BASE}${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="info">          
          <h2>{movie.title}</h2>  
          <p className="tagline">{movie.tagline}</p>
          <p className="rating">
            평점: {movie.vote_average?.toFixed(1)}({movie.vote_count}명)
          </p>
          <p className="genres">
            {movie.genres?.map(g => g.name).join("·")}</p>
          <h3>줄거리</h3>
          <p>{movie.overview}</p>
          <p>
            런타임: {movie.runtime}분 <br/> 
            개봉일: {movie.release_date} <br />
          </p>
        </div>
      </section>
    </div>
  );
}
//상세페이지 안에 정보 박스안에 제목, 한줄소개, 평점