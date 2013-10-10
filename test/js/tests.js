/*
 * Copyright (C) 2013 Denis V Chapligin.
 * Distributed under the GPLv3.
 * (See accompanying file LICENSE or copy at
 * http://www.gnu.org/licenses/gpl-3.0.txt)
 *
 */
(function() {
    QUnit.config.autostart = false;

    require.config({
        baseUrl : "../src/js/"
    });

    var testModules = [ "js/testSimpson.js" ];

    require(testModules, QUnit.start);
}());