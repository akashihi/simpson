/*
 * Copyright (C) 2013 Denis V Chapligin.
 * Distributed under the GPLv3.
 * (See accompanying file LICENSE or copy at
 * http://www.gnu.org/licenses/gpl-3.0.txt)
 *
 */
define(["jsrender", "math", "simpson"],function (renderer, math, simpson) {
    return {
        validateFunction: function(selector) {
            var expression = selector.val();
            if (!expression) {
                selector.parent().addClass("has-error");
                $('#integrate').prop('disabled', true);
                return;
            }
            try {
                math.parse(expression)
            } catch (e) {
                selector.parent().addClass("has-error");
                $('#integrate').prop('disabled', true);
                return;
            }

            selector.parent().removeClass("has-error")
        },
        validateNumber: function(selector) {
            var expression = selector.val();
            if (!$.isNumeric(expression)) {
                selector.parent().addClass("has-error");
                $('#integrate').prop('disabled', true);
                return;
            }

            selector.parent().removeClass("has-error")
        },
        onChange: function () {
            $('#integrate').removeAttr('disabled');
            this.validateFunction($('#inputFunction'));
            this.validateNumber($('#inputA'));
            this.validateNumber($('#inputB'));
            this.validateNumber($('#inputStep'));
        },
        integrate: function() {
            var expression = $('#inputFunction').val();
            var a = parseInt($('#inputA').val());
            var b = parseInt($('#inputB').val());
            var N = parseInt($('#inputStep').val());
            var inaccuracy = NaN;
            var value = NaN
           if ($('#inputDeviation').is(':checked')) {
               var r = simpson.inaccuracy(expression,
                                   b,
                                   a,
                                   N);
               value = r.value;
               inaccuracy = r.inaccuracy;
           } else {
               value = simpson.integrate(
                   expression,
                   b,
                   a,
                   N);
           }
            var result = {
                value:value,
                showInaccuracy: $('#inputDeviation').is(':checked'),
                inaccuracy: inaccuracy,
                expression : expression,
                a:a,
                b:b,
                steps: N
            };
            $('#resultLounge').children().append(this.template.render(result));
          return false;
        },
        init: function () {
            this.template = $.templates('#resultTemplate');

            $('#inputFunction').change($.proxy(this.onChange,this));
            $('#inputA').change($.proxy(this.onChange,this));
            $('#inputB').change($.proxy(this.onChange,this));
            $('#inputStep').change($.proxy(this.onChange,this));
            $('#inputDeviation').change($.proxy(this.onChange,this));
            this.onChange();

            $('#integrate').click($.proxy(this.integrate, this));
        }
    }
});