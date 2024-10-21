import requests

token = '7526733589:AAGqAyj5Q_otWqFXrIXwAtttdJ_A4WI4zTY'
url = f'https://api.telegram.org/bot{token}/sendMessage'
params = {'6335871320': '6335871320', 'Hi': 'Hello, welcome 🌺◀️!'}

response = requests.get(url, params=params)
print(response.json())
