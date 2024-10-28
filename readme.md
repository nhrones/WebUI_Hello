# Deno-WebUI-Example

See:
https://github.com/webui-dev/deno-webui

WebUI is not a web-server-solution nor a framework. 

WebUI allows you to use any web browser as a GUI, with 
Deno(Typescript) in the backend and HTML5 in the frontend. All this in a lightweight portable lib.

## WebUI Docs:
https://webui.me/docs/2.5/#/

## Deno WebUI
https://github.com/webui-dev/deno-webui

## Example app
This example is a deconstruction of the example app in the above repo.

The intent here was to show how to launch a simple web app that exersizes the IPC mechanism:

  - Frontend javascript calls backend Deno Tpescript functions
  - Backend Typescript functions execute javascript in the browser. 

I've simply pulled the html, css, and javascript out to separate files.
Note that WebUI contains an http server! Deno.serve could also be used, but is not required. 