import { v4 as uuidv4, v5 as uuidv5 } from "uuid";
import Checkbox from "./buttons/checkbox";

export default function FilterBar({ mapPositions, handleFilter }) {
  const from = mapPositions.map((position) => {
    return (
      <Checkbox
        key={position}
        label={position}
        name="from"
        handleFilter={handleFilter}
      ></Checkbox>
    );
  });

  const to = mapPositions.map((position) => {
    return (
      <Checkbox
        key={position}
        label={position}
        name="to"
        handleFilter={handleFilter}
      ></Checkbox>
    );
  });

  const t = <p>try</p>;

  return (
    <>
      <section>
        <p>Tick Rate</p>
        <Checkbox
          key={64}
          label={64}
          name="tick_rate"
          handleFilter={handleFilter}
        ></Checkbox>
        <Checkbox
          key={128}
          name="tick_rate"
          label={128}
          handleFilter={handleFilter}
        ></Checkbox>
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
