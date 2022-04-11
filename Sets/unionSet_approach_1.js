class Set {
  constructor(items) {
    this.items = {};

    if (items) {
      this.bulkAddItems(items);
    }
  }

  bulkAddItems(items) {
    items.forEach((value) => this.add(value));
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }

    return false;
  }

  delete(element) {
    const toDelete = this.items[element];
    delete this.items[element];
    return toDelete;
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  subset(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }

    return this.values().every((value) => {
      return otherSet.has(value);
    });
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.entries(this.items).length;
  }

  values() {
    return Object.values(this.items);
  }
}

const createSet = (array) => {
  const newSet = new Set();

  array.forEach((value) => newSet.add(value));

  return newSet.values();
};

// The union method is able to work this way because our set accepts unique values

const unionSet = (set1, set2) => {
  const unionSet = new Set();

  set1.forEach((value) => unionSet.add(value));
  set2.forEach((value) => unionSet.add(value));

  return unionSet;
};

// The difference set just basically iterates over the first set and returns the values that are not in the second set

const differenceSet = (set1, set2) => {
  const differenceSet = new Set();

  set1.forEach((value) => {
    if (!set2.includes(value)) differenceSet.add(value);
  });

  return differenceSet;
};

// Kind of similar to the difference set

const intersectionSet = (set1, set2) => {
  const intersectionSet = new Set();

  set1.forEach((value) => {
    if (set2.includes(value)) intersectionSet.add(value);
  });

  return intersectionSet;
};

const set1 = createSet([1, 2, 3]);

const set2 = createSet([4, 5, 6]);

// Implementing these sets using the spread operator

const union = new Set([...set1, ...set2]);
const difference = new Set([...set1])
  .values()
  .filter((value) => set2.includes(value));
const intersection = new Set([...set1])
  .values()
  .filter((value) => !set2.includes(value));

const unionSetApplication = unionSet(set1, set2);
const differenceSetApplication = differenceSet(set1, set2);
const intersectionSetApplication = intersectionSet(set1, set2);

console.log(union);
