import GenerationOne from "./GenerationOne";
import GenerationTwo from "./GenerationTwo";
import GenerationThree from "./GenerationThree";

function Generations(){
    return (
        <>
            <div className="d-flex justify-content-center mt-4">
                <h1>Generations</h1>
            </div>
            <GenerationOne />
            <GenerationTwo />
            <GenerationThree />
        </>
    )
}

export default Generations