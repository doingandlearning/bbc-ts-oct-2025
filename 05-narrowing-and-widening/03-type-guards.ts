const elem = document.getElementById("headline");

elem?.onclick;

//    ??  this side runs when the left side is null
//    &&  this side runs when the left side is not null

elem?.ATTRIBUTE_NODE && elem.ATTRIBUTE_NODE;

if (elem) {
  elem;
} else {
  elem;
}

elem!.ATTRIBUTE_NODE; // Trust me!

if (!elem) throw new Error("elem does not exist");

elem.onabort;

function contains(text: string, search: string | RegExp) {
  if (typeof search === "string") {
    // type guards
    return text.includes(search);
  }
  return Boolean(search.exec(text));
}

function contains2(text: string, search: string | RegExp) {
  if (search instanceof RegExp) {
    return Boolean(search.exec(text));
  }
  return text.includes(search);
}

contains("I love porridge", "love");
contains("I love porridge", /love/);

// Object keys
//   is
// satisfies keyword
// Discriminated union
