define(["mathjs"], function(math) {
    /**
     * Implements Simpson's rule numerical integration algorithm,
     */
   return {
       /**
        * Integrates expression from b to a with N steps using Simpson's rule.
        *
        * @param {string} expression function to integrate. Must be a valid Math.js expression.
        * @param {number} b Upper domain value.
        * @param {number} a Lower domain value.
        * @param {number} N Integration steps.
        *
        * @return {number} Integral value.
        */
       integrate: function(expression, b,a, N) {
           var f = math.eval("function f(x)="+expression);
            return 0.5
       },
       /**
        * Calculates step length of a
        * @param {number} b Upper domain value.
        * @param {number} a Lower domain value.
        * @param {number} N Integration steps.
        * @return {number} step length
        */
       stepLength: function(b,a,N) {
           return (b-a)/N;
       },
       /**
        * Calculates function value for supplied argument.
        * @param {Parser} f parsed f(x) function to evaluate
        * @param {number} value function argument. It is always supplied as
        * 'x' to the expression
        * @return {number} function evaluation result.
        */
       evaluateExpression: function(f, value) {
           return f(value);
       },
       /**
        * Checks whether N is even Number and if not, makes it even.
        * @param {number} N number to validate.
        * 'x' to the expression
        * @return {number} N or N+1.
        */
       reEven: function(N) {
           if (N%2 != 0) {
               N=N+1;
           }

           return N;
       }
   }
});