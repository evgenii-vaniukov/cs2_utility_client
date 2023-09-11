import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export async function getGrenades(map_name) {
  const querySnapshot = await getDocs(
    collection(db, "maps", map_name, "grenades"),
    // test
  );

  const grenades = [];
  querySnapshot.forEach((doc) => {
    grenades.push(doc.data());
  });
  return grenades;
}
