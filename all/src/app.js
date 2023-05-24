import { Application } from "akjs";

class App extends Application {
  ready() {
    console.log("App Ready!");
    this.app.model.sync();
  }
  started() {
    console.log("App Started!");
  }
}

new App().start();
