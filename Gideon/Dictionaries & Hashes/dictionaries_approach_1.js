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

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

class Dictionary {
  constructor(toStrFn = defaultToStrFn) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }

    return false;
  }
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }
  get(key) {
    const valuePair = this.table[this.toStrFn(key)];

    return valuePair == null ? undefined : valuePair.value;
  }
  clear() {
    this.table = {};
  }
  size() {
    return this.keyValues().length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  keys() {
    return this.keyValues().map((item) => item.key);
  }
  values() {
    return this.keyValues().map((item) => item.value);
  }
  keyValues() {
    return Object.values(this.table);
  }
  forEach(callBackFn) {
    const valuePairs = this.keyValues();

    for (let i = 0; i < valuePairs.length; i++) {
      const result = callBackFn(valuePairs[i]);

      if (result === false) {
        break;
      }
    }
  }

  toString() {
    if (this.size() === 0) {
      return "";
    }

    const valuePairs = this.keyValues();

    let objString = `${valuePairs[0].toString()}`;

    for (let i = 1; i < this.size(); i++) {
      objString += `,${valuePairs[i].toString()}`;
    }

    return objString;
  }
}
