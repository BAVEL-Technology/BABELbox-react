Array.prototype.asyncForEach = async function (callback) {
  for (let i = 0; i < this.length; i++) {
    await callback(this[i], i);
  }
};

Array.prototype.compare = function compare(param, dir) {
  const parameter = param;
  const direction = dir;
  return this.sort((a, b) => {
    // Use toUpperCase() to ignore character casing
    const A = a[parameter].toUpperCase();
    const B = b[parameter].toUpperCase();

    let comparison = 0;
    if (A > B) {
      comparison = 1;
    } else if (A < B) {
      comparison = -1;
    }
    if (direction == "ASC") return comparison;
    else if (direction == "DESC" || direction == "DSC") return comparison * -1;
  });
};

class Babeljax {
  constructor() {
    this.base_url = "https://babelbox.herokuapp.com/api/";
    this.data, (this.queue = Promise.resolve());
  }

  then(callback) {
    callback(this.queue);
  }

  chain(callback) {
    return (this.queue = this.queue.then(callback));
  }

  isRegExp(pattern) {
    if (typeof pattern == "string") return "String";
    else if (typeof pattern == "number") return "Number";
    else return "RegExp";
  }

  browse(table, limit, skip, sort, direction) {
    this.chain(async () => {
      let params = {};
      if (limit) params.limit = limit;
      if (skip) params.skip = skip;
      if (sort) params.sort = sort;
      if (direction) params.direction = direction;
      let query;
      if (params) {
        let array = Object.keys(params);
        query = array.map((p) => `${p}=${params[p]}`).join("");
      }
      let data = await fetch(`${this.base_url}${table}?${query}`);
      data = await data.json();
      this.data = data;
      return this.data;
    });
    return this;
  }

  chainedAsyncCalc = (y) => {
    this.chain((x) => {
      if (!x) {
        x = y;
      }
      return x * x;
    });
    return this;
  };

  read(table, filter) {
    this.chain(async () => {
      let params = Object.keys(filter);
      let query = params.map((p) => `${p}=${filter[p]}`).join("");
      let data = await fetch(`${this.base_url}${table}?${query}`);
      data = await data.json();
      this.data = data;
      return this.data;
    });
    return this;
  }

  edit(table, filters, updates) {
    this.chain(async () => {
      let data = await fetch(`${this.base_url}${table}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filters,
          updates,
        }),
      });
      data = await data.json();
      this.data = data;
      return this.data;
    });
    return this;
  }

  add(table, body) {
    this.chain(async () => {
      let data = await fetch(`${this.base_url}${table}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      data = await data.json();
      this.data = data;
      return this.data;
    });
    return this;
  }

  destroy(table = this.table, filter = this.filte) {}

  random() {
    this.chain(async (data) => {
      this.data = data[Math.floor(Math.random() * Math.floor(data.length))];
      return this.data;
    });

    return this;
  }

  sort(param, caseInsensitive) {
    this.chain(async (data) => {
      let direction = param[0] == "-" ? "DESC" : "ASC";
      param = param.substring(1);
      this.data = data.compare(param, direction);
      return this.data;
    });
    return this;
  }

  where(filters) {
    this.chain(async (data) => {
      let keys = Object.keys(filters);
      keys.forEach((filter, i) => {
        let type = this.isRegExp(filters[filter]);
        switch (type) {
          case "String":
            this.data = data.filter((d) => d[filter] == filters[filter]);
            break;
          case "Number":
            this.data = data.filter((d) => d[filter] == filters[filter]);
            break;
          case "RegExp":
            this.data = data.filter((d) => filters[filter].test(d[filter]));
            break;
          default:
            this.data = data;
        }
      });
      return this.data;
    });

    return this;
  }

  join(...tables) {
    this.chain(async (data) => {
      await tables.asyncForEach(async (c) => {
        console.log(c); //{col: table, "col": param}
        await data.asyncForEach(async (d, i) => {
          if (d[Object.keys(c)[0]]) {
            let connection = await new Babeljax()
              .browse(c[Object.keys(c)[0]])
              .where({ [c.col]: d[Object.keys(c)[0]] });
            console.log(connection);
            data[i][Object.keys(c)[0]] = connection;
          }
        });
      });
      console.log(data);
      return data;
    });

    return this;
  }
}

const bb = () => {
  return new Babeljax();
};

export default bb;
