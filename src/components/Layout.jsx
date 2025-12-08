import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
  const [searchQuery, setSearchQuery] = useState("");
  // 검색어를 여기서 받아서 NavBar에 값을 넘겨주고
  

  return (
    <>
      <NavBar
        searchQuery={searchQuery}
        onChangeSearchQuery={setSearchQuery}
      />
      <Outlet context={{ searchQuery }} />
    </>
  );
}
// App에 contextAPI를 써서 값을 내려줬음
// searchQuery는 현재 검색어 값
// onChangeSearchQuery는 검색어를 바꾸는 함수로 사용