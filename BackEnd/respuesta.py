
import requests

url = 'https://frpuocxxql.execute-api.eu-west-3.amazonaws.com/dev/users/create'
payload = {'emailTo': 'jbenitollorens@gmail.com',
           'Subject': 'Holá', 'message': 'Esto es mi mensajé ñññ'}
r = requests.post(url, params=payload)
print(r.text)
