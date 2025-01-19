const TestFunctions = require("./index");
const testFunctions = new TestFunctions();

test("Makes input uppercase", () => {
  expect(testFunctions.capitalize("poop")).toBe("POOP");
});

test("Reverse String", () => {
  expect(testFunctions.reverseString("Hello")).toBe("olleH");
});

test("Add", () => {
  expect(testFunctions.calculator.add(1, 2)).toBe(3);
});
test("Subtract", () => {
    expect(testFunctions.calculator.subtract(1, 2)).toBe(-1);
  });
  test("Multiply", () => {
    expect(testFunctions.calculator.multiply(1, 2)).toBe(2);
  });
  
  test("Divide", () => {
    expect(testFunctions.calculator.divide(1, 2)).toBeCloseTo(.5);
  });
  
  test("Caesar Cypher", ()=>
{
    expect(testFunctions.caesarCipher('Poop',5)).toBe('Uttu');
})

test("Analyze Array Min" ,()=>
{
    expect(testFunctions.analyzeArray([1,2,3,4,5]).min).toBe(1);
})


test("Analyze Array Max" ,()=>
    {
        expect(testFunctions.analyzeArray([1,2,3,4,5]).max).toBe(5);
    })


test("Analyze Array Lenght" ,()=>
    {
        expect(testFunctions.analyzeArray([1,2,3,4,5]).length).toBe(5);
    })


test("Analyze Array average" ,()=>
    {
        expect(testFunctions.analyzeArray([1,2,3,4,5]).average).toBeCloseTo(3);
    })