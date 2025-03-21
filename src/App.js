import React, { useState } from "react";
import Countdown from "react-countdown";
import "./App.css";
import weddingPhoto from "./images/main.jpg";

const copyToClipboard = (text, almsg = "계좌번호가 복사되었습니다!") => {
  navigator.clipboard
    .writeText(text)
    .then(() => alert(almsg))
    .catch((err) => console.error("복사 실패:", err));
};

const weddingDate = new Date("2025-05-24T11:00:00");

const CountdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <div className="countdown">축하해주신 모든 분들께 감사합니다.</div>;
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

const MyCal = () => {
  return (
    <div className="cal">
      <table>
        <thead>
          <tr>
            <td className="title" colSpan="7">
              5월
            </td>
          </tr>
          <tr>
            <td>일</td>
            <td>월</td>
            <td>화</td>
            <td>수</td>
            <td>목</td>
            <td>금</td>
            <td>토</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
          </tr>
          <tr>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
          </tr>
          <tr>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>
              <div className="wedding-date">24</div>
            </td>
          </tr>
          <tr>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const accInfoList = [
  ["신동진", "우리", "978-045427-02-101"],
  ["최인아", "ㅁ", "000-000-000"],
  ["신완기", "신한", "325-04-499446"],
  ["김명재", "국민", "465125-91-106926"],
  ["최삼태", "ㅁ", "000-000-000"],
  ["이영욱", "ㅁ", "000-000-000"],
];

const AccList = () => {
  const [accNum, setAccNum] = useState(-1);

  let accBttnList = [];
  let accInfo = [];
  for (let i = 0; i < accInfoList.length; i++) {
    accInfo = accInfoList[i];
    accBttnList = [
      ...accBttnList,
      <button
        key={`Acc-${i}`}
        className={accNum === i ? "act" : ""}
        onClick={() => {
          if (i === accNum) {
            setAccNum(-1);
          } else {
            setAccNum(i);
          }
        }}
      >
        {accInfo[0]}
      </button>,
    ];
  }
  return (
    <div className="acc-list">
      <div className="acc-bttn">{accBttnList}</div>
      <div className="acc-info">
        {accNum > -1 ? (
          <>
            <div className="bnk">{accInfoList[accNum][1]}</div>
            <div className="num">{accInfoList[accNum][2]}</div>
            <button
              onClick={() =>
                copyToClipboard(
                  accInfoList[accNum][2],
                  "계좌번호가 복사되었습니다."
                )
              }
            >
              복사
            </button>
          </>
        ) : (
          <div>이름을 선택하세요.</div>
        )}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <div className="img-box">
        <img src={weddingPhoto} alt="동진 인아 사진" />
        <div className="overlay-text">
          <p>동진이와 인아의</p>
          <p>결혼식에 초대합니다.</p>
        </div>
        <div className="out-text">
          <p>2025년 5월 24일(토) 낮 11시</p>
          <p>서울대학교 연구공원 웨딩홀</p>
        </div>
      </div>

      <div className="hline" />

      <div className="invit-box">
        <h2>모시는 글</h2>
        <div className="invit-letter">
          <p>두 사람이 한 가정을 이루고자 합니다.</p>
          <p>평생 서로 사랑하고 베풀며 살겠습니다.</p>
          <p>귀한 발걸음으로 축하해주시면 감사하겠습니다.</p>
        </div>
        <div className="invit-name">
          <div>신완기 &middot; 김명재</div>
          <div>의 차남</div>
          <div>동진</div>
        </div>
        <div className="invit-name">
          <div>최삼태 &middot; 이영욱</div>
          <div>의 장녀</div>
          <div>인아</div>
        </div>
      </div>

      <div className="hline" />

      <div className="date-box">
        <h2>2025년 5월 24일 토요일 오전 11시</h2>
        <Countdown date={weddingDate} renderer={CountdownRenderer} />
        <MyCal />
      </div>

      <div className="hline" />

      <div className="loca-box">
        <h2> 서울대학교 연구공원 웨딩홀</h2>
        <div className="loca-map">지도?</div>
        <div>
          서울 관악구 관악로 1 연구공원 본관 1층
          <button
            onClick={() =>
              copyToClipboard(
                "서울 관악구 관악로 1 연구공원 본관 1층",
                "결혼식장 주소가 복사되었습니다."
              )
            }
          >
            복사
          </button>
        </div>
        <div>
          <button
            onClick={() =>
              window.open(
                "https://map.naver.com/p/search/서울대학교%20연구공원%20웨딩홀/place/13321741",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            네이버 지도에서 열기
          </button>
        </div>
        <div>
          <button
            onClick={() => window.open("", "_blank", "noopener,noreferrer")}
          >
            다음 지도에서 열기?
          </button>
        </div>
        <div>
          <button
            onClick={() => window.open("", "_blank", "noopener,noreferrer")}
          >
            T맵에서 열기
          </button>
        </div>
      </div>

      <div className="hline" />

      <div className="acc-box">
        <h2>마음 전하실 곳</h2>
        <AccList />
      </div>

      <div className="hline" />

      <div className="gal-box">
        <h2>동진 &amp; 인아</h2>
        <p>사진 넣을 곳</p>
      </div>
    </div>
  );
}

export default App;
