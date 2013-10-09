define(function(require) {
    var Simpson = require("simpson");

    QUnit.module("Simpson's rule");

    QUnit.test("integrates correctly", function() {
        QUnit.equal(Simpson.integrate("x^2",1,0,10), 0.5);
    });

    QUnit.test("Step length calculated correctly", function() {
        QUnit.equal(Simpson.stepLength(1,0,10), 0.1);
    });

    QUnit.test("Function evaluation works", function() {
        math = require("mathjs");
        var f = math.eval("function f(x) =x^2");

        QUnit.equal(Simpson.evaluateExpression(f, 0), 0);
        QUnit.equal(Simpson.evaluateExpression(f, 1), 1);
        QUnit.equal(Simpson.evaluateExpression(f, 2), 4);
    });

    QUnit.test("Number Re-even works.", function() {
        QUnit.equal(Simpson.reEven(1), 2);
        QUnit.equal(Simpson.reEven(2), 2);
    });
});