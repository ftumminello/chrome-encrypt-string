{
let validInputType = ['text', 'password', 'number', 'email', 'tel', 'url', 'search', 'date', 'datetime', 'datetime-local', 'time', 'month', 'week'];

const getCurrentSelection = () => {
    return window.getSelection().toString();
}

const encryptString = (val, c) => {
    return c.MD5(val);
}

const main = async () => {
    const md5Src = chrome.runtime.getURL("scripts/md5.js");
    const contentMain = await import(md5Src);
    const { CryptoJS: c } = contentMain;

    const currentSelection = getCurrentSelection();
    if (currentSelection) {
        const activeElement = document.activeElement;
        if (activeElement.tagName === "INPUT") {
            if (validInputType.includes(activeElement.type)) {
                const preVlaue = activeElement.value;
                const sigBytes = encryptString(preVlaue, c);
                const postValue = sigBytes.toString(c.enc.MD5);
                activeElement.value = postValue.toUpperCase();
                navigator.clipboard.writeText(postValue.toUpperCase());
                activeElement.select();
            }
        }
    }
}

main();}