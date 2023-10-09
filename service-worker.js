chrome.commands.onCommand.addListener( async (command) => {
    if (command === 'encrypt-string') {
        console.log('run content-script');
        // const a = CryptoJS.MD5('abcd');
        // const ac = a.toString(CryptoJS.enc.MD5)
        const currentTab = await getTab()
            .then((tabs) => {
                if (tabs[0]) {
                    return tabs[0]
                } else {
                    return false
                }
            })
            .catch((e) => console.error(`Error getting tab: ${e}`));
        if (currentTab) {
            chrome.scripting.executeScript({
                target: { tabId: currentTab.id },
                files: ['scripts/content.js']
            });
        }
        // Run script to encrypt the selected string
        // TODO: 
        // --> Successfully import CryptoJS to content-script or service worker
        // --> :)) everyone is happy
        // --> Incorporate different methods of encrypting
        // --> Incportate all caps or lower
        // --> Incorporate salt
    }
})

const getTab = async () => {
    const queryOptions = {
        active: true,
        currentWindow: true
    }
    const tabs = await chrome.tabs.query(queryOptions);
    return tabs
}