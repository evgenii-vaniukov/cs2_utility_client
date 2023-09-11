import { useGrenadesFilter } from "./../context/filter_grenades_context";
import Checkbox from "./checkbox";

export default function FilterBar() {
  const { map_names, sides, grenade_types, mapPositions, mapPositionsLength } =
    useGrenadesFilter();

  const maps = map_names.map((map) => {
    return (
      <Checkbox
        key={map.map_code}
        map_code={map.map_code}
        full_name={map.map_full_name}
        label={map.map_code}
        name="map_name"
      ></Checkbox>
    );
  });

  const types_of_grenades = grenade_types.map((type) => {
    return (
      <Checkbox
        key={type.grenade_code}
        label={type.grenade_code}
        full_name={type.grenade_full_name}
        name="type"
      ></Checkbox>
    );
  });

  const side = sides.map((side) => {
    return (
      <Checkbox
        key={side.side_code}
        label={side.side_code}
        full_name={side.side_full_name}
        name="side"
      ></Checkbox>
    );
  });

  const from = mapPositions.map((position) => {
    return (
      <Checkbox
        key={position.position_code}
        label={position.position_code}
        name="from"
        full_name={position.position_name}
      ></Checkbox>
    );
  });

  const to = mapPositions.map((position) => {
    return (
      <Checkbox
        key={position.position_code}
        label={position.position_code}
        name="to"
        full_name={position.position_name}
      ></Checkbox>
    );
  });

  return (
    <>
      <section>
        <p>Maps</p>
        {maps}
      </section>
      <section>
        <p>Side</p>
        {side}
      </section>
      <section>
        <p>Tick Rate</p>
        <Checkbox
          key={64}
          label={64}
          full_name={64}
          name="tick_rate"
        ></Checkbox>
        <Checkbox
          key={128}
          name="tick_rate"
          label={128}
          full_name={128}
        ></Checkbox>
      </section>
      <section>
        <p>Grenade Type</p>
        {types_of_grenades}
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
