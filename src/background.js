// Copyright 2021 Taro TSUKAGOSHI
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* global chrome */

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: 'ImgSrc-er',
    title: chrome.i18n.getMessage('contextMenuTitle'),
    type: 'normal',
    contexts: ['selection', 'image', 'link'],
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId == 'ImgSrc-er') {
    let taggedUrl = '';
    if (info.selectionText) {
      taggedUrl = imgTaggedUrl(info.selectionText);
    } else if (info.linkUrl) {
      taggedUrl = imgTaggedUrl(info.linkUrl);
    } else if (info.mediaType == 'image') {
      taggedUrl = imgTaggedUrl(info.srcUrl);
    }
    // Save to clipboard
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        message: 'copyText',
        textToCopy: taggedUrl,
      });
    });
  }
});

/**
 * Encapsulate the entered URL string in an HTML img tag.
 * @param {string} url
 * @returns {string} The encapsulated URL in form of \<img src="{{URL}}" alt=""\>
 */
function imgTaggedUrl(url) {
  return `<img src="${url}" alt="">`;
}
