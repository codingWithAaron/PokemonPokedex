import GenerationOne from "./GenerationOne";
import GenerationTwo from "./GenerationTwo";
import GenerationThree from "./GenerationThree";
import GenerationFour from "./GenerationFour";
import GenerationFive from "./GenerationFive";
import GenerationSix from "./GenerationSix";
import GenerationSeven from "./GenerationSeven";
import GenerationEight from "./GenerationEight";
import GenerationNine from "./GenerationNine";
import { useState } from "react";

function Generations(){
    const [filterAll, setFilterAll] = useState(true)
    const [filterGenOne, setFilterGenOne] = useState(false)

    function filterAllOnClick(){
        setFilterAll(!filterAll)
    }

    function filterGenOneOnClick(){
        setFilterAll(!filterAll)
        setFilterGenOne(!filterGenOne)
    }



    return (
        <>
            <div className="d-flex justify-content-center mt-4">
                <h1>Generations</h1>
            </div>
            <nav className="d-flex justify-content-center">
                <ul className="d-flex">
                    <li className="btn"><button onClick={filterAllOnClick}>All</button></li>
                    <li className="btn"><button onClick={filterGenOneOnClick}>Gen 1</button></li>
                    <li className="btn"><button>Gen 2</button></li>
                    <li className="btn"><button>Gen 3</button></li>
                    <li className="btn"><button>Gen 4</button></li>
                    <li className="btn"><button>Gen 5</button></li>
                    <li className="btn"><button>Gen 6</button></li>
                    <li className="btn"><button>Gen 7</button></li>
                    <li className="btn"><button>Gen 8</button></li>
                    <li className="btn"><button>Gen 9</button></li>
                </ul>
            </nav>
            {filterAll ? <><GenerationOne />
                <GenerationTwo />
                <GenerationThree />
                <GenerationFour />
                <GenerationFive />
                <GenerationSix />
                <GenerationSeven />
                <GenerationEight />
                <GenerationNine /> </> : ""}
            {filterGenOne ? <GenerationOne /> : ""}
        </>
    )
}

export default Generations