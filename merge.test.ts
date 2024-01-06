import { merge } from "./merge";

test("Merge collections", () => {
    const collection_1 = [1,5,6,7,50];
    const collection_2 = [2,5,9,20,30];
    const result = merge(collection_1, collection_2);
    expect(result).toEqual([1,2,5,5,6,7,9,20,30,50]);
})