import Router from "koa-router";
import { Module } from "akjs";
import Controller from "./Controller.js";
import Service from "./Service.js";
import Model from "./Model.js";

export default class User extends Module {
  constructor() {
    super("user");
    this.router = new Router();
    this.controller = new Controller();
    this.service = new Service();
    this.model = Model(this.app);

    this.loadToApp();
  }
  routes() {
    this.router.get("/current", (ctx) => this.controller.getCurrent(ctx));
    this.router.get("/:userId", (ctx) => this.controller.getById(ctx));
    this.router.post("/", (ctx) => this.controller.create(ctx));
    this.router.put("/", (ctx) => this.controller.update(ctx));

    return this.router.routes();
  }
}
