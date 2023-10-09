chrome.commands.onCommand.addListener( async (command) => {
    if (command === 'encrypt-string') {
        console.log('run content-script');
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

        // TODO: 
        // --> Incorporate different methods of encrypting
        // --> Incportate all caps, all lower, or both.
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