# chrome-encrypt-string

Welcome to Chrome-Encrypt-String :)

### Getting Started

Install the Chrome extionsion from the Chrome Web Store.

Navigate to any tab with a valid input tab.

** List of valid input: [text, password, number, email, tel, url, search, date, datetime, datetime-local, time, month, week] **

Highlight the text from the input field.

Press Ctrl+Shift+E on the keyboard and watch the input value change to an all caps, MD5 encrypted string.

Your string is also copied to the clipboard.

### Potential Gotchas

Some websites run custom javascript to prevent tampering with forms. So you may run this command and see your input text change but it is not certain that the form submit handlers will use the new value.

This is the purpose of the copy value to clipboard, in case the form does not allow the extension to replace the value. You can manually paste the value in with one additionally Ctrl+V / Cmnd+V


## Authors

- [@ftumminello](https://www.github.com/ftumminello)