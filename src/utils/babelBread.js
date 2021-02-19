Array.prototype.asyncForEach = async function (callback) {
  for (let i = 0; i < this.length; i++) {
    await callback(this[i], i);
  }
}

class Babeljax {
  constructor (table, filter) {
    this.base_url = 'https://babelboxdb.herokuapp.com/api/'
    this.table = table,
    this.filter = filter,
    this.data,
    this.queue = Promise.resolve();
  }

  then (callback) {
    callback(this.queue);
  }

  chain (callback) {
      return this.queue = this.queue.then(callback);
   }

   isRegExp (pattern) {
     console.log(typeof pattern)
     if (typeof pattern == 'string') return 'String'
     else if (typeof pattern == 'number') return 'Number'
     else return 'RegExp'
   }

   browse (table = this.table, raw = false) {
    this.chain(async () => {
      let data = await fetch(`${this.base_url}${table}`)
      data = await data.json()
      this.data = data
      console.log(this.data)
      return this.data
    })
    return this
  }

  chainedAsyncCalc = (y) => {
     this.chain((x) => {
       if (!x) { x = y; }
       return x * x;
     })
     return this;
   }

  async read (table = this.table, filter = this.filter, raw = false) {
    let data = await fetch(`${this.base_url}${table}`)
    data = await data.json()
    if (raw) return data
    else {
      this.data = data
      return this
    }
  }

  edit (table = this.table, filter = this.filte) {

  }

  add (table = this.table, filter = this.filte) {

  }

  destroy (table = this.table, filter = this.filte) {

  }

  where (filters) {
    this.chain(async (data) => {
      let keys = Object.keys(filters)
      keys.forEach((filter, i) => {
        let type = this.isRegExp(filters[filter])
        switch (type) {
          case 'String':
            this.data = data.filter(d => d[filter] == filters[filter])
            break;
          case 'Number':
            this.data = data.filter(d => d[filter] == filters[filter])
            break;
          case 'RegExp':
            this.data = data.filter(d => filters[filter].test(d[filter]))
            break;
          default:
            this.data = data
        }
      })
      console.log(this.data)
      return this.data
    })

    return this
  }

  join (...tables) {
    this.chain(async (data) => {
      await tables.asyncForEach( async (c) => {
        console.log(c) //{}
        await data.asyncForEach( async (d, i) => {
          if (d[Object.keys(c)[0]]) {
            let connection = await new Babeljax().browse(c[Object.keys(c)[0]])
            .where({ [c.col]: d[Object.keys(c)[0]] })
            console.log(connection)
            data[i][Object.keys(c)[0]] = connection
          }
        })
      })
      console.log(data)
      return data
    })

    return this
  }
}

const bb = () => {
  return new Babeljax()
}

export default bb
