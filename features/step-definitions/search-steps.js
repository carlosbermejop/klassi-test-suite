const {envConfigs} = require('../../configs/envConfig.json');

Given(/^The user arrives on the duckduckgo search page$/, async () => {
  // await confSettings.loadPage(process.env.BASE_URL, 10);
  // console.log('this is the name ', envConfig.base_url);
  // console.log('this is the name ', `process.env${BASE_URL}`);
  await confSettings.loadPage(base_url, 10);
});

When(/^they input (.*)$/, async (searchWord) => {
  /** use a method on the page object which also returns a promise */
  await pageObjects.search.performSearch(searchWord);
});

Then(/^they should see some results$/, async () => {
  /** return the promise of an element to the following then */
  await pageObjects.search.searchResult();
});
