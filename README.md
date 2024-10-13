# Kindle-like Text-Only Chrome Extension

## Description

This Chrome extension transforms any webpage into a Kindle-like reading experience. It strips away all formatting and images, leaving only the text content displayed in a clean, easy-to-read format with a sepia background and wide margins.

## Demo
 [Watch the demo video](./demo.mp4)

## Features

- Converts webpages to text-only view
- Applies a sepia background for reduced eye strain
- Centers text with wide margins for improved readability
- Uses a serif font (Georgia) similar to Kindle's typography
- Adjusts font size and line height for optimal reading
- Allows toggling between original and text-only views

## Installation

1. Download or clone this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

1. Click the extension icon in the Chrome toolbar to activate the Kindle-like view on the current webpage.
2. Click the icon again to toggle back to the original webpage view.

## Files

- `manifest.json`: Contains metadata about the extension
- `background.js`: Handles the extension's background processes
- `content.js`: Implements the text-only view transformation

## Version History

- 1.0: Initial release with basic text-only functionality
- 1.1: Added sepia background
- 1.2: Implemented Kindle-like layout with centered text and wide margins

## Contributing

Contributions to improve the extension are welcome. Please feel free to submit pull requests or open issues to suggest enhancements or report bugs.

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgments

This extension was inspired by the reading experience provided by Amazon Kindle devices and aims to bring a similar level of comfort to web browsing.
