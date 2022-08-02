// Import the 'idb' package to use with IndexedDB
import { openDB } from 'idb';

// This function is used to start up the database
const initdb = async () =>
// Creates a database named jate and uses version 1
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // Create a new object store for the data and gives it a key name of 'id' and auto increments
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id, content) => {
  console.log('Put content in database');
  // Create a connection to the database database and version we want to use
  const jateDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges
  const transaction = jateDb.transaction('jate', 'readwrite');

  // Open up the desired object store.
  const store = transaction.objectStore('jate');

  // Use the .put() method to update a piece of data from the database based on the id
  const request = store.put({ id: id, jate: content });

  // Get confirmation of the request.
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

// Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('Get content from the database');
  // Create a connection to the database database and version we want to use
  const jateDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges
  const transaction = jateDb.transaction('jate', 'readonly');

  // Open up the desired object store.
  const store = transaction.objectStore('jate');

  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result;
};

// Calls the database function
initdb();
