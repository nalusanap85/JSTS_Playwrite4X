let x=20;

let y= (x>18) ? "Allow to go to Goa" : "Not allow to go to Goa";
console.log(y); // "Allow to go to Goa" 

let z= (x>24) ? "Allow to drink alcohol" : "Not allow to drink alcohol";
console.log(z); // "Not allow to drink alcohol"


let actualstatuscode= "200";
let expectedstatuscode= "200";

let result=(actualstatuscode===expectedstatuscode) ? "Test case Passed" : "Test case failed";
console.log(result); // "Test case Passed"



let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in:", browserMode, "mode");

let responseTime = 850;  // ms
let sla = 1000;          // ms
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms — ${slaStatus}`);

// Template Literal
console.log(`What is the SLA time ? - ${sla}`);

let condition = "true";
let isMale= condition ? "yes I am" : "No, I am not";
console.log(isMale); // "yes I am"
console.log (`value is: ${isMale}`);  //"`" is backtick, it is below the esc on keyboard



