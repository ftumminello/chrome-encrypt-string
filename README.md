# chrome-encrypt-string

Welcome to Chrome-Encrypt-String :)

### Getting Started

Install the Chrome extionsion from the Chrome Web Store.

Navigate to any tab with a valid input field.

Highlight text from an input field.

Press Ctrl+Shift+E and watch the input value change to an all caps, MD5 encrypted string.

Your string is also copied to the clipboard.

** List of valid input fields: [text, password, number, email, tel, url, search, date, datetime, datetime-local, time, month, week] **

### Potential Gotchas

Some websites run custom javascript to prevent tampering with forms. Therefore, you may run this command and see your input text change, but it is not certain that the form submit handler will use the new value.

Therefore, the value is copied to the clipboard, in case the form submit does not use the extionsion replaced value. You can manually paste the value with one additional press of Ctrl+V / Cmnd+V.

## Authors

- [@ftumminello](https://www.github.com/ftumminello)