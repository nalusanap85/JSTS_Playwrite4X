//do_while check the consition later. It execute the code 1st atlease one time.

let retry=1;

do {
    console.log("open the browser");
    console.log("retrying.... ", retry);
    retry++;
}
while (retry<=5);
    