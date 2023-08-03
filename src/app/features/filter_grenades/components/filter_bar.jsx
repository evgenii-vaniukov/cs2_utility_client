import Checkbox from "./checkbox";

export default function FilterBar({
  map_names,
  mapPositions,
  grenade_types,
  handleFilter,
  getMapPositions,
  mapPositionsLength,
}) {
  const maps = map_names.map((map) => {
    return (
      <Checkbox
        key={map}
        label={map}
        name="map_name"
        handleFilter={handleFilter}
        getMapPositions={getMapPositions}
      ></Checkbox>
    );
  });

  const types = grenade_types.map((type) => {
    return (
      <Checkbox
        key={type}
        label={type}
        name="type"
        handleFilter={handleFilter}
      ></Checkbox>
    );
  });

  const from = mapPositions.map((position) => {
    return (
      <Checkbox
        key={position.position_code}
        label={position.position_code}
        name="from"
        position_full_name={position.position_name}
        handleFilter={handleFilter}
      ></Checkbox>
    );
  });

  const to = mapPositions.map((position) => {
    return (
      <Checkbox
        key={position.position_code}
        label={position.position_code}
        name="to"
        position_full_name={position.position_name}
        handleFilter={handleFilter}
      ></Checkbox>
    );
  });

  const t = <p>try</p>;

  return (
    <>
      <section>
        <p>Maps</p>
        {maps}
      </section>
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
        <p>Grenade Type</p>
        {types}
      </section>
      <section>
        {mapPositionsLength > 0 ? <p>From</p> : <></>}
        {from}
      </section>
      <section>
        {mapPositionsLength > 0 ? <p>To</p> : <></>}
        {to}
      </section>
    </>
  );
}
