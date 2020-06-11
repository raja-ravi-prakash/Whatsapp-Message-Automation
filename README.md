# Whatsapp-Message-Automation

This a simple tool to automate message in whatsapp with contact names..
**{ For Windows }**

## Install

- As this is not a one file thing, you need to install a couple of things ..

  - **Python** : You need this because this is tha main tool .

  - **VueJS** : The UI which is created is of VueJS.

  - **ElectronJS** : To Make it Cross-Platform the above VueJS application is bundled with Electron Build .

  - Install the required binaries and also install dependencies ad follows ..

    ```
    /app> yarn
    /app/electron-app>  yarn
    ```

## How To

- Run the following command in root directory to begin the game.

  ```cmd
  > run
  ```

- The above command autofills the **info.txt** with the numbers you add in the UI thing . And the numbers pattern should be..

  ```
  91XXXXXXXXXX hi
  91XXXXXXXXXX hi
  ```

- If you want to run a fresh build with a dev server .

  ```
  > cd app
  > yarn run start
  ```

- If you want to run only electron thing ..

  ```
  > cd app
  > yarn run electron-dev
  ```

## LICENSE

```
  MIT License

  Copyright (c) 2020 Raja Ravi Prakash

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
```
