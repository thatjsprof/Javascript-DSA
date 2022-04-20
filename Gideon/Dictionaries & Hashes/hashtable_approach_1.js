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
}

class HashTable {
  constructor(toStrFn = defaultToStrFn) {
    this.toStrFn = toStrFn;
    this.table = {};
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

  put(key, value) {
    //
    if (key != null && value != null) {
      const tableKey = this.hasCode(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }

    return false;
  }
  remove(key) {
    //
    if (key != null) {
      delete this.table[this.hasCode(key)];
      return true;
    }

    return false;
  }
  get(key) {
    //
    if (key != null) {
      return this.table[this.hasCode(key)];
    }

    return undefined;
  }
}
