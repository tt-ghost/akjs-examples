import globalUtil from "./utils/global.js";
import { Application } from "akjs";

class App extends Application {
  configCreated() {
    globalUtil(global);
  }
}

new App().start();
