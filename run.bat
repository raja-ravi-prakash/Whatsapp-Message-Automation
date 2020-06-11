@echo off
where /R "c:\Program Files (x86)" chrome.exe>temp
set /p locationChrome=<temp
del temp
"%locationChrome%" --incognito --remote-debugging-port=9222 --user-data-dir="C:\Users\%username%\ChromeProfiles\User Data"

type nul>info.txt
cd app/electron-app
npm run prod