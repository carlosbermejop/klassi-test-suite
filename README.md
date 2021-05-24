
<p align="center">
    <a href="https://github.com/larryg01/klassi-js/">
        <img alt="Klassi-Js" src="./page-objects/100.png">
    </a>
</p>

# klassi-test-project 
[![Webdriverio API](https://img.shields.io/badge/webdriverio-docs-40b5a4)](https://webdriver.io/docs/api.html)
[![Join the chat at https://gitter.im/klassi-js/community](https://badges.gitter.im/klassi-js/community.svg)](https://gitter.im/klassi-js/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
## Usage
If you want to see how the frameworks 
```bash
node ./node_modules/klassi-js/index.js
```

## Options

```bash
--browser [optional]                name of browser to use. defaults to chrome
--tags <@tagName>                   name of tags to run - Multiple TAGS usage
--steps <path>                      path to step definitions. defaults to ./step_definitions
--featureFiles <path>               path to feature definitions. defaults to ./features
--pageObjects <path>                path to page objects. defaults to ./page-objects
--sharedObjects <paths>             path to shared objects - repeatable. defaults to ./shared-objects
--reports <path>                    output path to save reports. defaults to ./reports
--disableReport                     disables the test report from opening after test completion
--email                             sends email reports to stakeholders
--env <path>                        name of environment to run the framework/test in. default to dev
--reportName [optional]             name of what the report would be called i.e. 'Automated Test'
--updateBaselineImages              automatically update the baseline image after a failed comparison or new images
--wdProtocol                        the switch to change the browser option from using devtools to webdriver
--closeBrowser [optional]           this closes the browser after each scenario, defaults to always, use 'no' if you want to want to keep the  browser open
```
## Options Usage
```bash
  --closeBrowser no || this leaves the browser open after the session completes, useful when debugging test
```

## Step definitions
The following variables are available within the ```Given()```, ```When()``` and ```Then()``` functions:

| Variable | Description |
| :--- | :---  |
| `browser`     | an instance of [webdriverio](https://webdriver.io/docs/setuptypes.html) (_the browser_) |
| `pageObjects`       | collection of **page** objects loaded from disk and keyed by filename |
| `sharedObjects`     | collection of **shared** objects loaded from disk and keyed by filename |
| `helpers`    | a collection of [helper methods](runtime/helpers.js) _things webdriver.io does not provide but really should!_ |
| `expect`     | instance of [chai expect](https://www.chaijs.com/api/bdd/) to ```expect('something').to.equal('something')``` |
| `assert`     | instance of [chai assert](https://www.chaijs.com/api/assert/) to ```assert.isOk('everything', 'everything is ok')``` |


## Helpers
Klassi-js contains a few helper methods to help along the way, these methods are:
```js
// Load a URL, returning only when the <body> tag is present
await helpers.loadPage('https://duckduckgo.com');

// take image for comparisson
await helpers.takeImage('flower_1-0.png', 'div.badge-link--serp.ddg-extension-hide.js-badge-link');

// compare taken image with baseline image
await helpers.compareImage('flower_1-0.png');

// get the content of an endpoint
await helpers.apiCall('http://httpbin.org/', 'get');

// writing content to a text file
await helpers.writeToTxtFile(filepath, output);

// reading content froma text file
await helpers.readFromFile(filepath);

// applying the current date to files
await helpers.currentDate();

// get current date and time (dd-mm-yyyy-00:00:00)
await helpers.getCurrentDateTime()

// clicks an element (or multiple if present) that is not visible, useful in situations where a menu needs a hover before a child link appears
await helpers.clickHiddenElement(selector, textToMatch)

// This method is useful for dropdown boxes as some of them have default 'Please select' option on index 0
await helpers.getRandomIntegerExcludeFirst(range)

// Get the href link from an element
await helpers.getLink(selector)

//wait until and element is visible and click it
await helpers.waitAndClick(selector)

// wait until element to be in focus and set the value
await helpers.waitAndSetValue(selector, value)

// function to get element from frame or frameset
await helpers.getElementFromFrame(frameName, selector)

// This will assert 'equal' text being returned
await helpers.assertText(selector, expected)

// This will assert text being returned includes
await helpers.expectToIncludeText(selector, expectedText)

// this asserts that the returned url is the correct one
await helpers.assertUrl(expected)
```

## Browser usage
By default, the test run using Google Chrome/devtools protocol, to run tests using another browser locally you'll need a local selenium server running, supply the browser name along with the `--wdProtocol --browser` switch

| Browser | Example |
| :--- | :--- |
| Chrome | `--wdProtocol --browser chrome` |
| Firefox | `--wdProtocol --browser firefox` |

All other browser configurations are available via 3rd party services (i.e. browserstack | lambdatest)

Selenium Standalone Server installation
```bash
yarn global add selenium-standalone@latest
selenium-standalone install && selenium-standalone start
```

## How to debug

Most webdriverio methods return a [JavaScript Promise](https://spring.io/understanding/javascript-promises "view JavaScript promise introduction") that is resolved when the method completes. The easiest way to step in with a debugger is to add a ```.then``` method to the function and place a ```debugger``` statement within it, for example:

```js
  When(/^I search DuckDuckGo for "([^"]*)"$/, function (searchQuery, done) {
    elem = browser.$('#search_form_input_homepage').then(function(input) {
      expect(input).to.exist;
      debugger; // <<- your IDE should step in at this point, with the browser open
      return input;
    })
       done(); // <<- let cucumber know you're done
  });
```
## Demo
To demo the framework without installing it into your project use the following commands:
```js
 # checkout this repo
  git clone https://github.com/larryg01/klassi-js.git

 # browser to the repo
  cd klassi-js

 # install the dependencies
  yarn install

 # run the search feature
  node index.js --tags @search
```

## License

Licenced under [Apache License](LICENSE) &copy; 2016 [Larry Goddard](https://www.linkedin.com/in/larryg)
