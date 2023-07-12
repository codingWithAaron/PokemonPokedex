import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import GenerationOne from "./GenerationOne";

function Generations(){
    return (
        <>
            <div className="mt-4">
                <h1>Generations</h1>
            </div>
            <GenerationOne />
        </>
    )
}

export default Generations