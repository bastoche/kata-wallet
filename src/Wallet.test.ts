import { Currency } from "./Currency";
import { Stock } from "./Stock";
import { StockType } from "./StockType";
import { Wallet } from "./wallet";

describe("Wallet", () => {
  describe("value", () => {
    it("should return the value of a wallet according the current rates", () => {
      const wallet = new Wallet([new Stock(5, StockType.FACEBOOK)]);
      const rateProvider = {
        rate(from: StockType, to: Currency) {
          return 3;
        },
      };
      expect(wallet.value(Currency.EUR, rateProvider)).toEqual(15);
    });
  });
});
