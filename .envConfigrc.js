module.exports = {

  /**
   * this is for your project environment setups
   * all relevant details for each environment i.e. username, passwords etc.
   */
  "environment": {
    "dev": {
      "envName": "DEVELOPMENT",
      "base_url": "https://duckduckgo.com/",
    },

    "test": {
      "envName": "TEST",
      "base_url": "https://duckduckgo.com/",
    },

    "uat": {
      "envName": "UAT",
      "base_url": "https://duckduckgo.com/"
    }
  },

  "dataConfig": {
    "projectName": "Klassi Automated Test", // as its called in your Git repo except the '-_'
    "reportName": "Automated Report", // the name you want at the top of your report

    "emailData": {
      "emailList": "QaAutoTest<admin@klassitech.co.uk> ", // list of addresses your report will be emailed too
      "accessibilityReport": "Yes"
    },

    // /**
    //  * if you are using browserStack fill in your details here
    //  * the delete lttunnel below and the lambdatest folder
    //  */
    // "bslocal": {
    //   "localIdentifier": "your local identifier name",
    //   "userName": "your username",
    //   "accessKey": "your access key",
    //   "crossBrowserUrl": "@api.browserstack.com/automate",
    //   "bsProjectName": "projectName" // this name must be the same as in the browser configurations files in the browserstack folder
    // },
    //
    // /**
    //  *  if you are using lambdatest fill in your details here
    //  *  then delete bslocal above and the browserstack folder
    //  */
    // "lttunnel": {
    //   "userName": "your user name",
    //   "accessKey": "your access key",
    //   "crossBrowserUrl": "hub.lambdatest.com",
    //   "ltProjectName": "Project Name" // this name must be the same as in the browser configurations files in the lambdatest folder
    // },

    "bslocal": {
      "localIdentifier": "QaAutoTest",
      "userName": "larryg2",
      "accessKey": "JhxyJ1qdNhAx75KuwpQc",
      "crossBrowserUrl": "@api.browserstack.com/automate"
    },

    /**
     *  if you are using lambdatest
     */
    "lttunnel": {
      "userName": "Larry.Goddard",
      "accessKey": "KQX4SSMlKaqhFDbHJxTR2t9a7JJB8xIzuzd0ZOCa4hWypdBHMg",
      "crossBrowserUrl": "@api.lambdatest.com/automation/api/v1"
    },

    /**
     * if you are using AWS for storing and processing reports
     * Else this can be deleted
     */
    "awsConfig": {
      "s3FolderName": "klassi-js", // name as github name
      "ID": "your aws id",
      "SECRET": "your aws secret key",
      "REGION": "your aws region",
      "BUCKET_NAME": "your aws bucket name",
      "DOMAIN_NAME": "your aws domainName.amazonaws.com"
    },
  },
}
