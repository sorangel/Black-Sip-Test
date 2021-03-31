import { nanoid as uuid } from "nanoid";

export default class Product {
  constructor({
    name = "",
    image = "",
    price = "",
    action = async (event, { image = "", name = "", price = 0 }) => undefined,
    actionText = "",
  } = {}) {
    this.id = uuid();
    this.name = name;
    this.image = image;
    this.price = price;
    this.action = action;
    this.actionText = actionText;
  }
}
