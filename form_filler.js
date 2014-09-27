(function ($) {
    var fieldsManager;

    /**
     * Fills form fields with given data.
     * Data format is: {'selector': 'value'}
     *
     * @param {object} data
     */
    $.fillFields = function (data) {
        $.each(data, function (selector, value) {
            var field = $(selector);

            if (field.length) {
                fieldsManager.setValue(field, value);
            }
        });
    };

    fieldsManager = {
        field: null,
        setValue: function (field, value) {
            this.field = field;
            switch (field.prop('tagName').toLowerCase()) {
                case 'input':
                    this.setInputValue(value);
                    break;
                case 'select':
                    this.setSelectValue(value);
                    break;
                case 'textarea':
                    field.html(value);
                    break;
            }
        },
        setInputValue: function (value) {
            if ('checkbox' === this.field.attr('type').toLowerCase() || 'radio' === this.field.attr('type').toLowerCase()) {
                this.field.prop('checked', Boolean(value));
            } else {
                this.field.val(value);
            }
        },
        setSelectValue: function (value) {
            if (value instanceof Array && this.field.attr('multiple')) {
                $.each(value, function (index, val) {
                    fieldsManager.field.find('option[value=' + val + ']').prop('selected', true);
                });
            } else {
                this.field.find('option[value=' + value + ']').prop('selected', true)
            }
        }
    };
})(jQuery);