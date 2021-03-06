import React, {Component} from "react";
import {Link} from "react-router-dom";
// import "./sign.scss";
import styled from 'styled-components';
import Button from "./Button";

const Modal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
`

const LoginModal = styled.div`
    flex-basis : 320px;
    background-color: white;
    position: relative;
    box-sizing: border-box;
    margin: 56px auto;
`

const LoginMid = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Close = styled.div`
    float: right;
    font-size: 28px;
    margin-right : 5px;
`

const ModalContents = styled.div`
    margin: 0 auto;
      width: 100%;
      position: relative;
      padding: 0 20px 32px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 0 20px 20px 20px;

`

const Title = styled.div`
    font-size : 24px;
    text-align : center;
    margin-bottom : 20px;
    letter-spacing : 3px;
`

const RoomTitle = styled.div`
    display : flex;
    flex-wrap : nowrap;
    font-size : 14px;
    margin-top: 20px;
    align-items: center;
    padding: 8px;
`
const Input = styled.input`
        font-size : 12px;
        border-style:none;
        border-bottom:solid 1px #cacaca;
        border-collapse:collapse;
        width : ${props => props.width};
`

const SelectGame = styled.div`
    display : flex;
    justify-content = center;
    flex-direction : column;
`

const Select = styled.select`
    font-size : 12px;
    text-align : center;
    width : 40%;
    margin : 30px auto;
`

const Games = styled.option`
    font-size : 12px;
    text-align : center;
`
const SelectPrivate = styled.div`
    display : flex;
    flex-wrap : nowrap;
    justify-content : center;
    margin-bottom : 10px;
`

const Footer = styled.div`
    display : flex;
    flex-wrap : nowrap;
    justify-content : space-between;
`
const ResultButton = styled.button`
    width : 100%;
    font-size : 14px;
    padding : 5px;
`

class SignIn extends Component {

    state = {
        email: "",
        password: "",
    };

    // loginHandler = (e) => {
    //     const {name, value} = e.target;
    //     this.setState({[name]: value});
    // };   ////????????? ????????? ??????


    render() {
        const {isOpen, close} = this.props;   //?????? ???????????? props??? ????????????
        return (
            <>
                {isOpen ? (
                    ////?????? isopen(this.state.isModalOpen)??? true?????? ????????? ?????? false???  null
                    /// <div onClick={close}> ???????????? ?????? ?????? ????????? ????????? ????????? ????????? ??????
                    ///<span className="close" onClick={close}>&times;</span> x?????? ????????? ??????
                    ////<div className="modalContents" onClick={isOpen}> ????????? ????????? ?????? ???????????? ????????????
                    /// true??? ????????? ????????? ????????? ????????????.

                    <Modal>
                        <LoginMid onClick={() => close}>
                            <LoginModal>
                                <Close className="close" onClick={close}>
                                     &times;
                <               /Close>
                                <ModalContents onClick={isOpen}>
                                    <Title>
                                        StartPlayUp
                                    </Title>
                                    <RoomTitle>
                                        <span>?????? : &nbsp; </span>
                                        <Input type="text" maxLength="20" width='200px'/>
                                    </RoomTitle>
                                    <RoomTitle>
                                        <span>?????? : &nbsp; </span>
                                        <input type="checkbox"/>
                                        <Input type="password" maxLength='10' width='180px'/>
                                    </RoomTitle>
                                    <SelectGame>
                                        <Select>
                                            <Games>?????????</Games>
                                            <Games>?????? ?????????</Games>
                                            <Games>?????????</Games>
                                        </Select>
                                    </SelectGame>
                                    <SelectPrivate>
                                        <span>???????????? : </span>
                                        <input type="checkbox"/>
                                    </SelectPrivate>
                                </ModalContents>
                                <Footer>
                                    <ResultButton onClick={close}>??????</ResultButton>
                                </Footer>
                            </LoginModal>
                        </LoginMid>
                    </Modal>
                ) : null}
            </>
        );
    }
}

export default SignIn;