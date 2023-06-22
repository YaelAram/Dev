import assert from "node:assert";
import test from "node:test";

test("Try strict equal", () => {
    assert.strictEqual(1, 1);
});

test("Try deepStrictEqual", async () => {
    const a = { a: 1 };
    const b = { a: 1 };
    assert.deepStrictEqual(a, b);
});

test("Fetch method", async () => {
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await resp.json();

    assert.strictEqual("ditto", data.name);
});
