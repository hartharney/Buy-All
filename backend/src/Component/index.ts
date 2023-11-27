import ProductRouter from "./Products/Router";
import UserRouter from "./Users/Router";

export = {
  Products: {
    routes: ProductRouter,
  },
  Users: {
    routes: UserRouter,
  },
};
