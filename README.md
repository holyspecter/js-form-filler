js-form-filler
==============

Plugin provides simple common interface for filling form fields (textboxes, checkboxes, selects, etc.). It may be useful to fill form via one click that can speed up your manual testing if your app requires a lot of user input.

### Usage
Plugin adds only one method to jQuery object. Method accepts one parameter that should be JSON object where **key is field's selector** and **value is data that should be set**.  As simple as:
```
    $.fillFields({
        '#username': 'John',
        '#password': '123456',
        '#remember-me': true,
        '#interests': [1, 3, 5]
    });
```
