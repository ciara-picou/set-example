function mySet() {
  //to create a Set, we use the new keyword
  let set = new Set();
  console.log("to create a Set, we use the new keyword");
  console.log("let set = new Set", set);

  //to add a value to a Set, we use the add method
  // you may add booleans integers strings objects etc to a Set
  // but keep in mind that a Set will only accept unique values
  set.add(3);
  console.log("set.add(3)", set);

  set.add(5);
  console.log("set.add(5)", set);

  set.add(5);
  console.log(
    "You may not add duplicates to a set. If you try set.add(5) again you will get",
    set
  );

  set.add(7);
  console.log("set.add(7)", set);

  set.add(9);
  console.log("set.add(9 )", set);

  //to find out how many elements are in the set we use the size property
  console.log("set.size = ", set.size);

  // to check whether a Set includes a values we may use the has method
  set.has(10);
  set.has(3);

  console.log("set", set);
  console.log("set.has(10)", set.has(10));
  console.log("set.has(3)", set.has(3));

  //To remove an element from a Set we may use the delete method

  console.log("before", set);

  set.delete(5);

  console.log("set.delete(5)");
  console.log("after", set);

  //we can loop through a set with a for of loop
  console.log("for(let item of set){console.log(item)}");
  for (let item of set) {
    console.log(item);
  }

  //we can convert a Set to an array using from or spread operator
  console.log("2 ways to get an array from a set:");
  let arr = Array.from(set);
  console.log("Array.from(set)", Array.from(set));

  let myArr = [...set];
  console.log("arr = [...set]", [...set]);

  //we can remove all elements from the Set object with the clear method
  console.log("before set.clear()", set);
  set.clear();
  console.log("after set.clear()", set);
}

mySet();
