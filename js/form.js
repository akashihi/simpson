define(["math", "simpson"],function (math, simpson) {
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
          var value = simpson.integrate($('#inputFunction').val(),$('#inputB').val(),$('#inputA').val(),$('#inputStep').val());
          return false;
        },
        init: function () {
            $('#inputFunction').change($.proxy(this.onChange,this));
            $('#inputA').change($.proxy(this.onChange,this));
            $('#inputB').change($.proxy(this.onChange,this));
            $('#inputStep').change($.proxy(this.onChange,this));
            $('#inputDeviation').change($.proxy(this.onChange,this));
            this.onChange();

            $('#integrate').click(this.integrate);
        }
    }
});