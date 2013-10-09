(function() {
    QUnit.config.autostart = false;

    require.config({
        baseUrl : "../js/"
    });

    require(["require-config"]);

    var testModules = [ "js/testSimpson.js" ];

    require(testModules, QUnit.start);
}());