import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

// Route 컴포넌트가 아닌 곳에서 params, location, navigate 사용
const WithRouterSample = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <h4>location</h4>
      <textarea value={JSON.stringify(location, null, 2)} readOnly />
      <h4>params</h4>
      <textarea value={JSON.stringify(params)} readOnly />
      <button onClick={() => navigate("/")}>홈으로</button>
    </div>
  );
};

export default WithRouterSample;
