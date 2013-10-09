define(function(require) {
    var Simpson = require("simpson");

    QUnit.module("Simpson's rule");

    QUnit.test("integrates correctly", function() {
        QUnit.equal(Simpson.integrate("x^2",1,0,10), 0.5);
    })

    QUnit.test("Step length calculated correctly", function() {
        QUnit.equal(Simpson.stepLength(1,0,10), 0.1);
    })
});