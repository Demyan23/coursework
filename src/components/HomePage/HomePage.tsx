import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";
function HomePage() {
    return (
        <div className="home-page">
            <Link to="/min-cut" className="cube">
                <h2>Algorithm</h2>
            </Link>
            <Link to="/heap" className="cube">
                <h2>Data Structure</h2>
            </Link>
        </div>

    );
}

export default HomePage;