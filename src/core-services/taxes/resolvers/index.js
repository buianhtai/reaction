import graphqlGroupXform from "../util/graphqlGroupXform.js";
import graphqlItemXform from "../util/graphqlItemXform.js";
import Query from "./Query/index.js";
import ShopSettings from "./ShopSettings/index.js";

export default {
  Cart: graphqlGroupXform,
  CartItem: graphqlItemXform,
  OrderFulfillmentGroup: graphqlGroupXform,
  OrderItem: graphqlItemXform,
  Query,
  ShopSettings
};
