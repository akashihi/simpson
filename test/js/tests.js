(function() {
    QUnit.config.autostart = false;

    require.config({
        baseUrl : "../js/"
    });

    var testModules = [ "js/testSimpson.js" ];

    require(testModules, QUnit.start);
}());