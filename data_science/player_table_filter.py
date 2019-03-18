from bs4 import BeautifulSoup
import re
import pandas as pd
import os
import collections
import time
import csv

# filter html table, get specified attributes for each player

f = open('./nbaplayerstats.html')

soup = BeautifulSoup(f.read(), 'lxml')

'''
playername
team
age
gp
w
l
min
pts
fgm
fga
fg%
3pm
3pa
3p%
ftm
fta
ft%
oreb
dreb
reb
ast
tov
stl
blk
pf
fantasypoints
doubledoubles
tripledoubles
plusminus
'''

players = soup.find_all('tbody')[0].find_all('tr')
csv_file = open('player_list.csv', 'w')
for player in players:
    # csv_file.write(player.text)
    stats = player.find_all('td')
    for stat in stats[1:]:
        csv_file.write(stat.text + '\t')
    csv_file.write('\n')

'''
players = soup.find_all(
    'td', {'class': 'player'})
csv_file = open('player_list.csv', 'w')

for player in players:
    csv_file.write(player.text + '\n')
'''


csv_file.close()
