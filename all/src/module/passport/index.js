import Router from "koa-router";
import { Module } from "akjs";
import Controller from "./Controller.js";
import Service from "./Service.js";
import Model from "./Model.js";

export default class User extends Module {
  constructor() {
    super("passport");
    this.router = new Router();
    this.controller = new Controller();
    this.service = new Service();
    this.model = Model(this.app);

    this.loadToApp();
  }
  routes() {
    this.router.post("/reg", (ctx) => this.controller.reg(ctx));
    this.router.put("/login", (ctx) => this.controller.login(ctx));

    return this.router.routes();
  }
}
