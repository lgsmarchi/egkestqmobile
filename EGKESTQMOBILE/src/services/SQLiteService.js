
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  { name: 'inventory.db', location: 'default' },
  () => {},
  error => { console.log(error); }
);

export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS inventory (id INTEGER PRIMARY KEY AUTOINCREMENT, patrimonio TEXT, tipo TEXT, modelo TEXT, proprietario TEXT);',
      [],
      () => { console.log('Table created successfully'); },
      error => { console.log(error); }
    );
  });
};

export const addItem = (patrimonio, tipo, modelo, proprietario) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO inventory (patrimonio, tipo, modelo, proprietario) VALUES (?, ?, ?, ?)',
        [patrimonio, tipo, modelo, proprietario],
        (tx, results) => { resolve(results); },
        error => { reject(error); }
      );
    });
  });
};

export const getItems = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM inventory',
        [],
        (tx, results) => { resolve(results.rows.raw()); },
        error => { reject(error); }
      );
    });
  });
};
