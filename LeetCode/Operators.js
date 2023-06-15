// Test for prefix and postfix operators

// Prefix operator test
function testPrefixOperator() {
    let x = 5;
    let result = ++x; // Increment x by 1 and assign the new value to result
    if (result === 6 && x === 6) {
      console.log("Prefix operator test passed.");
    } else {
      console.error("Prefix operator test failed.");
    }
  }
  
  // Postfix operator test
  function testPostfixOperator() {
    let x = 5;
    let result = x++; // Assign the value of x to result and then increment x by 1
    if (result === 5 && x === 6) {
      console.log("Postfix operator test passed.");
    } else {
      console.error("Postfix operator test failed.");
    }
  }
  
  // Run the tests
  testPrefixOperator();
  testPostfixOperator();