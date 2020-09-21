import {transform} from "../src/romanizer";

describe('romanizer',() =>{
    it('should romonize number', function () {
        const returnNum = transform(10);
        expect(returnNum).toEqual("X");
    });
});