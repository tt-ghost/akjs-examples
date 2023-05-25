import { Application } from "akjs";

class App extends Application {
  ready() {
    console.log("App Ready!");
  }
  started() {
    console.log("App Started!");
  }
}

new App().start();
