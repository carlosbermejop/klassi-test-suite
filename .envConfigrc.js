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
    "projectName": "projectName", // this is what your project will be called in LambdaTest/Browserstack
                                  // it must also be placed in the Browser Capabilities

    "emailData": {
      "emailList": "QA<test@test.com> ", // list of addresses your report will be emailed too
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
