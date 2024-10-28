// deno-lint-ignore-file
/** The functions below can be called from backend TS 
 *   // hello_world.ts line# 32
 *   e.window.run(`set_result(${result});`);
 */

let Res = 0;

function get_A() {
  return parseInt(document.getElementById('MyInputA').value);
}

function get_B() {
  return parseInt(document.getElementById('MyInputB').value);
}

function set_result(res) {
  Res = res;
  document.getElementById("Result").innerHTML = 'Result: ' + Res;
}

function startCheck() {
  // Call Deno backend function and pass arguments
  checkResult(get_A(), get_B(), Res).then((response) => {
    alert(response);
  });
}

// called from from hello_world.ts: line 46 
function closeLogger() {
   webui.setLogging(false);
}

// after loading dom and webui.js, I like to enable logging
addEventListener("DOMContentLoaded", (_event) => {
   if (typeof webui !== 'undefined') {
      webui.setLogging(true);
      // after, open Chrome dev-tools 
      //    right-click the window and select -inspect-
      //    then click the console tab
   }
})