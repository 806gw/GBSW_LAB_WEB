import { Link } from "react-router-dom";
import styled from "styled-components";

export const TopCont = styled.div`
  @font-face {
    font-family: "Pretendard";
    src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }

  width: 100%;
  height: 100%;
  overflow-y: hidden;
  font-family: "Pretendard";
`;

export const Parent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: auto;
  padding: 20px 0;
`;

export const RentCont = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 2px 4px 12px #00000014;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 200px;
  height: 200px;

  .gbsw {
    width: 70px;
    height: 70px;
  }
  .arrow {
    color: #0b0b0b;
    margin-left: 10px;
    width: 20px;
  }
`;

export const LinkRent = styled(Link)`
  color: #0078ff;
  font-size: 18px;
  font-family: "Pretendard";
  font-weight: 900;
  text-decoration: none;
`;

export const RentSubCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
`;

export const NoticeCont = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 850px;
  height: 200px;
  padding-left: 40px;
  justify-content: start;
`;

export const NoticeSubCont = styled.div`
  width: 100%;
  height: 100%;
  text-align: start;
  margin-top: 15px;
  display: flex;
  align-items: center;

  .important_text {
    color: #fd1717;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const NoticeRuleCont = styled.div`
  font-size: 15px;
  color: #000;
  padding: 10px 0;

  .notice_text {
    font-weight: 700;
    margin: 0 0 10px 0;
  }

  .explanation {
    margin: 0;
    color: #878787;
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  width: auto;
  height: auto;
`;

export const BodyWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 1100px;
  max-height: 450px;
`;

export const RentalCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: #474747;
  color: #fff;
  font-family: "Pretendard";

  .list_detail {
    font-size: 15px;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: "Pretendard";
    text-align: center;
  }
`;

export const RentalUserCont = styled.div`
  width: 100%;
  overflow-y: auto;
  margin-bottom: 1rem;
  padding: 5px;
`;

export const RentalUserWrap = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: visible;
  text-overflow: ellipsis;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: 3.5rem;
  margin: 1rem auto 0;

  .user_detail {
    font-size: 13px;
    flex: 1;
    font-family: "Pretendard";
    text-align: center;
    position: relative;
  }

  .delete_btn {
    width: 20px;
    cursor: pointer;
  }
`;

export const DeleteDetail = styled.img`
  width: 20px;
  cursor: pointer;
`;

export const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  .tooltiptext {
    visibility: hidden;
    width: 150px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    font-size: 12px;
    word-wrap: break-word;
    white-space: normal;
    font-weight: 500;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
    margin-top: 8px;
  }

  &:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;

export const NotRentTextWrap = styled.div`
  margin-top: 20px;
`;