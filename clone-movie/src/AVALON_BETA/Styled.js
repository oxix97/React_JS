import styled from "styled-components";

export const PageFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${(props) => props.color};
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  border: 5px solid black;
`;
export const Frame = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 5px solid ${(props) => props.color};
  margin: 15px auto;
  padding: 40px;
`;
export const RoleList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const UserList = styled.div`
  display: flex;
  flex-direction: row;
`;
export const GameFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px;
`;
export const GameState = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  border: 5px solid black;
`;
export const PublicFrame = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Circle = styled.div`
  display: flex;
  border-radius: 70%;
  flex-direction: flex-end;
  flex-wrap: wrap;
  padding: 20px;
  border: 2px solid black;
  background: ${(props) => props.color};
`;
export const VoteStageFrame = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const User = styled.div`
    display : flex;
    flex-direction : column;
    flex-wrap : wrap;
    margin : 0 auto;
    border 3px solid black;
    padding : 5px;
`;
export const PlayerList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

// https://www.transparenttextures.com/
export const Container = styled.div`
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #042813;
  background-image: url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png");
`;

// Define card size
// width: 130px;
// height: 210px;
const Card = styled.div`
  width: 25vw;
  height: 36vh;
`;

// Place the card in center
// top: 50%;
// left: 50%;
// position: fixed;
export const CardWrapper = styled(Card)`
  display: flex;
  flex-direction: row wrap;
  margin: 0 auto;
  transform: translate(-50%, -50%);
`;

// Poker card default style
export const PokerCard = styled(Card)`
  border-radius: 5px;
  /* https://css3gen.com/box-shadow/ */
  box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.75);
`;
// Poker card in back-side
export const PokerBack = styled(PokerCard)`
  /* https://www.magicpattern.design/tools/css-backgrounds/ */
  background-color: #ffffff;
  opacity: 0.8;
  background-color: #f3f3f4;
  opacity: 1;
  background-image: linear-gradient(135deg, #a90c08 25%, transparent 25%),
    linear-gradient(225deg, #a90c08 25%, transparent 25%),
    linear-gradient(45deg, #a90c08 25%, transparent 25%),
    linear-gradient(315deg, #a90c08 25%, #f3f3f4 25%);
  background-position: 20px 0, 20px 0, 0 0, 0 0;
  background-size: 20px 20px;
  background-repeat: repeat;
  border: 5px solid #fff;
`;
export const FrontImg = styled.img`
  display: flex;
  align-item: inherit;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
// Poker card in front-side
// background-color: #fff;
export const PokerFront = styled(PokerCard)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: none;

  & > span {
    font-size: 20px;
    font-family: sans-serif;
    font-weight: bold;
    display: flex;
    align-items: center;
    width: 100%;
    color: #a90c08;
  }

  & > span:nth-child(2) {
    font-size: 45px;
    flex: 1 1 0;
    justify-content: center;
  }

  & > span:last-child {
    transform: rotate(-180deg);
  }

  & > span::selection {
    background-color: transparent;
  }
`;
