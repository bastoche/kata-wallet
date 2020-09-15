import { Currency } from "./Currency";
import { RateProvider } from "./RateProvider";
import { Stock } from "./Stock";

export class Wallet {
  constructor(public readonly stocks: Array<Stock>) {}

  value(currency: Currency, rateProvider: RateProvider) {
    return 0;
  }
}
