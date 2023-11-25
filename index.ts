const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
import { json } from "express";
import sequelize from "./models";
import AuthRoutes from "./routes/auth.routes";
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

sequelize.authenticate().then(async () => {
  await sequelize.sync();
  app.listen(PORT, () => {
    console.log(`App started at: ${PORT}`);
  });
});

//app.use('/api',new AuthRoutes().router);
const routes = [new AuthRoutes()];
routes.forEach((route) => app.use("/api", route.router));
// db.sequelize.sync().then(()=>{
//     app.listen(PORT,()=>{
//         console.log(`App started at: ${PORT}`);
//     })
// })
