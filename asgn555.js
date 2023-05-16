
let promise = new Promise((resolve, reject) => {
        if (1 < 2) {
            resolve('success');
            return;
        }
        reject('error');
    });
    
    let promise2 = new Promise((resolve, reject) => {
        if (1 < 2) {
            resolve('success 2');
            return;
        }
        reject('error');
    });
    
    Promise.resolve([promise, promise2])
  .then(promises => {
    const results = [];
    let count = 0;
    promises.forEach(promise => {
      promise.then(result => {
        results.push(result);
        count++;
        if (count === promises.length) {
          console.log(results);
        }
      }).catch(err => console.log(err));
    });
  });

   Promise.all([promise, promise2])
      .then(res => console.log(res))
  // .catch(err => console.log(err))
    
    /////

    let data = new Promise((resolve, reject) => {
        const users = [`Giorigi`, `Mariami`, `Mayur`];
        if(true) {
            resolve(users);
            return;
        }
        reject(`error`);
    });
    
    const printUsers = async () => {
        try {
            const result = await data;
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
    
    printUsers();

    ///////


    var URL = 'https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json/';

    function getAPI() {
        fetch(URL)
        .then((response) => response.json)
        .then((data2) => console.log(data2))
        .then((error) => console.log(error))
    }

    getAPI()