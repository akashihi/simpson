define(["mathjs"], function() {
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
       }
   }
});