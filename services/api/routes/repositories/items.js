import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";

export async function dummyFunction() {
  return [
    { itemId: 1 },
    { itemId: 2 },
    { itemId: 3 },
    { itemId: 4 },
    { itemId: 5 },
    { itemId: 6 },
    { itemId: 7 },
    { itemId: 8 },
    { itemId: 9 }
  ];
}
