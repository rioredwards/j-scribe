import localforage from "localforage";
import { Cell } from "../state/cell";
import axios from "axios";

const cellsCache = localforage.createInstance({
  name: "cellsCache",
});

export async function fetchFromStorage() {
  let data: Cell[] | null;
  if (process.env.REACT_APP_WEB_BUILD === "true") {
    data = await cellsCache.getItem("cells");
    console.log("data: ", data);
    if (!data || data?.length === 0) {
      data = await fetchIntroFile();
    }
    return data;
  } else {
    const { data }: { data: Cell[] | null } = await axios.get("/cells");
    return data;
  }
}

export async function saveToStorage(cells: Cell[]) {
  if (process.env.REACT_APP_WEB_BUILD === "true") {
    await cellsCache.setItem("cells", cells);
  } else {
    await axios.post("/cells", { cells });
  }
}

async function fetchIntroFile() {
  try {
    const response = await fetch(`${process.env.PUBLIC_URL}/_intro.js`);
    const data: Cell[] = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("An unexpected error occurred.");
    }
    return [];
  }
}
