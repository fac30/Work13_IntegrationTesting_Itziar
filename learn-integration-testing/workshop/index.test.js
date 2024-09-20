test("Calculate should make the correct math operations", () => {
  equal(calculate(5, "+", 6), 11);
  equal(calculate(25, "-", 4), 21);
  equal(calculate(5, "*", 6), 30);
  equal(calculate(15, "/", 5), 3);
  equal(calculate(5, "&", 6), "Please enter a valid sign (+, -, *, /)");
});

test("Calculator can make math operations with strings", () => {
  equal(calculate("5", "+", "6"), 11);
});

test("Calculator on browser works and updates the page", () => {
  const aInput = document.querySelector("input[name='a']");
  const bInput = document.querySelector("input[name='b']");
  const signInput = document.querySelector("select");

  aInput.value = "8";
  signInput.value = "/";
  bInput.value = "2";

  const submitButton = document.querySelector("button[type='submit']");
  submitButton.click();

  const result = document.querySelector("#result");
  equal(result.textContent, "4");

  result.textContent = ""; // reset the page so it doesn't affect the page/other tests
});
