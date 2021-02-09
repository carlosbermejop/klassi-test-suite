/**
 Klassi Automated Testing Tool
 Created by Larry Goddard
 */
/**
 Copyright © klassitech 2016 - Larry Goddard <larryg@klassitech.co.uk>

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

module.exports = {

  "dataConfig": {
    "projectName": "Klassi-Test-Suite",
    "reportName": "Klassi Automated Report",
    "projectReportName": "Klassi Test Suite",

    "emailData": {
        "emailList": "QaAutoTest<qaautotest@klassitech.co.uk> ",
        "accessibilityReport": "Yes"
    },

    /**
     * if you are using browserStack
     */
    "bslocal": {
      "localIdentifier": "QaAutoTest",
      "userName": "larryg2",
      "accessKey": "JhxyJ1qdNhAx75KuwpQc",
      "crossBrowserUrl": "@api.browserstack.com/automate",
      "bsProjectName": "Klassi Automated Test", // must be the same as name in the browserstack folder
    },

    /**
     *  if you are using lambdatest
     */
    "lttunnel": {
      "localIdentifier": "QaAutoTest",
      "userName": "Larry.Goddard",
      "accessKey": "KQX4SSMlKaqhFDbHJxTR2t9a7JJB8xIzuzd0ZOCa4hWypdBHMg",
      "crossBrowserUrl": "hub.lambdatest.com",
      "ltProjectName": "Klassi Automated Test", // must be the same as name in the lambdatest folder
    },

    /**
     * if you are using AWS for storing and processing reports
     */
    "awsConfig": {
      "ID": "xxxxxxxxxxxxxxxxxx",
      "SECRET": "xxxxxxxxxxxxxxxxxx",
      "REGION": "eu-west-2",
      "BUCKET_NAME": "xxxxxxx-automated-reports",
      "DOMAIN_NAME": "xxxxxxxxxxxxxxxxxxxx.amazonaws.com"
    },
  },

  /**
   * this is for your environment setups
   */
  "environment": {
    "dev": {
      "envName": "DEVELOPMENT",
      "base_url": "https://duckduckgo.com/",
      "api_base_url": "http://httpbin.org/"
    },

    "test": {
      "envName": "TEST",
      "base_url": "https://duckduckgo.com/",
      "api_base_url": "http://httpbin.org/"
    },

    "uat": {
      "envName": "UAT",
      "base_url": ""
    }
  }
}