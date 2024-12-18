function productExceptSelf(X) {
  const n = X.length;
  const Y = new Array(n).fill(1);

  // Step 1: Compute prefix products
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    Y[i] = prefix; // Store prefix product up to i-1
    prefix *= X[i]; // Update prefix product
  }

  // Step 2: Compute suffix products and combine
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    Y[i] *= suffix; // Multiply with the suffix product from i+1
    suffix *= X[i]; // Update suffix product
  }

  return Y;
}

// Example usage:
let X = [1, 2, 3, 4];
let Y = productExceptSelf(X);
console.log(Y); // Output: [24, 12, 8, 6]
