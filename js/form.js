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
          var value = simpson.integrate(
                  expression,
                  b,
                  a,
                  N);
            var inaccuracy = false;
          if ($('#inputDeviation').is(':checked')) {
              inaccuracy = math.abs(simpson.inaccuracy(expression,
                                  b,
                                  a,
                                  N));

          }
            $('#resultLounge').children().append(this.template.render({value:value, inaccuracy: inaccuracy}));
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