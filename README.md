# ImgSrc-er (Google Chrome Extension)

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/mmalpdcdmbloijpgoagaeallfnmioika)](https://chrome.google.com/webstore/detail/imgsrc-er/mmalpdcdmbloijpgoagaeallfnmioika)
[![Accessibility-alt-text-bot](https://github.com/ttsukagoshi/imgsrc-er/actions/workflows/a11y-alt-text-bot.yml/badge.svg)](https://github.com/ttsukagoshi/imgsrc-er/actions/workflows/a11y-alt-text-bot.yml)
[![CodeQL](https://github.com/ttsukagoshi/imgsrc-er/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/ttsukagoshi/imgsrc-er/actions/workflows/codeql-analysis.yml)
[![Super-Linter](https://github.com/ttsukagoshi/imgsrc-er/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)
[![Upload Zipped Source Code on Release](https://github.com/ttsukagoshi/imgsrc-er/actions/workflows/upload-released-src.yml/badge.svg)](https://github.com/ttsukagoshi/imgsrc-er/actions/workflows/upload-released-src.yml)

Convert image link URL into an `<img>` tag

## About

An open-source Google Chrome extension to convert selected image link URL into an HTML `<img>` tag with `src` attribute on the clipboard.

## Install

This extension can be [installed via the Chrome Web Store](https://chrome.google.com/webstore/detail/imgsrc-er/mmalpdcdmbloijpgoagaeallfnmioika).

## How to Use

When an image, e.g., `https://example.com/image.jpg`, is selected, right-click to get the context menu and select `Convert to <img> tag and save on clipboard`.  
![Screenshot of the context menu](https://www.scriptable-assets.page/assets/images/ImgSrc-er/screenshot_ImgSrc-er.jpg)

The string

```html
<img src="https://example.com/image.jpg" alt="" />
```

will be saved on the clipboard. You can in turn use this to edit your website.

## Terms and Conditions

You must agree to the [Terms and Conditions](https://ttsukagoshi.github.io/scriptable-assets/terms-and-conditions/) to use this extension.

## About the Icon

The icon of this Chrome extension was made by [Freepik](https://www.freepik.com/) from [www.flaticon.com](https://www.flaticon.com/).
