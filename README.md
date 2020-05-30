# LRU

![](https://img.shields.io/github/workflow/status/liltoto/lru/Test/master?style=for-the-badge)
![](https://img.shields.io/github/size/liltoto/LRU/mod.ts?style=for-the-badge)
![](https://img.shields.io/github/languages/top/liltoto/lru?style=for-the-badge)
![](https://img.shields.io/github/license/liltoto/lru?style=for-the-badge)

LRU is using [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) as underlying cache.

# Table of contents

- [Usage](#usage)
- [Set, get and remove](#set-get-and-remove)
- [Has](#has)
- [Size](#size)
- [Object](#object)
- [Keys](#keys)
- [Values](#values)
- [ForEach](#foreach)
- [Map](#map)
- [Filter](#filter)
- [Reduce](#reduce)
- [Clear](#clear)

## Usage

Import LRU and create new LRU object

```typescript
import LRU from "https://deno.land/x/lru/mod.ts";

const lru = new LRU(500); // define your max amount of entries, in this example is 500
```

## Set, get and remove

Methods to get,set and remove key:value pair.

```typescript
lru.set("key", "value");
lru.get("key");
lru.remove("key");
```

## Has

Returns true if an element with the specified key exists in the cache otherwise false

```typescript
lru.has("key");
```

## Size

Returns amount of entries in the cache

```typescript
lru.size;
```

## Object

Returns entries as object

```typescript
lru.object;
```

## Keys

Returns array of all keys

```typescript
lru.keys;
```

## Values

Returns array of all values

```typescript
lru.values;
```

## ForEach

Executes a provided function once for each array element

```typescript
lru.forEach((value, key) => {
  // code
});
```

## Map

Method creates a new array populated with the results of calling a provided function on every element in the calling array

```typescript
lru.map(([key, value]) => {
  // code
});
```

## Filter

Creates a new array with all elements that pass the test implemented by the provided function

```typescript
lru.filter(([key, value]) => {
  // code
});
```

## Reduce

Executes a reducer function (that you provide) on each element of the array, resulting in single output value

```typescript
lru.reduce((previousValue, currentValue, currentIndex) => {
  // code
}, initialValue);
```

## Clear

Removes all entries in the cache

```typescript
lru.clear();
```
