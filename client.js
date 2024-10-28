// deno-lint-ignore-file
/**
 * This code is imported into the html
 * Somehow, the functions are picked up by the 
 * **webui.js** import.  
 * Not sure where that comes from?
 */

let Result = 0;

function get_A() {
   return parseInt(document.getElementById('inputA').value);
}

function get_B() {
   return parseInt(document.getElementById('inputB').value);
}

// called from service: line 30 "
function setResult(result) {
   console.log("setting Result called!")
   Result = result;
   document.getElementById("result").innerHTML = `Result: ${Result}`;
}

// called from service.ts: line 46 
function closeLogger() {
   webui.setLogging(false);
}

// after loading dom and webui.js, start the logger
addEventListener("DOMContentLoaded", (_event) => {
      
   if (typeof webui !== 'undefined') {
      webui.setLogging(true);
   }

   const checkBtn = document.getElementById('checkResultBtn')
   checkBtn.addEventListener("click", () => {
      // This is actually a registered RPC over the WebSocket
      // The params are organized as three arrays: 
      //    integer[], string[], and boolean[]
      // and, an any response is returned
      // NOTE: this RPC function is generated from the bindlist 
      // Calls a backend function with arguments
      checkIt(get_A(), get_B(), Result)
         .then((response) => {
            console.info(response);
            alert(response);
         })
   })
});
