from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import re
import requests
import pandas as pd
import os
import collections
import time
import csv

url = 'https://stats.nba.com/players/traditional/?sort=PTS&dir=-1'
driver = webdriver.Chrome()
driver.get(url)
csv_file = open('nbaplayerstats.html', 'w')
writer = csv.writer(csv_file)

# automate web navigation, select table
select = Select(driver.find_element_by_class_name(
    'stats-table-pagination__select'))
select.select_by_value('string:All')
WebDriverWait(driver, 10)
soup = BeautifulSoup(driver.page_source, 'lxml')
player_table = soup.find(
    'div', {'class': 'nba-stat-table__overflow'})

# write to csv
csv_file.write(str(player_table))
csv_file.close()
