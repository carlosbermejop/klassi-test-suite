/**
 klassi-js
 Copyright © 2016 - Larry Goddard

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
module.exports = {
  /**
   * this is for your project environment setups
   * all relevant details for each environment i.e. username, passwords etc.
   */
  "environment": {
    "dev": {
      "envName": "DEVELOPMENT",
      "base_url": "https://duckduckgo.com/",
      "api_base_url": "http://httpbin.org/get"
    },

    "test": {
      "envName": "TEST",
      "base_url": "https://duckduckgo.com/",
      "api_base_url": "http://httpbin.org/get",
    },

    "uat": {
      "envName": "UAT",
      "base_url": "https://duckduckgo.com/",
      "api_base_url": "http://httpbin.org/get"
    }
  },

  "dataConfig": {
    "projectName": "klassi-js", // project name used in LambdaTest/Browserstack

    "emailData": {
      "emailList": "QA<test@test.com> ",
      "accessibilityReport": "Yes"
    },

    /**
     * if you are using browserStack fill in your details here
     * the delete lttunnel below and the lambdatest folder
     */
    "bslocal": {
      "localIdentifier": "",
      "userName": "",
      "accessKey": ""
    },

    /**
     *  if you are using lambdatest fill in your details here
     *  then delete bslocal above and the browserstack folder
     */
    "ltlocal": {
      "userName": "",
      "accessKey": ""
    },

    /**
     * if you are using AWS for storing and processing reports
     * Else this can be deleted
     */
    "awsConfig": {
      "s3FolderName": "", // This must match your Github Repo Name exactly (minus the .git)
      "ID": "",
      "SECRET": "",
      "REGION": "",
      "BUCKET_NAME": "",
      "DOMAIN_NAME": ""
    },
  },
}
