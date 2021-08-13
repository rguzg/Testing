import { describe, expect, test, afterEach, afterAll, beforeAll, beforeEach } from '@jest/globals';
import FauxDatabase from '../faux_database';

// beforeEach and afterEach can be used to do repeated setup work for many tests

const database = new FauxDatabase();

// beforeEach(() => {
//     database.InitializeDatabase();
// });

beforeEach(async () => {
    await database.AsyncInitializeDatabase();
});

afterEach(() => {
    database.PulpDatabase();
});

test("Add city object to database", () => {
    database.AddToDatabase("Querétaro", {city: "Querétaro", population: 2000000});

    let city = database.GetRecordFromDatabase("Querétaro");

    expect(city).toMatchObject({city: "Querétaro", population: 2000000});
});

test("Database should be empty now", () => {
    expect(database.GetDataFromDatabase()).toEqual({});
});