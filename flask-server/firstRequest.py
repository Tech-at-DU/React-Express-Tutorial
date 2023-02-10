import re
import requests

res_1 = requests.get('http://127.0.0.1:3000')
res_1_text = res_1.text
print(res_1)
print(res_1_text)

res_2 = requests.get('http://127.0.0.1:3000/json')
print(res_2)
print(res_2.json())