let statusCode=404;

let ActualResult= 
  statusCode ===200 ? "Pass" : 
  statusCode < 300 ? "Success" :
  statusCode <=400 ? "Client error" : "Server Error";

  console.log(`statuscode is:, ${statusCode}, "Actual Result is:" , ${ActualResult}`);