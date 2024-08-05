/**
 * 
 */
import { getMonth } from "./index";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            // to implement
            const date = new Date("2022-01-01"); // Création d'une date
            expect(getMonth(date)).toBe("janvier"); // Vérification de la valeur retournée
        });
        it("the function return juillet for 2022-07-08 as date", () => {
            // to implement
            const date = new Date("2022-07-08"); 
            expect(getMonth(date)).toBe("juillet"); 
        });
    });
})

