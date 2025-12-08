import React from "react"; 
import { Link } from "react-router-dom"; 
import '../index.scss' 
import logo from "../assets/logo.png";

export default function NavBar({ searchQuery, onChangeSearchQuery }) { 
  const handleChange = (e) => {
    if(typeof onChangeSearchQuery === "function"){
    onChangeSearchQuery(e.target.value);
    }
  };
// LayOut에서 넘긴 프롭스를 받도록 작성
// searchQuery: 현재 검색어 문자열
// 검색창에서 글자가 바뀔때마다 함수 호출 
// 글자가 바뀌어도 함수가 안넘어오면 LayOut의 SearchQuery의 상태를 호출

  const handleKeyDown = (e) => {
    if (e.key === "Enter"){
      console.log("검색", searchQuery);
    }
  };
// 

  return ( 
  <nav className="nav"> 
    <div className="nav-left">
      <Link to="/" className="nav-logo">
        <img src={logo} alt="logo" className="nav-logo-img"/>
        <span className="nav-title">테레비-죤</span>
      </Link>
    </div>
    
    <div className="nav-center">
      <input
      type="text"
      className="nav-search"
      placeholder="제목을 검색하세요."
      value={searchQuery}                 // SearchQuery로 현재 검색어를 검색창에 반영
      onChange={handleChange}             // 타이핑할 때마다 부모의 상태 변경 (Layout의 searchQuery의 상태가 바뀜)
      onKeyDown={handleKeyDown}
      />
    </div>

    <div className="nav-right">
      <div className="nav-auth">
        <button className="nav-auth-btn">로그인</button>
        <button className="nav-auth-btn primary">회원가입</button>
      </div>
    
    
    <div className="nav-links"> 
      <Link to="/" className="nav-link-item">
        <div className="nav-link-box">
          Home
        </div>
      </Link> 

      <Link to="/watch-later" className="nav-link-item">
        <div className="nav-link-box">
          나중에 볼 영화
        </div>
      </Link>
      </div> 
    </div>
  </nav>
 );
}