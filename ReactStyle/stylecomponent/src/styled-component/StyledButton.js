import styled from 'styled-components';

const Wraapper = styled.div`
    border : 1px solid black;
    display : inline-block;
    padding : 1rem;
    border-radius : 3px;
    font-size : ${(props) => props.fontSize};
    & : hover{
        background : black;
        color : white;
    }
`;

const StyledButton = ({children, ...rest}) =>{
    return(
        <Wraapper fontSize = "1.25rem" {...rest}>
            {children}
        </Wraapper>
    );
};

export default StyledButton;