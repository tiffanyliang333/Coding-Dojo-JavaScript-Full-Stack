function fiveHeads() {
    return new Promise( (resolve, reject) => {
    // your code here!
    let headCount = 0;
    let attempts = 0;
    let attemptsMax = 100;

    while(headCount <5 && attempts <= attemptsMax) {
        attempt++;
        let result = tossCoin();
        console.log('${results} was flipped.');
        if(result === "heads") {
            headCount = 0;
        }
    }
    if (attempts <= attemptsMax) {
        resolve('It took ${attempts} tries to flip five "heads".');
    }else {
        reject('Attempts have exceeded ${attemptsMax} flips.');
    }
    });
}
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    console.log( "When does this run now?" );
    