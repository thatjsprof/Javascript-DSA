const convertToString = (value) => {
    if (value === null) {
      return 'Null'
    } else if (value === undefined) {
      return 'Undefined'
    } else if (value instanceof String || typeof value === 'string') {
      return `${value}`
    } else {
      return value.toString()
    }
  }
  
  class ValueObject {
    constructor (key, value) {
      this.key = key
      this.value = value
    }
  }
  
  class Dictionary {
    constructor (stringFunc = convertToString) {
      this.stringFunc = stringFunc
      this.table = {}
    }
    
    set (key, value) {
      if (key !== null && key !== undefined) {
        const tableKey = this.stringFunc(key)
        this.table[tableKey] = new ValueObject(key, value)
        return true
      }
      
      return false
    }
    
    get (key) {
      if (this.hasKey(key)) {
        const valueObject = this.table[this.stringFunc(key)]
        return valueObject
      }
      
      return undefined
    }
    
    remove (key) {
      if (this.hasKey(key)) {
        const toDelete = this.table[this.stringFunc(key)]
        delete this.table[this.stringFunc(key)]
        return toDelete
      }
      
      return undefined
    }
    
    hasKey (key) {
      return this.table[this.stringFunc(key)] !== null
    }
    
    helperValue () {
      return Object.values(this.table)
    }
    
    extractProperty (index) {
      return this.helperValues().map((value) => value[index])
    }
    
    keys () {
      return this.extractProperty('key')
    }
    
    values () {
      return this.extractProperty('value')
    }
    
    forEach (callbackFunc) {
      const valueObject = this.helperValues()
      
      for (let i = 0; i < valueObject.length; i++) {
        const result = callbackFunc(valueObject[i].key, valueObject[i].value)
        
        if (result === false) {
          break
        }
      }
    }
  }
  
  const checkFunction = () => 2
  
  const dictionary = new Dictionary()
  
  dictionary.set(true, 'apply')
  dictionary.set('true', 'juniper')
  dictionary.set(1, 'apply')
  dictionary.set(2, 'apply')
  dictionary.set(checkFunction, 'check')
  
  dictionary.get('convert')
  
  console.log(dictionary)
  
  const map = new Map()
  map.set('true', '1')
  map.set(true, '2')
  
  console.log(map)