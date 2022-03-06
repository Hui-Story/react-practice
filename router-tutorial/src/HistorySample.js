import React from "react";
import { useNavigate } from "react-router-dom";

function HistorySample() {
  const navigate = useNavigate();

  // 뒤로가기
  // 인덱스로 처리, 두번 뒤로 가고싶으면 -2
  const goBack = () => {
    const answer = window.confirm("정말 떠나시겠어요?");
    if (answer) {
      navigate(-1);
    }
  };

  // 홈으로 가기
  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
}

export default HistorySample;
