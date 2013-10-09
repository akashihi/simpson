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

           var result = f(a)+f(b)+4*this.summarize(f,1,N,this.halfStepper(b,a,N))+this.summarize(f,1,N-1,this.xStepper(b,a,N))

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
        * @param {Function} f parsed f(x) function to evaluate
        * @param {number} value function argument. It is always supplied as
        * 'x' to the expression
        * @return {Parser} function evaluation result.
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
       },
       /**
        * Generates function for iterative stepped value calculation in [a;b] range.
        * @param b Upper domain value.
        * @param a Lower domain value.
        * @param N Steps
        * @return {Function} f(n) generating stepped values.
        */
       xStepper: function(b, a, N) {
           var h = this.stepLength(b, a, N);
           return function(n) {
                return a+h*n;
           }
       },
       /**
        * Generates function for iterative stepped average value calculation in [a;b] range.
        * @param b Upper domain value.
        * @param a Lower domain value.
        * @param N Steps
        * @return {Function} f(n) generating stepped values.
        */
       halfStepper: function(b, a, N) {
         var stepper = this.xStepper(b, a, N);
           return function(n) {
               return (stepper(n-1)+stepper(n))/2;
           }
       },
       /**
        * Calculates iterative sum of f(x) function, from i to j with step 1,
        * and x is evaluated a v(n), where n is index of summation.
        * @param {Function} f parsed f(x) function to evaluate.
        * @param {number} i lower bound of summation.
        * @param {number} j upper bound of summation.
        * @param {function} v function, converting summation index to f(x) argument.
        * @return {number} Summation result.
        */
       summarize: function(f, i, j, v) {
           var result = 0;
            for(n=i; n<j+1; n++) {
                result+=f(v(n));
            }

           return result;
       }
   }
});