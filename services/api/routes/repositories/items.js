import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";

export async function dummyFunction() {
  return [
    { id: 1, category: "red", name: "ex", description: "" },
    { id: 2, category: "red", name: "oh", description: "" },
    { id: 3, category: "red", name: "naught", description: "" },
    { id: 4, category: "green", name: "ex", description: "" },
    { id: 5, category: "green", name: "oh", description: "" },
    { id: 6, category: "green", name: "naught", description: "" },
    { id: 7, category: "blue", name: "ex", description: "" },
    { id: 8, category: "blue", name: "oh", description: "" },
    { id: 9, category: "blue", name: "naught", description: "" }
  ];
}
