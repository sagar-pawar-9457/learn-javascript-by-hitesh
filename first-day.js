const accountId = 1555;
var accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "jaipur"

 
// accountId = 2  // (not allowed )


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"



console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity]);

/* prefer not to use var because of issue in block scope and functional scope */

let accountState;
console.log(accountState);

let accountName ="";
console.log(accountName);

