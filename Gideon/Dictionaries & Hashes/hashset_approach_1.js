const defaultToStrFn = (value) => {
  if (value === null) {
    return "NULL";
  } else if (value === undefined) {
    return "UNDEFINED";
  } else if (typeof value === "string" || value instanceof String) {
    return `${value}`;
  }

  return value.toString();
};

class HashSet {
  constructor(toStrFn = defaultToStrFn) {
    this.toStrFn = toStrFn;
    this.items = {};
  }

  loseLoseHashKey(key) {
    if (typeof key === "number") {
      return key;
    }

    key = this.toStrFn(key);
    let total = 0;

    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % 37;
  }

  hasCode(key) {
    return this.loseLoseHashKey(key);
  }

  add(element) {
    this.items[this.hasCode(element)] = { element };
  }
  delete(element) {
    const valuePair = this.items[this.hasCode(element)];

    if (valuePair != null) {
      delete this.items[this.hasCode(element)];
      return true;
    }

    return false;
  }

  clear() {}
  size() {}
}
