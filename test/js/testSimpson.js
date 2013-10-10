define(function(require) {
    var Simpson = require("simpson");

    QUnit.module("Simpson's rule");

    QUnit.test("Inaccuracy works", function() {
        QUnit.close(Simpson.inaccuracy("sin(e^(-x^2))",3,0,2), 0.0003, 0.0000001);
    });

    QUnit.test("Integrates correctly", function() {
        QUnit.close(Simpson.integrate("x",1,0,10), 0.5, 0.001);
    });

    QUnit.test("Step length calculated correctly", function() {
        QUnit.equal(Simpson.stepLength(1,0,10), 0.1);
    });

    QUnit.test("Function evaluation works", function() {
        math = require("math");
        var f = math.eval("function f(x) =x^2");

        QUnit.equal(Simpson.evaluateExpression(f, 0), 0);
        QUnit.equal(Simpson.evaluateExpression(f, 1), 1);
        QUnit.equal(Simpson.evaluateExpression(f, 2), 4);
    });

    QUnit.test("Number Re-even works.", function() {
        QUnit.equal(Simpson.reEven(1), 2);
        QUnit.equal(Simpson.reEven(2), 2);
    });

    QUnit.test("xStepper calculates correctly.", function() {
        var stepper = Simpson.xStepper(2,1,10);
        QUnit.equal(stepper(0), 1);
        QUnit.equal(stepper(5), 1.5);
        QUnit.equal(stepper(10), 2);
    });

    QUnit.test("Summation valid.", function() {
        math = require("math");
        var f = math.eval("function f(x) =x");
        var N = 10;
        QUnit.close(Simpson.summarize(f,1,N, Simpson.xStepper(1,0,N)), 5.5,0.001);
    })

    QUnit.test("halfStepper calculates correctly.", function() {
        var stepper = Simpson.halfStepper(2,1,10);
        QUnit.equal(stepper(1), 1.05);
        QUnit.equal(stepper(5), 1.45);
        QUnit.equal(stepper(10), 1.95);
    });

});