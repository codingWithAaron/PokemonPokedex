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

function Generations() {
  const [filterAll, setFilterAll] = useState(true);
  const [filterGenOne, setFilterGenOne] = useState(false);
  const [filterGenTwo, setFilterGenTwo] = useState(false);
  const [filterGenThree, setFilterGenThree] = useState(false);
  const [filterGenFour, setFilterGenFour] = useState(false);
  const [filterGenFive, setFilterGenFive] = useState(false);
  const [filterGenSix, setFilterGenSix] = useState(false);
  const [filterGenSeven, setFilterGenSeven] = useState(false);
  const [filterGenEight, setFilterGenEight] = useState(false);
  const [filterGenNine, setFilterGenNine] = useState(false);

  function filterAllOnClick() {
    setFilterAll(!filterAll);
    setFilterGenOne(false);
    setFilterGenTwo(false);
    setFilterGenThree(false);
    setFilterGenFour(false);
    setFilterGenFive(false);
    setFilterGenSix(false);
    setFilterGenSeven(false);
    setFilterGenEight(false);
    setFilterGenNine(false);
  }

  function filterGenOneOnClick() {
    setFilterAll(false);
    setFilterGenOne(true);
    setFilterGenTwo(false);
    setFilterGenThree(false);
    setFilterGenFour(false);
    setFilterGenFive(false);
    setFilterGenSix(false);
    setFilterGenSeven(false);
    setFilterGenEight(false);
    setFilterGenNine(false);
  }

  function filterGenTwoOnClick() {
    setFilterAll(false);
    setFilterGenOne(false);
    setFilterGenTwo(true);
    setFilterGenThree(false);
    setFilterGenFour(false);
    setFilterGenFive(false);
    setFilterGenSix(false);
    setFilterGenSeven(false);
    setFilterGenEight(false);
    setFilterGenNine(false);
  }

  function filterGenThreeOnClick() {
    setFilterAll(false);
    setFilterGenOne(false);
    setFilterGenTwo(false);
    setFilterGenThree(true);
    setFilterGenFour(false);
    setFilterGenFive(false);
    setFilterGenSix(false);
    setFilterGenSeven(false);
    setFilterGenEight(false);
    setFilterGenNine(false);
  }

  function filterGenFourOnClick() {
    setFilterAll(false);
    setFilterGenOne(false);
    setFilterGenTwo(false);
    setFilterGenThree(false);
    setFilterGenFour(true);
    setFilterGenFive(false);
    setFilterGenSix(false);
    setFilterGenSeven(false);
    setFilterGenEight(false);
    setFilterGenNine(false);
  }

  function filterGenFiveOnClick() {
    setFilterAll(false);
    setFilterGenOne(false);
    setFilterGenTwo(false);
    setFilterGenThree(false);
    setFilterGenFour(false);
    setFilterGenFive(true);
    setFilterGenSix(false);
    setFilterGenSeven(false);
    setFilterGenEight(false);
    setFilterGenNine(false);
  }

  function filterGenSixOnClick() {
    setFilterAll(false);
    setFilterGenOne(false);
    setFilterGenTwo(false);
    setFilterGenThree(false);
    setFilterGenFour(false);
    setFilterGenFive(false);
    setFilterGenSix(true);
    setFilterGenSeven(false);
    setFilterGenEight(false);
    setFilterGenNine(false);
  }

  function filterGenSevenOnClick() {
    setFilterAll(false);
    setFilterGenOne(false);
    setFilterGenTwo(false);
    setFilterGenThree(false);
    setFilterGenFour(false);
    setFilterGenFive(false);
    setFilterGenSix(false);
    setFilterGenSeven(true);
    setFilterGenEight(false);
    setFilterGenNine(false);
  }

  function filterGenEightOnClick() {
    setFilterAll(false);
    setFilterGenOne(false);
    setFilterGenTwo(false);
    setFilterGenThree(false);
    setFilterGenFour(false);
    setFilterGenFive(false);
    setFilterGenSix(false);
    setFilterGenSeven(false);
    setFilterGenEight(true);
    setFilterGenNine(false);
  }

  function filterGenNineOnClick() {
    setFilterAll(false);
    setFilterGenOne(false);
    setFilterGenTwo(false);
    setFilterGenThree(false);
    setFilterGenFour(false);
    setFilterGenFive(false);
    setFilterGenSix(false);
    setFilterGenSeven(false);
    setFilterGenEight(false);
    setFilterGenNine(true);
  }

  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <h1>Generations</h1>
      </div>
      <nav className="d-flex justify-content-center">
        <ul className="d-flex">
          <li className="btn">
            <button onClick={filterAllOnClick}>All</button>
          </li>
          <li className="btn">
            <button onClick={filterGenOneOnClick}>Gen 1</button>
          </li>
          <li className="btn">
            <button onClick={filterGenTwoOnClick}>Gen 2</button>
          </li>
          <li className="btn">
            <button onClick={filterGenThreeOnClick}>Gen 3</button>
          </li>
          <li className="btn">
            <button onClick={filterGenFourOnClick}>Gen 4</button>
          </li>
          <li className="btn">
            <button onClick={filterGenFiveOnClick}>Gen 5</button>
          </li>
          <li className="btn">
            <button onClick={filterGenSixOnClick}>Gen 6</button>
          </li>
          <li className="btn">
            <button onClick={filterGenSevenOnClick}>Gen 7</button>
          </li>
          <li className="btn">
            <button onClick={filterGenEightOnClick}>Gen 8</button>
          </li>
          <li className="btn">
            <button onClick={filterGenNineOnClick}>Gen 9</button>
          </li>
        </ul>
      </nav>
      {filterAll ? (
        <>
          <GenerationOne />
          <GenerationTwo />
          <GenerationThree />
          <GenerationFour />
          <GenerationFive />
          <GenerationSix />
          <GenerationSeven />
          <GenerationEight />
          <GenerationNine />{" "}
        </>
      ) : (
        ""
      )}
      {filterGenOne ? <GenerationOne /> : ""}
      {filterGenTwo ? <GenerationTwo /> : ""}
      {filterGenThree ? <GenerationThree /> : ""}
      {filterGenFour ? <GenerationFour /> : ""}
      {filterGenFive ? <GenerationFive /> : ""}
      {filterGenSix ? <GenerationSix /> : ""}
      {filterGenSeven ? <GenerationSeven /> : ""}
      {filterGenEight ? <GenerationEight /> : ""}
      {filterGenNine ? <GenerationNine /> : ""}
    </>
  );
}

export default Generations;
