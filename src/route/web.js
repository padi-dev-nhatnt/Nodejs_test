import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.post('/', homeController.post);
    router.get('/:id', homeController.Delete);


    return app.use("/", router);
}

module.exports = initWebRoutes;