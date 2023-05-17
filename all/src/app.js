import globalUtil from "./utils/global.js";
import { Application } from "akjs";

class App extends Application {
  ready() {
    console.log('App Ready!')
    this.app.modelSync();
    globalUtil(global);
  }
  started() {
    console.log('App Started!')
  }
}

new App().start();
