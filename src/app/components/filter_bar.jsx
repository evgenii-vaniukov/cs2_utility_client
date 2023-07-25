import { v4 as uuidv4, v5 as uuidv5 } from "uuid";
import Checkbox from "./buttons/checkbox";

export default function FilterBar({
  mapPositions,
  handleTickRateFilter,
  handleFromFilter,
  handleToFilter,
}) {
  const from = mapPositions.map((position) => {
    return (
      <Checkbox
        key={position}
        label={position}
        handleFilter={handleFromFilter}
      ></Checkbox>
    );
  });

  const to = mapPositions.map((position) => {
    return (
      <Checkbox
        key={position}
        label={position}
        handleFilter={handleToFilter}
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
          handleFilter={handleTickRateFilter}
        ></Checkbox>
        <Checkbox label={128} handleFilter={handleTickRateFilter}></Checkbox>
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
