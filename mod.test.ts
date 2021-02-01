import { assertEquals } from "https://deno.land/std@0.84.0/testing/asserts.ts";
import LRU from "./mod.ts";

const lru = new LRU(10);

Deno.test("Add single entry.", () => {
  lru.set("hello", "world");
  assertEquals(lru.get("hello"), "world", "Value is different.");
});

Deno.test("Add another entry.", () => {
  lru.set("foo", "bar");
  assertEquals(lru.get("foo"), "bar", "Value is different.");
});

Deno.test("Get nonexistent key", () => {
  assertEquals(lru.get("test"), undefined, "Entry found is not null");
});

Deno.test("Get size", () => {
  assertEquals(lru.size, 2, "Size is bigger than it should");
});

Deno.test("Has key", () => {
  assertEquals(lru.has("hello"), true, "Couldn't find key");
  assertEquals(lru.has("foo"), true, "Couldn't find key");
  assertEquals(lru.has("bar"), false, "Found key");
});

Deno.test("Get object", () => {
  assertEquals(lru.object, { hello: "world", foo: "bar" });
});

Deno.test("Get values", () => {
  assertEquals(lru.values, ["world", "bar"]);
});

Deno.test("Get keys", () => {
  assertEquals(lru.keys, ["hello", "foo"]);
});

Deno.test("Loop through", () => {
  const temp: { [key: string]: any } = [];
  lru.forEach((value, key) => temp.push({ [key]: value }));
  assertEquals(temp, [{ hello: "world" }, { foo: "bar" }]);
});

Deno.test("Map to array", () => {
  const temp = lru.map(([key, value]) => ({ [key]: value }));
  assertEquals(temp, [{ hello: "world" }, { foo: "bar" }]);
});

Deno.test("Filter cache", () => {
  const temp = lru.filter(([key, value]) => value === "bar");
  assertEquals(temp, [["foo", "bar"]]);
});

Deno.test("Reduce cache", () => {
  const temp = lru.reduce((prev, current) => {
    if (current[1] === "bar") prev.push(current[1]);
    return prev;
  }, [] as string[]);
  assertEquals(temp, ["bar"]);
});

Deno.test("Clear everything", () => {
  lru.clear();
  assertEquals(lru.size, 0);
});
