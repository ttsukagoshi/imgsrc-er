chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        'id': 'ImgSrc-er',
        'title': chrome.i18n.getMessage('contextMenuTitle'),
        'type': 'normal',
        'contexts': [
            'selection',
            'image',
            'link'
        ]
    });
});

chrome.contextMenus.onClicked.addListener(function (info) {
    if (info.menuItemId == 'ImgSrc-er') {
        convertToImgTag(info);
    }
});

/**
 * Convert the selected object into an HTML img tag and save the string on clipboard.
 * @param {Object} info Object containing the information on the right-clicked object.
 */
function convertToImgTag(info) {
    var taggedUrl = '';
    try {
        if (info.selectionText) {
            taggedUrl = imgTaggedUrl(info.selectionText);
        } else if (info.linkUrl) {
            taggedUrl = imgTaggedUrl(info.linkUrl);
        } else if (info.mediaType == 'image') {
            taggedUrl = imgTaggedUrl(info.srcUrl);
        }
        // Save to clipboard
        let textArea = document.createElement("textarea");
        document.body.appendChild(textArea);
        textArea.value = taggedUrl;
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    } catch (error) {
        let message = `${error.message}\n\n▼詳細\n${error.stack}`;
        alert(message);
    }
}

/**
 * Encapsulate the entered URL string in an HTML img tag.
 * @param {string} url
 * @returns {string} The encapsulated URL in form of \<img src="{{URL}}" alt=""\>
 */
function imgTaggedUrl(url) {
    return `<img src="${url}" alt="">`;
}