$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/test/Swiggy.feature");
formatter.feature({
  "name": "Login into swiggy website",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Positive scenario to test login functinonality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has opened swiggy website on chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters correct \"\u003cPhonenumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Phonenumber"
      ]
    },
    {
      "cells": [
        "7978683811"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Positive scenario to test login functinonality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has opened swiggy website on chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Swiggy_login.user_has_opened_swiggy_website_on_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters correct \"7978683811\"",
  "keyword": "When "
});
formatter.match({
  "location": "Swiggy_login.user_enters_correct_something(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not visible\n  (Session info: chrome\u003d83.0.4103.97)\n  (Driver info: chromedriver\u003d2.41.578700 (2f1ed5f9343c13f73144538f15c00b370eda6706),platform\u003dLinux 4.4.0-1122-aws x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 22 milliseconds\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027ip-172-31-4-59\u0027, ip: \u0027172.31.4.59\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-1122-aws\u0027, java.version: \u00271.8.0_282\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dLINUX, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:37262}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578700 (2f1ed5f9343c13f73144538f15c00b370eda6706), userDataDir\u003d/tmp/.org.chromium.Chromium.VlswDF}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d83.0.4103.97, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 306fa8393b0167dbcc8147768fd8071b\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:273)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat test.Swiggy_login.user_enters_correct_something(Swiggy_login.java:54)\n\tat ✽.User enters correct \"7978683811\"(file:src/test/java/test/Swiggy.feature:5)\n",
  "status": "failed"
});
formatter.step({
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Swiggy_login.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});