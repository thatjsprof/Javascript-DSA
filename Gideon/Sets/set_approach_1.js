class Set {
  constructor() {
    this.items = {};
  }

  add(element) {
    //
    if (this.has(element)) {
      return false;
    }
    this.items[element] = element;
    return true;
  }
  delete(element) {
    if (!this.has(element)) {
      return false;
    }
    delete this.items[element];
    return true;
  }
  has(element) {
    return element in this.items;
  }
  clear() {
    this.items = {};
  }
  size() {
    return Object.keys(this.items).length;
  }
  values() {
    return Object.values(this.items);
  }

  union(otherSet) {
    const unionSet = new Set();
    for (let i = 0; i < this.size(); i++) {
      unionSet.add(this.keys()[i]);
    }

    for (let i = 0; i < otherSet.size(); i++) {
      unionSet.add(otherSet.keys()[i]);
    }

    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new Set();
    let values = this.values();
    let otherValues = otherSet.values();
    let smallerSet = values;
    let largerSet = otherValues;
    if (values.length > otherValues.length) {
      smallerSet = otherValues;
      largerSet = values;
    }

    for (let i = 0; i < smallerSet.length; i++) {
      if (largerSet.includes(smallerSet[i])) {
        intersectionSet.add(smallerSet[i]);
      }
    }

    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new Set();

    const values = this.values();
    const otherValues = otherSet.values();

    for (let i = 0; i < values.length; i++) {
      if (!otherValues.includes(values[i])) {
        differenceSet.add(values[i]);
      }
    }

    return differenceSet;
  }

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }

    let isSubset = true;

    const values = this.values();
    const otherValues = otherSet.values();

    for (let i = 0; i < values.length; i++) {
      if (!otherValues.includes(values[i])) {
        isSubset = false;
        return false;
      }
    }

    return isSubset;
  }
}
