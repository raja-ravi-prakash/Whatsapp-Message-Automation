from selenium.webdriver.chrome.options import Options
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoAlertPresentException
import time


def send(userNumber, driver, message):
    driver.get(
        f'https://web.whatsapp.com/send?phone={userNumber}&text={message}')
    try:
        time.sleep(3)
        sendButton = driver.find_element_by_xpath(
            '//span[@data-icon="send"]')
        sendButton.click()
        driver.switch_to.alert.accept()
    except NoAlertPresentException:
        print("Alert Box Handled..")


options = Options()
options.add_experimental_option("debuggerAddress", "127.0.0.1:9222")
driver = webdriver.Chrome(
    executable_path='./driver/chromedriver.exe', options=options)

f = open("info.txt", "r")
for user in f:
    data = user.split(" ")
    send(data[0], driver, data[1])
