// implementing hashtable with an array
class HashTableArr{
    constructor(){
        this.items = new Array(200);
        this.size = 0;
    }

    _hash(key){
        let total = 0;
        for(i in key){
            total += key.charCodeAt(i);
        }
        return total % this.items.length;
    }

    add(key,value){
        let hashed = this._hash(key);
        if(this.has(key)){
            throw new Error("Value already exists");
        }
        this.items[hashed] = value;
        this.size++;
    }

    get(key){
        let hashed = this._hash(key);
        return this.items[hashed];
    }

    remove(key){
        let hashed = this._hash(key);
        let val = this.items[hashed];
        this.items[hashed] = null;
        return val;
        this.size--;
    }
    
    has(key){
      let hashed = this._hash(key);
      // this.items.hasOwnProperty(key)
      if(this.items[hashed]) return true;  
    }
}

const hash = new HashTableArr()

hash.add("abcd", "abseg")
hash.add("abcd", "abseg")

console.log(hash);


// with an object
class HashTable{
    constructor(){
        this.items = {};
    }

    add(key, value){
        if(this.has(key)){
            throw new Error(`Hashtable already has ${key}`)
        }
        this.items[key] = value;
    }
    
    has(key){
        // this.items.hasOwnProperty(key)
      if(this.items[key]) return true;  
    }
    
    remove(key){
        if(!this.has(key)){
            throw new Error(`Hashtable does not have ${key}`)
        }
        let val = this.items[key];
        delete this.items[key];
        return val;
    }

    get(key){
         if(!this.has(key)){
            throw new Error(`Hashtable does not have ${key}`)
         }
        return this.items[key];
    }

    list(){
    	return Object.entries(this.items).map((items)=>({
            key: items[0],
            value: items[1]
        }))
    }

    count(){
        return Object.keys(this.items).length;
    }
}

// const hash = new HashTable()

// hash.add(1,"one")
// hash.add(2,"one")
// hash.add(4,"one")
// hash.add(5,"one")
// hash.count()
// console.log(hash.list());