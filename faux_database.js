// A faux database to be used for testing. It stores JavaScript Objects

class FauxDatabase{
    #database;

    constructor(){
        this.#database = null;
    }

    AsyncInitializeDatabase = () => {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                this.#database = {};
                resolve();
            }, 4000);
        });

        return promise;
    }

    InitializeDatabase = () => {
        this.#database = {};
    }

    AddToDatabase = (key, object) => {
        if(!this.#database){
            throw Error("Databse must be initialized before adding information to it");
        }

        if(this.#database[key]){
            throw Error(`There's already a key ${key} in the database`)
        }
    
        this.#database[key] = object;
    
        return true;
    }

    GetDataFromDatabase = () => {
        if(!this.#database){
            throw Error("Databse must be initialized before adding information to it")
        }
    
        return this.#database
    }

    GetRecordFromDatabase = (key) => {
        if(!this.#database){
            throw Error("Databse must be initialized before adding information to it")
        }
    
        let record;

        try{
            record = this.#database[key];
        } catch {
            recorrd = null;
        }

        return record;
    }

    PulpDatabase = () => {
        this.#database = null;

        return true;
    }
}

export default FauxDatabase;