import { v4 as uuidv4, v5 as uuidv5 } from "uuid";
import Checkbox from "./buttons/checkbox";

export default function FilterBar({ mapPositions }) {
  const from = mapPositions.map((position) => {
    return <Checkbox key={uuidv4()} label={position}></Checkbox>;
  });

  const to = mapPositions.map((position) => {
    return <Checkbox key={uuidv4()} label={position}></Checkbox>;
  });

  const t = <p>try</p>;

  return (
    <>
      <section>
        <p>Tick Rate</p>
        <Checkbox label={64}></Checkbox>
        <Checkbox label={128}></Checkbox>
      </section>
      <section>
        <p>From</p>
        {from}
      </section>
      <section>
        <p>To</p>
        {to}
      </section>
    </>
  );
}
