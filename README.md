
<p align="center">
    <h1 align="center" font-size: 2.5em > klassi-js <br>
    <a href="https://github.com/larryg01/klassi-js/">
        <img alt="Klassi-Js" src="https://github.com/larryg01/klassi-js/blob/master/runtime/img/klassiLogo.png">
    </a> </h1> </p>

<p align="center">
    <a href ="https://travis-ci.org/larryg01/klassi-js">
    <img alt="Build Status" src="https://travis-ci.org/larryg01/klassi-js.svg?branch=master">
    </a> 
    <a href="https://github.com/larryg01/klassi-js/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/larryg01/klassi-js">
    </a> 
    <a href="https://gitter.im/klassi-js/klassi-js">
    <img alt="Gitter" src="https://badges.gitter.im/klassi-js/klassi-js.svg">
    </a>
    <a href="https://webdriver.io/">
    <img alt="WebdriverIO" src="https://img.shields.io/badge/tested%20with-webdriver.io-%23ea5906">
    </a>
    <a href="https://webdriver.io/docs/api.html">
    <img alt="WebdriverIO" src="https://img.shields.io/badge/webdriverio-docs-40b5a4">
    </a> <br>
  klassi-Js is a debuggable BDD Javascript test automation framework. Built on <a href="http://webdriver.io/"> webdriver.io <a/> (Next-gen browser and mobile automation test framework for Node.js)</a> and <a href="https://github.com/cucumber/cucumber-js"> cucumber-js </a> with integrated Visual, accessibility and API Testing, your test can run locally or in the cloud using Lambdatest, BrowserStack or Sauce Labs 
</p>
 

## Usage
After checking out the template go to the project root and run:
```bash
yarn install
```

## Options

```bash
--help                              output usage information
--version                           output the version number
--browser <name>                    name of browser to use (chrome, firefox). defaults to chrome
--tags <@tagName>                   name of cucumber tags to run - Multiple TAGS usage
--steps <path>                      path to step definitions. defaults to ./step_definitions
--featureFiles <path>               path to feature definitions. defaults to ./features
--pageObjects <path>                path to page objects. defaults to ./page-objects
--sharedObjects <paths>             path to shared objects - repeatable. defaults to ./shared-objects
--reports <path>                    output path to save reports. defaults to ./reports
--disableReport                     disables the test report from opening after test completion
--email                             sends email reports to stakeholders
--env <path>                        name of environment to run the framework/test in. default to dev
--reportName <optional>             name of what the report would be called i.e. 'Automated Test'
--remoteService <optional>          which remote driver service, if any, should be used e.g. lambdatest
--extraSettings <optional>          further piped configs split with pipes
--updateBaselineImages              automatically update the baseline image after a failed comparison
--wdProtocol                        the switch to change the browser option from using devtools to webdriver
--dlink                             the switch for projects with their test suite, within a Test folder of the repo
--closeBrowser <optional>           this closes the browser after each scenario, defaults to always, use 'no' if you want to want to keep the  browser open
```
## Options Usage
```bash
  --closeBrowser no || this leaves the browser open after the session completes, useful when debugging test
```

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
await helpers.apiCall('http://httpbin.org/get', 'get');

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

## Commit conventions

To enforce best practices in using Git for version control, this project includes a **Husky** configuration. Note that breaking the given rules will block the commit of the code.

Bear in mind that the `/.circleci/config.yml` file **in each project using Klassi JS as a dependency** needs to be modified to change from `yarn install` to `yarn install --network-concurrency 1`. This is to avoid race conditions in multiple calls to the registry during the installation process.

### Commits
After committing the staged code, the Husky scripts will enforce the implementation of the [**Conventional Commits specification**](https://www.conventionalcommits.org/en/v1.0.0/#summary).

To summarize them, all commits should follow the following schema:

```
git commit -m "<type>: <subject>"
```

Where **type** is one of the following:

- **fix**: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
- **feat**: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
- **BREAKING CHANGE**: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.
- Types other than **fix:** and **feat:** are allowed, for example @commitlint/Tconfig-conventional (based on the Angular convention) recommends **build:, chore:, ci:, docs:, style:, refactor:, perf:, test:**, and others.
  footers other than **BREAKING CHANGE:** may be provided and follow a convention similar to git trailer format.

Please keep in mind that the **subject** must be written in lowercase.

### Branch naming

The same script will also verify the naming convention. Please remember that we only allow for two possible branch prefixes:

- **testfix/**
- **automation/**

## License

Licenced under [MIT License](LICENSE) &copy; 2016 [Larry Goddard](https://www.linkedin.com/in/larryg)
