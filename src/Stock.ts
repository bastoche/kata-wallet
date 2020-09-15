import { StockType } from "./StockType";

export class Stock {
  constructor(
    public readonly quantity: number,
    public readonly stockType: StockType
  ) {}
}
