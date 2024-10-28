# Deno-WebUI-Example

See:
https://github.com/webui-dev/deno-webui

Deno-WebUI is not a web-server-solution nor a framework. 

Deno-WebUI allows you to use any web browser as a GUI, with 
Deno(Typescript) in the backend and HTML5(javascript) in the frontend. All this in a lightweight portable lib.

## WebUI Docs:
https://webui.me/docs/2.5/#/

## Deno-WebUI
https://github.com/webui-dev/deno-webui

## Example app
This example is a deconstruction of the original **hello-world** example in the above repo.

The intent here was to show how to launch a simple web app that exersizes the IPC mechanism:

  - Frontend javascript calls backend Deno Tpescript functions
  - Backend Typescript functions execute javascript in the browser. 

I've simply pulled the html, css, and javascript out to separate files. 

### Note: 
WebUI contains an internal http server!        
Deno.serve could also be used, but is not required. 

### Download and Run it:
```bash
$ deno run -A hello_world.ts 
```
