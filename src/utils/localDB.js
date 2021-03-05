/*
 * Check if the storage is avaliable on this browser of the specified type
 */
const storageAvailable = (type) => {
  let storage;
  try {
    storage = window[type];
    let x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (err) {
    return (
      err instanceof DOMException &&
      (err.code === 22 ||
        err.code === 1014 ||
        err.name === "QuotaExceededError" ||
        err.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      storage &&
      storage.length !== 0
    );
  }
};
/*
 * Listen for changes to the localDB or a specific table
 */
const listenForChanges = (table) => {
  window.addEventListener("storage", (event) => {
    if (table) {
      if (event.key === "table") {
        return read(table);
      }
    } else {
      return {
        key: event.key,
        newValue: event.newValue,
        oldValue: event.oldValue,
      };
    }
  });
};
/*
 * Return a parsed array of the stored table
 * If there is only one item in the table, still return an array
 * If there is not items in the table, still return an empty array
 */
const tableArray = (table) => {
  if (localStorage.getItem(table)) {
    try {
      let records = JSON.parse(localStorage.getItem(table));
      if (records.length > 0) {
        return records;
      } else {
        return [records];
      }
    } catch {
      let records = [localStorage.getItem(table)];
      return records;
    }
  } else {
    return [];
  }
};
/*
 * Create a unique identifier for each entry into the localDB
 * Return the uuid
 */
const newuuid = () => {
  let dt = new Date().getTime();
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};
/*
 * Push a new entry into a table
 * Return the new items uuid
 */
const pushEntry = (table, entry) => {
  let array = tableArray(table);
  let newTable;
  if (entry) {
    array.push(entry);
  }
  newTable = JSON.stringify(array);
  localStorage.setItem(table, newTable);
  if (entry) return entry.uuid;
  else return -1;
};
/*
 * Push a new array as a replacement for a table
 * Return true
 */
const pushArray = (table, array) => {
  localStorage.setItem(table, JSON.stringify(array));
  return true;
};
/*
 * Update a record within a table with each key value pairing
 * If a key does not currently exist, create that key and add the value
 * Return the new, updated, record
 */
const updateAllParams = (table, record, changes) => {
  let paramsToChange = Object.keys(changes);
  paramsToChange.forEach((param, index) => {
    record[param] = changes[param];
  });
  remove(table, { uuid: record.uuid });
  create(table, record);
  return record;
};
/*
 * Find the index of a given object within an array of objects
 * This is basically the structure of each table
 * Return -1 or the index
 */
const indexOfObject = (table, attribute, value) => {
  for (let i = 0; i < table.length; i += 1) {
    if (table[i][attribute] == value) {
      return i;
    }
  }
  return -1;
};
/*
 * Remove a single record based on the uuid, from a given table
 * Return -1 or true
 */
const removeItem = (table, record) => {
  let array = tableArray(table);
  let index = indexOfObject(array, "uuid", record.uuid);
  if (index == -1) {
    return -1;
  } else {
    array.splice(index, 1);
    pushArray(table, array);
    return true;
  }
};
/*
 * Create a new entry(s) into a table
 * Or if the table does not exist create the table and insert entry(s)
 * Return the new entry(s)
 */
const create = (table, entry) => {
  if (!entry.length) {
    if (!entry.uuid) entry.uuid = newuuid();
    let id = pushEntry(table, entry);
    return read(table, { uuid: id });
  } else {
    let ids = [];
    entry.forEach((record, index) => {
      record.uuid = newuuid();
      ids.push(pushEntry(table, record));
    });
    let params = ids.map((i) => {
      uuid: i.uuid;
    });
    return read(table, params);
  }
};
/*
 * Return an entry from a table, or an array of entries
 * If there are no results, return an empty array
 */
const read = (table, params) => {
  if (!localStorage.getItem(table)) return false;
  if (params) {
    let result = JSON.parse(localStorage.getItem(table));
    Object.keys(params).forEach((key, index) => {
      let value = params[key];
      result = result.filter((record) => record[key] == value);
    });
    return result;
  } else {
    return JSON.parse(localStorage.getItem(table));
  }
};
/*
 * Update one or more entries in a table with the given key value pairs
 * Return the updated record(s)
 */
const update = (table, changes, params) => {
  if (!localStorage.getItem(table)) return false;
  let records;
  if (params) records = read(table, params);
  else records = read(table);
  if (!records) return -1;
  let newRecords = [];
  let newRecord;
  if (records.length > 0) {
    records.forEach((record, index) => {
      newRecords.push(updateAllParams(table, record, changes));
    });
  } else {
    newRecord = updateAllParams(records, changes);
  }
  return newRecords.length > 0 ? newRecords : newRecord;
};
/*
 * Remove record(s) with the given parameters from the given table
 * Return true
 */
const remove = (table, params) => {
  let records = read(table, params);
  records.forEach((record) => removeItem(table, record));
  return true;
};
/*
 * Drop a given table from the localDB
 * Return true
 */
const drop = (table) => {
  localStorage.removeItem(table);
  return true;
};
/*
 * Clear the entire localDB
 * Return true
 */
const clear = () => {
  localStorage.clear();
  return true;
};
/*
 * Open IndexedDB table
 */
const open = (name, version) => {
  let openRequest = indexedDB.open(name, version);
  openRequest.onupgradeneeded = () => {
    // the existing database version is less than 2 (or it doesn't exist)
    let db = openRequest.result;
    switch (
      event.oldVersion // existing db version
    ) {
      case 0:
      // version 0 means that the client had no database
      // perform initialization
      case 1:
      // client had version 1
      // update
    }
  };
  openRequest.onerror = () => {
    console.error("Error", openRequest.error);
  };
  openRequest.onsuccess = () => {
    let db = openRequest.result;
    db.onversionchange = function () {
      db.close();
      alert("Database is outdated, please reload the page.");
    };
  };
};
const delete = (name) => {
  let deleteRequest = indexedDB.deleteDatabase(name);
};
