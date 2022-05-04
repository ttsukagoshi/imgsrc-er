// Copyright 2022 Taro TSUKAGOSHI
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

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'copyText') {
    console.info(
      `[ImgSrc-er] Copying text "${
        request.textToCopy
      }" to clipboard (sender: ${JSON.stringify(sender)})`
    );
    copyToTheClipboard(request.textToCopy);
    sendResponse();
    return;
  }
});

function copyToTheClipboard(textToCopy) {
  const el = document.createElement('textarea');
  el.value = textToCopy;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}
