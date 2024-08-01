import { expect } from "chai";
import { all, random } from "./index.js";

describe("starwars-names", function () {
  describe("all", function () {
    it("should be an array of strings", function () {
      expect(all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every((item) => typeof item === "string");
      }
    });

    it("should contain `ZikaZaki`", function () {
      expect(all).to.include("ZikaZaki");
    });
  });

  describe("random", function () {
    it("should return a random item from the starwars.all", function () {
      const randomItem = random();
      expect(all).to.include(randomItem);
    });

    it("should return an array of random items if passed a number", function () {
      const randomItems = random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach((item) => {
        expect(all).to.include(item);
      });
    });
  });
});
