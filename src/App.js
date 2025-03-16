import React from "react";
import Countdown from "react-countdown";
import "./App.css";
import weddingPhoto from "./wedding-photo.jpg";
import { CopyToClipboard } from "react-copy-to-clipboard";

const weddingDate = new Date("2025-06-01T14:00:00");

const CountdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <div className="countdown">축하해주셔서 감사합니다.</div>;
  } else {
    let timeText = "";
    if (days > 0) {
      timeText = `결혼식까지 ${days}일 ${hours}시간 ${minutes}분 ${seconds}초 남았습니다.`;
    } else if (hours > 0) {
      timeText = `결혼식까지 ${hours}시간 ${minutes}분 ${seconds}초 남았습니다.`;
    } else if (minutes > 0) {
      timeText = `결혼식까지 ${minutes}분 ${seconds}초 남았습니다.`;
    } else {
      timeText = `결혼식까지 ${seconds}초 남았습니다.`;
    }
    return <div className="countdown">{timeText}</div>;
  }
};

function App() {
  return (
    <div className="container">
      <div className="image-section">
        <img src={weddingPhoto} alt="결혼식 사진" />
        <div className="overlay-text">결혼식에 초대합니다.</div>
      </div>

      <Countdown date={weddingDate} renderer={CountdownRenderer} />

      <div className="info">
        <h2>결혼식 장소</h2>
        <p>서울특별시 강남구 테헤란로 123</p>
        <a
          href="https://map.naver.com/v5/search/서울특별시%20강남구%20테헤란로%20123"
          target="_blank"
          rel="noopener noreferrer"
        >
          네이버 지도에서 열기
        </a>
      </div>

      <div className="account">
        <h2>마음 전하는 곳</h2>
        <p>
          신랑측 계좌: <span>123-456-789</span>{" "}
          <CopyToClipboard text="123-456-789">
            <button onClick={() => alert("계좌번호가 복사되었습니다!")}>
              복사
            </button>
          </CopyToClipboard>
        </p>
        <p>
          신부측 계좌: <span>987-654-321</span>{" "}
          <CopyToClipboard text="987-654-321">
            <button onClick={() => alert("계좌번호가 복사되었습니다!")}>
              복사
            </button>
          </CopyToClipboard>
        </p>
      </div>
    </div>
  );
}

export default App;
