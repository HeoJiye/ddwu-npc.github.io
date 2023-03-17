import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "./img/npcLogo.png";
import line from "./img/Vector 1.png";
import "./css/useScrollFadeIn.js";
import logoAni from "./img/logo_ani.webp";

const ImageDiv = styled.img`
  @media (max-width: 749px) {
    margin: auto;
    width: 100%;
    height: 200px;
    margin-top: 282px;
  }
  @media (min-width: 750px) and (max-width: 1199px) {
    width: 100%;
    height: 300px;
    margin-top: 417px;
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    width: 100%;
    height: 450px;
    margin-top: 289px;
  }
`;
const TextDiv = styled.div`
  @media (max-width: 749px) {
    color: white;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 31px;
    margin-top: 824px;
  }
  @media (min-width: 750px) and (max-width: 1199px) {
    color: white;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    margin-top: 1594px;
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    color: white;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    margin-top: 858px;
  }
`;
const EngDiv = styled.div`
  @media (max-width: 749px) {
    color: white;
    font-family: "Noto Sans";
    font-style: normal;
    font-size: 15px;
  }
  @media (min-width: 750px) and (max-width: 1199px) {
    color: white;
    font-family: "Noto Sans";
    font-style: normal;
    font-size: 25px;
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    color: white;
    font-family: "Noto Sans";
    font-style: normal;
    font-size: 20px;
  }
`;
const UniDiv = styled.div`
  @media (max-width: 749px) {
    color: white;
    font-family: "Noto Sans";
    font-style: normal;
    font-size: 30px;
    font-weight: 600;
    margin-top: 389px;
    text-align: left;
    margin-left: 32px;
  }
  @media (min-width: 750px) and (max-width: 1199px) {
    color: white;
    font-family: "Noto Sans";
    font-style: normal;
    font-size: 50px;
    margin-top: 630px;
    margin-left: 35px;
    text-align: left;
    margin-left: 56px;
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    color: white;
    font-family: "Noto Sans";
    font-style: normal;
    font-size: 50px;
    margin-top: 391px;
    text-align: left;
    margin-left: 35px;
  }
`;
const Name = styled.div`
  @media (max-width: 749px) {
    color: white;
    font-family: "Noto Sans";
    font-style: normal;
    font-size: 25px;
    font-weight: 600;
    text-align: left;
    margin-left: 32px;
  }
  @media (min-width: 750px) and (max-width: 1199px) {
    color: white;
    font-family: "Noto Sans";
    font-style: normal;
    font-size: 45px;
    margin-left: 35px;
    text-align: left;
    margin-left: 56px;
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    color: white;
    font-family: "Noto Sans";
    font-style: normal;
    font-size: 45px;
    text-align: left;
    margin-left: 35px;
  }
`;
const CircleDiv = styled.div`
  @media (max-width: 749px) {
    display: inline-block;
    width: 166.95px;
    height: 116.95px;
    background: #1e1e1e;
    border: 1px solid black;
    border-radius: 100px;
    text-align: center;
    line-height: 30px;
    margin-right: 10px;
    font-family: Noto Sans;
    font-size: 16px;
    color: #b4b4b4;
    text-align: center;
    padding-top: 40px;
    margin-top: 50px;
  }
  @media (min-width: 750px) and (max-width: 1199px) {
    display: inline-block;
    width: 166.95px;
    height: 116.95px;
    background: #1e1e1e;
    border: 1px solid black;
    border-radius: 100px;
    text-align: center;
    line-height: 25px;
    margin-right: 10px;
    font-family: Noto Sans;
    font-size: 18px;
    color: #b4b4b4;
    text-align: center;
    padding-top: 50px;
    margin-top: 50px;
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    display: inline-block;
    width: 260px;
    height: 170px;
    background: #1e1e1e;
    border: 1px solid black;
    border-radius: 200px;
    text-align: center;
    line-height: 25px;
    margin-right: 16px;
    font-family: Noto Sans;
    font-size: 18px;
    color: #b4b4b4;
    text-align: center;
    padding-top: 90px;
    margin-top: 50px;
  }
`;
const TextDiv2 = styled.div`
  @media (max-width: 749px) {
    width: 350px;
    color: #e8e8e8;
    margin-top: 35.58px;
    font-size: 16px;
    line-height: 21.79px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    font-family: Noto Sans;
  }
  @media (min-width: 750px) and (max-width: 1199px) {
    width: 530px;
    color: #e8e8e8;
    margin-top: 51.05px;
    font-size: 20px;
    line-height: 27.24px;
    margin-left: 5%;
    text-align: left;
    font-family: Noto Sans;
  }
  @media (min-width: 1200px) {
    color: black;
  }
`;
const TextDiv3 = styled.div`
  @media (max-width: 749px) {
    width: 331px;
    color: white;
    margin-top: 150px;
    font-size: 26px;
    line-height: 35.79px;
    margin-left: 5%;
    font-weight: 600;
    text-align: left;
    font-family: Noto Sans;
  }
  @media (min-width: 750px) and (max-width: 1199px) {
    color: white;
    margin-top: 400px;
    font-size: 40px;
    line-height: 54px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-weight: 600;
    font-family: Noto Sans;
  }
  @media (min-width: 1200px) {
    color: white;
    margin-top: 250px;
    font-size: 40px;
    font-weight: 600;
    line-height: 54px;
    margin-left: 3%;
    text-align: left;
    font-family: Noto Sans;
  }
`;
const TextDiv4 = styled.div`
  @media (max-width: 749px) {
    width: 350px;
    color: #b4b4b4;
    font-size: 13px;
    line-height: 19.79px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    font-family: Noto Sans;
    font-weight: 500;
  }
  @media (min-width: 750px) and (max-width: 1199px) {
    width: 80%;
    color: #b4b4b4;
    font-size: 20px;
    line-height: 27px;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    font-weight: 500;
    font-family: Noto Sans;
  }
  @media (min-width: 1200px) {
    color: #b4b4b4;
    font-size: 20px;
    font-weight: 500;
    line-height: 27px;
    margin-left: 3%;
    text-align: left;
    font-family: Noto Sans;
  }
`;
const RectDiv = styled.div`
  @media (max-width: 749px) {
    display: inline-block;
    width: 350px;
    height: 81px;
    background: #1e1e1e;
    border: 1px solid black;
    border-radius: 20px;
    text-align: center;
    line-height: 29px;
    margin-right: auto;
    margin-left: auto;
    font-family: Noto Sans;
    font-size: 22px;
    color: white;
    font-weight: 600;
    margin-top: 16px;
    padding-top: 24px;
  }
  @media (min-width: 750px) and (max-width: 1199px) {
    display: inline-block;
    width: 270px;
    height: 140px;
    background: #1e1e1e;
    border: 1px solid black;
    border-radius: 20px;
    text-align: center;
    line-height: 38px;
    margin-right: auto;
    margin-left: auto;
    font-family: Noto Sans;
    font-size: 28px;
    color: white;
    font-weight: 600;
    margin-top: 36px;
    padding-top: 60px;
    margin-right: 23px;
  }
  @media (min-width: 1200px) {
    display: inline-block;
    width: 270px;
    height: 140px;
    padding-top: 60px;
    background: #1e1e1e;
    border: 1px solid black;
    border-radius: 20px;
    text-align: center;
    line-height: 38px;
    margin-right: auto;
    margin-left: auto;
    font-family: Noto Sans;
    font-size: 28px;
    color: white;
    font-weight: 600;
    margin-top: 39px;
    margin-right: 21px;
  }
`;

const ImageLine = styled.img`
  @media (max-width: 749px) {
    display: inline-block;
    width: 20px;
    height: 315.5px;
    margin-left: 51px;
  }
  @media (min-width: 750px) and (max-width: 1199px) {
    display: inline-block;
    width: 50px;
    height: 412.5px;
    margin-left: 85px;
    margin-top: 99px;
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    display: inline-block;
    width: 50px;
    height: 355px;
    margin-left: 100%;
    margin-top: 76px;
  }
`;
const LineDetail = styled.div`
  position: relative;
  float: left;
  display: inline;
  z-index: 1;
`;
const CircleDiv2_1 = styled.div`
  @media (max-width: 749px) {
    display: flex;
    position: relative;
    width: 38px;
    height: 38px;
    background: #e8e8e8;
    border-radius: 100px;
    text-align: center;
    line-height: 27px;
    font-family: Noto Sans;
    font-size: 20px;
    font-weight: 600;
    color: #121212;
    text-align: center;
    margin-top: 49px;
    margin-left: 32px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  @media (min-width: 750px) and (max-width: 1199px) {
    display: flex;
    position: absolute;
    width: 59px;
    height: 59px;
    background: #e8e8e8;
    border-radius: 100px;
    text-align: center;
    line-height: 27px;
    font-family: Noto Sans;
    font-size: 25px;
    font-weight: 600;
    color: #121212;
    text-align: center;
    margin-top: 67.75px;
    margin-left: 64px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    display: flex;
    position: absolute;
    width: 59px;
    height: 59px;
    background: #e8e8e8;
    border-radius: 100px;
    text-align: center;
    line-height: 34px;
    font-family: Noto Sans;
    font-size: 25px;
    font-weight: 600;
    color: #121212;
    text-align: center;
    margin-top: 44px;
    margin-left: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
`;
const CircleDiv2_2 = styled.div`
  @media (max-width: 749px) {
    display: flex;
    position: absolute;
    width: 38px;
    height: 38px;
    background: #e8e8e8;
    border-radius: 100px;
    text-align: center;
    line-height: 27px;
    font-family: Noto Sans;
    font-size: 20px;
    font-weight: 600;
    color: #121212;
    text-align: center;
    margin-top: 70px;
    margin-left: 51px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  @media (min-width: 750px) and (max-width: 1199px) {
    display: flex;
    z-index: 2;
    position: absolute;
    width: 59px;
    height: 59px;
    background: #e8e8e8;
    border-radius: 100px;
    text-align: center;
    line-height: 27px;
    font-family: Noto Sans;
    font-size: 25px;
    font-weight: 600;
    color: #121212;
    text-align: center;
    margin-top: 209.4px;
    margin-left: 94px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    display: flex;
    z-index: 2;
    position: absolute;
    width: 59px;
    height: 59px;
    background: #e8e8e8;
    border-radius: 100px;
    text-align: center;
    line-height: 34px;
    font-family: Noto Sans;
    font-size: 25px;
    font-weight: 600;
    color: #121212;
    text-align: center;
    margin-top: 167px;
    margin-left: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
  }
`;
const CircleDiv2_3 = styled.div`
  @media (max-width: 749px) {
    display: flex;
    z-index: 2;
    position: absolute;
    width: 38px;
    height: 38px;
    background: #e8e8e8;
    border-radius: 100px;
    text-align: center;
    line-height: 27px;
    font-family: Noto Sans;
    font-size: 20px;
    font-weight: 600;
    color: #121212;
    text-align: center;
    margin-top: 178px;
    margin-left: 32px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 750px) {
    display: flex;
    z-index: 2;
    position: absolute;
    width: 59px;
    height: 59px;
    background: #e8e8e8;
    border-radius: 100px;
    text-align: center;
    line-height: 27px;
    font-family: Noto Sans;
    font-size: 25px;
    font-weight: 600;
    color: #121212;
    text-align: center;
    margin-top: 348px;
    margin-left: 64px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    display: flex;
    z-index: 2;
    position: absolute;
    width: 59px;
    height: 59px;
    background: #e8e8e8;
    border-radius: 100px;
    text-align: center;
    line-height: 34px;
    font-family: Noto Sans;
    font-size: 25px;
    font-weight: 600;
    color: #121212;
    text-align: center;
    margin-top: 285px;
    margin-left: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
  }
`;

const CircleDiv2_4 = styled.div`
@media (max-width: 749px){
  display:flex;
  z-index: 2;
  position: absolute;
  width: 38px;
  height: 38px;
  background: #E8E8E8;
  border-radius: 100px;
  text-align: center;
  line-height: 27px;
  font-family: Noto Sans;
  font-size: 20px;
  font-weight: 600;
  color: #121212;
  text-align:center;
  margin-top: 278px;
  margin-left: 51px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content : center;
  align-items : center;
} 
@media (min-width: 750px){
  display:flex;
  z-index: 2;
  position: absolute;
  width: 59px;
  height: 59px;
  background: #E8E8E8;
  border-radius: 100px;
  text-align: center;
  line-height: 27px;
  font-family: Noto Sans;
  font-size: 25px;
  font-weight: 600;
  color: #121212;
  text-align:center;
  margin-top: 486px;
  margin-left: 94px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content : center;
  align-items : center;
} 
@media (min-width: 1200px) and (max-width: 1920px){
  display:flex;
  z-index: 2;
  position: absolute;
  width: 59px;
  height: 59px;
  background: #E8E8E8;
  border-radius: 100px;
  text-align: center;
  line-height: 34px;
  font-family: Noto Sans;
  font-size: 25px;
  font-weight: 600;
  color: #121212;
  text-align:center;
  margin-top: 404px;
  margin-left: 100%;RecT
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content : center;
  align-items : center;
} 
`;
const CircleText1 = styled.div`
  @media (max-width: 749px) {
    font-size: 30px;
    font-weight: 700;
    color: white;
  }
  @media (min-width: 750px) and (max-width: 1199px) {
    font-size: 30px;
    font-weight: 700;
    line-height: 41px;
    color: white;
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    font-size: 40px;
    font-weight: 700;
    line-height: 54px;
    color: white;
  }
`;
const RectText = styled.div`
  @media (max-width: 749px) {
    font-size: 12px;
    font-weight: 500;
    color: white;
    line-height: 17px;
    text-align: center;
  }
  @media (min-width: 750px) and (max-width: 1199px) {
    font-size: 14px;
    font-weight: 500;
    color: white;
    line-height: 19px;
    text-align: center;
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    font-size: 14px;
    font-weight: 500;
    color: white;
    line-height: 19px;
    text-align: center;
  }
`;
const Text1 = styled.div`
  @media (max-width: 749px) {
    display: flex;
    position: absolute;
    font-size: 22px;
    font-weight: 600;
    color: #f3f3f3;
    margin-left: 90px;
    margin-top: 37px;
  }
  @media (min-width: 750px) {
    display: flex;
    position: absolute;
    font-size: 30px;
    font-weight: 600;
    color: #f3f3f3;
    margin-left: 143px;
    margin-top: 61px;
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    display: flex;
    position: absolute;
    font-size: 30px;
    font-weight: 600;
    color: #f3f3f3;
    margin-left: 12.5%;
    margin-top: 40px;
  }
`;
const Text1_1 = styled.div`
  @media (max-width: 749px) {
    display: flex;
    width: 63%;
    position: absolute;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #b4b4b4;
    margin-left: 90px;
    margin-top: 70px;
    text-align: left;
  }
  @media (min-width: 750px) and @media(max-width: 1199px) {
    display: flex;
    position: absolute;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #b4b4b4;
    margin-left: 143.36px;
    margin-top: 107px;
    text-align: left;
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    display: flex;
    position: absolute;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #b4b4b4;
    margin-left: 143.36px;
    margin-top: 86px;
    text-align: left;
  }
`;
const Text2 = styled.div`
  @media (max-width: 749px) {
    display: flex;
    position: absolute;
    font-size: 22px;
    font-weight: 600;
    color: #f3f3f3;
    margin-left: 109px;
    margin-top: 136px;
  }
  @media (min-width: 750px) {
    display: flex;
    position: absolute;
    font-size: 30px;
    font-weight: 600;
    color: #f3f3f3;
    margin-left: 173px;
    margin-top: 193px;
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    display: flex;
    position: absolute;
    font-size: 30px;
    font-weight: 600;
    color: #f3f3f3;
    margin-left: 180px;
    margin-top: 163px;
  }
`;
const Text2_1 = styled.div`
  @media (max-width: 749px) {
    display: flex;
    position: absolute;
    font-family: "Noto Sans";
    width: 70%;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #b4b4b4;
    margin-top: 169px;
    margin-left: 109px;
    text-align: left;
  }
  @media (min-width: 750px) {
    display: flex;
    position: absolute;
    font-family: "Noto Sans";
    width: 43%;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #b4b4b4;
    margin-top: 240px;
    margin-left: 173px;
    text-align: left;
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    display: flex;
    position: absolute;
    font-size: 16px;
    font-weight: 500;
    color: #b4b4b4;
    margin-left: 180px;
    margin-top: 210px;
  }
`;
const Text3 = styled.div`
  @media (max-width: 749px) {
    display: flex;
    position: absolute;
    font-size: 22px;
    font-weight: 600;
    color: #f3f3f3;
    margin-left: 90px;
    margin-top: 252px;
  }
  @media (min-width: 750px) {
    display: flex;
    position: absolute;
    font-size: 30px;
    font-weight: 600;
    color: #f3f3f3;
    margin-left: 143px;
    margin-top: 343px;
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    display: flex;
    position: absolute;
    font-size: 30px;
    font-weight: 600;
    color: #f3f3f3;
    margin-left: 150px;
    margin-top: 281px;
  }
`;
const Text3_1 = styled.div`
  @media (max-width: 749px) {
    display: flex;
    position: absolute;
    font-family: "Noto Sans";
    width: 70%;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #b4b4b4;
    margin-top: 285px;
    margin-left: 90px;
    text-align: left;
  }
  @media (min-width: 750px) {
    display: flex;
    position: absolute;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #b4b4b4;
    margin-top: 390px;
    margin-left: 143px;
    text-align: left;
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    display: flex;
    position: absolute;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #b4b4b4;
    margin-top: 328px;
    margin-left: 150px;
    text-align: left;
  }
`;
const Text4 = styled.div`
  @media (max-width: 749px) {
    display: flex;
    position: absolute;
    font-size: 22px;
    font-weight: 600;
    color: #f3f3f3;
    margin-left: 109px;
    margin-top: 352px;
  }
  @media (min-width: 750px) {
    display: flex;
    position: absolute;
    font-size: 30px;
    font-weight: 600;
    color: #f3f3f3;
    margin-left: 173px;
    margin-top: 471px;
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    display: flex;
    position: absolute;
    font-size: 30px;
    font-weight: 600;
    color: #f3f3f3;
    margin-left: 180px;
    margin-top: 399px;
  }
`;
const Text4_1 = styled.div`
  @media (max-width: 749px) {
    display: flex;
    position: absolute;
    font-family: "Noto Sans";
    width: 73%;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #b4b4b4;
    margin-top: 385px;
    margin-left: 109px;
    text-align: left;
  }
  @media (min-width: 750px) {
    display: flex;
    position: absolute;
    font-family: "Noto Sans";
    width: 65%;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #b4b4b4;
    margin-top: 518px;
    margin-left: 173px;
    text-align: left;
  }
  @media (min-width: 1200px) and (max-width: 1920px) {
    display: flex;
    position: absolute;
    font-family: "Noto Sans";
    width: 65%;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #b4b4b4;
    margin-top: 446px;
    margin-left: 180px;
    text-align: left;
  }
`;
const TextMent = styled.div`
  @media (min-width: 1200px) and (max-width: 1920px) {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    margin-left: 56px;
    margin-top: 3px;
    color: #e8e8e8;
    text-align: left;
  }
`;
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="MainDiv" style={{ background: "black", overflow: "hidden" }}>
        <picture>
          <source srcset="img.webp" type="imag/webp" />
          <ImageDiv src={logoAni} />
        </picture>
        {/* <ImageDiv src={logo}/> */}
        <TextDiv className="page">우리는 그 자체로 특별하다</TextDiv>
        <EngDiv className="page">
          <b>N</b>onesuchable <b>P</b>eople who <b>C</b>reates games
        </EngDiv>
        <UniDiv className="page">
          <b>동덕여자대학교</b>
        </UniDiv>
        <Name className="page">게임 개발 동아리 NPC</Name>
        <TextMent className="page">
          다양한 분야의 사람들과 협업, 구글 플레이 출시, 스터디 등 다양한 경험을
          쌓을 수 있습니다.
        </TextMent>
        <CircleDiv className="page" style={{ animationDelay: "1s" }}>
          창설년도<CircleText1>2019</CircleText1>
        </CircleDiv>
        <CircleDiv className="page" style={{ animationDelay: "1.3s" }}>
          누적 기수<CircleText1>7기</CircleText1>
        </CircleDiv>
        <CircleDiv className="page" style={{ animationDelay: "1.6s" }}>
          누적 동아리원<CircleText1>N명</CircleText1>
        </CircleDiv>
        <CircleDiv className="page" style={{ animationDelay: "1.9s" }}>
          런칭 게임<CircleText1>N개</CircleText1>
        </CircleDiv>
        <TextDiv2 className="page">
          다양한 분야의 사람들과 협업, 구글 플레이 출시, 스터디 등 다양한 경험을
          쌓을 수 있습니다.
        </TextDiv2>
        <TextDiv3 className="page">약 1년간 어떤 활동을 하게 되나요?</TextDiv3>
        <TextDiv4 className="page">
          희망자에 따라 MT, 스터디, 사이드 프로젝트 등 다양한 활동들도 함께할 수
          있습니다.
        </TextDiv4>
        <RectDiv className="page" style={{ animationDelay: "1s" }}>
          신입부원 프로젝트
          <RectText>약 한달동안 두개 팀으로 나누어져 프로젝트를 진행</RectText>
        </RectDiv>
        <RectDiv className="page" style={{ animationDelay: "1.3s" }}>
          NPC 해커톤
          <RectText>
            교내 학우들과 함께 일주일간 게임 개발, 우수 팀 상장 수여
          </RectText>
        </RectDiv>
        <RectDiv className="page" style={{ animationDelay: "1.6s" }}>
          7기 장기 프로젝트
          <RectText>
            7기 부원들과 함께 게임을 개발 (7기 부원들도 이루어진 단일 팀 구성)
          </RectText>
        </RectDiv>
        <RectDiv className="page" style={{ animationDelay: "1.9s" }}>
          NPC 수료
          <RectText>
            장기 프로젝트 마감까지 함께한 동아리원 분들께 수료증 수여
          </RectText>
        </RectDiv>
        <TextDiv3 className="page">
          신입부원 프로젝트는 어떻게 진행되나요?
        </TextDiv3>
        <LineDetail>
          <CircleDiv2_1 className="page" style={{ animationDelay: "1s" }}>
            01
          </CircleDiv2_1>
          <CircleDiv2_2 className="page" style={{ animationDelay: "1s" }}>
            02
          </CircleDiv2_2>
          <CircleDiv2_3 className="page" style={{ animationDelay: "1s" }}>
            03
          </CircleDiv2_3>
          <CircleDiv2_4 className="page" style={{ animationDelay: "1s" }}>
            04
          </CircleDiv2_4>
          <ImageLine
            src={line}
            className="page"
            style={{ animationDelay: "3s" }}
          />
        </LineDetail>
        <Text1 className="page" style={{ animationDelay: "2s" }}>
          팀 빌딩
        </Text1>
        <Text1_1 className="page" style={{ animationDelay: "2s" }}>
          기획 담당자의 발표를 듣고 본인이 참여하고 싶은 프로젝트에 참가
        </Text1_1>
        <Text2 className="page" style={{ animationDelay: "2s" }}>
          프로젝트 진행
        </Text2>
        <Text2_1 className="page" style={{ animationDelay: "2s" }}>
          약 한달간 팀원들과 게임을 열심히 개발, 정기회의를 통해 진행상황을
          공유하고 질의응답의 시간을 가집니다.
        </Text2_1>
        <Text3 className="page" style={{ animationDelay: "2s" }}>
          최종 제출 / 발표
        </Text3>
        <Text3_1 className="page" style={{ animationDelay: "2s" }}>
          한달동안 열심히 개발한 게임을 기한 내에 제출하고 발표합니다.
        </Text3_1>
        <Text4 className="page" style={{ animationDelay: "2s" }}>
          플레이 스토어 출시
        </Text4>
        <Text4_1 className="page" style={{ animationDelay: "2s" }}>
          프로젝트 최종 보수 + apk 추출 완료하여 플레이스토어에 출시 (개발자
          계정 지원)
        </Text4_1>
      </div>
    );
  }
  componentDidMount() {
    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.25, // 50%가 viewport에 들어와 있어야 callback 실행
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    }, options);

    const pageList = document.querySelectorAll(".page");
    pageList.forEach((element) => observer.observe(element));
  }
}

export default Main;
