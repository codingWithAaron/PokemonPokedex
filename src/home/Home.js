import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Home(){
    return (
        <>
            <div className="mt-4">
                <h1>Pokemon Pokedex</h1>
            </div>
            <div className="text-center">
                <div className="card-header">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="#">Generations</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Home