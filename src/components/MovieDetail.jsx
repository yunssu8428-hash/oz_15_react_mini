import React from "react";
import { useLocation } from "react-router-dom";
import { IMAGE_BASE } from "../constants"; 
import  MovieDetailData  from "../data/movieDetailData.json" 

export default function MovieDetail() {        
  const location = useLocation();           
  const { movie } = location.state || {};    //카드에서 넘겨준 객체를 가져옴
  const detailMovie = MovieDetailData;       //Detail JSON을 detail movie로 사용
  if (!movie) {                          
    return <p>영화 정보를 불러올 수 없습니다.</p>;
  }

  return (
    <div className="detail-wrapper">
      <div
        className="backdrop"               //클릭 시 배경사진영역
        style={{
          backgroundImage: `url(${IMAGE_BASE}${movie.backdrop_path || movie.posterPath})`,
        }}  // 백드롭 주소가 있으면 사용하고 없으면 포스터이미지 사용
      />
      <section className="detail-content">
        <img
          className="detail-poster"    // 상세 페이지 왼쪽 포스터
          src={`${IMAGE_BASE}${movie.posterPath}`}
          alt={movie.title}
        />
        <div className="info">          
          <h2>{movie.title}</h2>  
          <p className="tagline">{movie.tagline}</p>
          <p className="rating">
            평점: {movie.rating?.toFixed(1)}({detailMovie.vote_count}명)
          </p>
          <p className="genres">{movie.genres?.map(g => g.name).join(" · ")}</p>
          <h3>줄거리</h3>
          <p>{movie.overview}</p>
          <p>
            런타임: {detailMovie.runtime}분 <br/> 
            개봉일: {movie.release_date} <br />
          </p>
        </div>
      </section>
    </div>
  );
}
//상세페이지 안에 정보 박스안에 제목, 한줄소개, 평점