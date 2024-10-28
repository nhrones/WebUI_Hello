// To run this script:
/// deno run --allow-all --unstable-ffi --allow-ffi hello_world.ts
// deno run -A hello_world.ts

// Import from deno.land (Production)
import { WebUI } from "https://deno.land/x/webui@2.4.4/mod.ts";

// const myHtml = `
// <!DOCTYPE html>
// <html>
// 	<head>
//     <script src="webui.js"></script>
// 		<title>WebUI 2 - Deno Hello World Example</title>
//     <style>
//       body {
//         font-family: 'Arial', sans-serif;
//         color: white;
//         background: linear-gradient(to right, #507d91, #1c596f, #022737);
//         text-align: center;
//         font-size: 18px;
//       }
//       button, input {
//         padding: 10px;
//         margin: 10px;
//         border-radius: 3px;
//         border: 1px solid #ccc;
//         box-shadow: 0 3px 5px rgba(0,0,0,0.1);
//         transition: 0.2s;
//       }
//       button {
//         background: #3498db;
//         color: #fff; 
//         cursor: pointer;
//         font-size: 16px;
//       }
//       h1 { text-shadow: -7px 10px 7px rgb(67 57 57 / 76%); }
//       button:hover { background: #c9913d; }
//       input:focus { outline: none; border-color: #3498db; }
//     </style>
//     </head>
//     <body>
//         <h1>WebUI 2 - Deno Hello World</h1><br>
//         A: <input id="MyInputA" value="4"><br><br>
//         B: <input id="MyInputB" value="6"><br><br>
//         <div id="Result" style="color: #dbdd52">Result: ?</div><br><br>
// 	    <button id="calculate">Calculate</button> - <button OnClick="startCheck()">Check Result</button> - <button id="exit">Exit</button>
//         <script>
//             let Res = 0;

//             function get_A() {
//               return parseInt(document.getElementById('MyInputA').value);
//             }

//             function get_B() {
//               return parseInt(document.getElementById('MyInputB').value);
//             }

//             function set_result(res) {
//               Res = res;
//               document.getElementById("Result").innerHTML = 'Result: ' + Res;
//             }

//             function startCheck() {
//               // Call Deno backend function and pass arguments
//               checkResult(get_A(), get_B(), Res).then((response) => {
//                 alert(response);
//               });
//             }
//         </script>
//     </body>    
// </html>
// `;

function checkResult(e: WebUI.Event) {
  const a = e.arg.number(0); // First argument
  const b = e.arg.number(1); // Second argument
  const res = e.arg.number(2); // Third argument
  if ((a + b) == res) {
    return `Correct: ${a} + ${b} = ${res}`;
  }
  else {
    return `Incorrect: ${a} + ${b} != ${res}`;
  }
}

async function calculate(e: WebUI.Event) {
  // Run JavaScript and wait for response
  const getA = await e.window.script("return get_A()").catch((error) => {
    console.error(`Error in the JavaScript: ${error}`);
    return "";
  });
  const getB = await e.window.script("return get_B()").catch((error) => {
    console.error(`Error in the JavaScript: ${error}`);
    return "";
  });

  // Calculate
  const result = parseInt(getA) + parseInt(getB);

  // Run JavaScript without waiting for response (Quick)
  e.window.run(`set_result(${result});`);
}

// Create new window
const myWindow = new WebUI();

// Bind
myWindow.bind("calculate", calculate);
myWindow.bind("checkResult", checkResult);
myWindow.bind("exit", () => {
  // Close all windows and exit
  WebUI.exit();
});

// Show the window
//myWindow.show(myHtml); // Or 
myWindow.show('./index.html');

// Wait until all windows get closed
await WebUI.wait();

console.log("Thank you.");
