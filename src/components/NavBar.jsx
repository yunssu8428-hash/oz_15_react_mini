import React from "react"; 
import { Link } from "react-router-dom"; 
import '../index.scss' 
import logo from "../assets/logo.png";

export default function NavBar() { 
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