import React from 'react'

const Home = ({history}) => {
    return(
        <div>
            <h2>Home</h2>
            <button onClick={() =>{
                history.push('./pad')
            }}>자바스크립트를 사용하여 이동</button>
        </div>
    )
}

export default Home;