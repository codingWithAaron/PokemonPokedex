import GenerationOne from "./GenerationOne";
import GenerationTwo from "./GenerationTwo";

function Generations(){
    return (
        <>
            <div className="d-flex justify-content-center mt-4">
                <h1>Generations</h1>
            </div>
            <GenerationOne />
            <GenerationTwo />
        </>
    )
}

export default Generations