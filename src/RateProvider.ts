import { Currency } from "./Currency";
import { StockType } from "./StockType";

export interface RateProvider {
  rate(from: StockType, to: Currency): number;
}
