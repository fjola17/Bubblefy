import React from 'react'
import Link from 'react-router-dom/Link';

const HomePage = () => {
    return(
        <div>
            <h1>Welcome to Bubblefy </h1>
            <div className="FrontElement"><img src="https://i.imgur.com/ZiNsJOp.png" className="w-25 h-25"/><Link to="/Bubbles">View available bubbles</Link> </div>
            <div className="FrontElement"><img src="https://i.imgur.com/5ugrK8x.png" className="w-25 h-25"/><Link to="/Bundles">View available bundles</Link></div>
    </div>
    )
}
export default HomePage;