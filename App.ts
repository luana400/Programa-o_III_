import express, { Application } from "express";
import mongoose from "mongoose";
import routes from "./src/routes/routes";

class App {
    public express: Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.database();
    }

    private middleware(): void {
        this.express.use(express.json());
    }

    private async database(): Promise<void> {
        try {
            mongoose.set("strictQuery", true);
            await mongoose.connect('mongodb://127.0.0.1:27017/test');
            console.log('Conectado ao banco de dados com sucesso');
        } catch (error) {
            console.error('Erro ao conectar ao banco de dados:', error);
        }
    }

    private routes(): void {
        this.express.use(routes);
    }
}

export default new App().express;
