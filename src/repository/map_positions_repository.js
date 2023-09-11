import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export async function getMapPositions(map_name, checked, setMapPositions) {
  const querySnapshot = await getDocs(
    collection(db, "maps", map_name, "positions"),
  );

  const mapPositions = [];

  querySnapshot.forEach((doc) => {
    mapPositions.push(doc.data());
  });
  return mapPositions;
}
