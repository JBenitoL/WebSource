
# import smtplib
# import ssl
# import os

# port = 587  # For starttls
# smtp_server = "smtp.gmail.com"
# sender_email = "jbenitollorensweb@gmail.com"
# receiver_email = "jbenitollorens@gmail.com"
# Subject = "Subject"
# msg = "Hola que tal?"
# password = os.environ.get('cuentaWeb')


from email.mime.text import MIMEText


# from email.Header import Header

# -*- coding: utf-8 -*-
from email.mime.text import MIMEText
from email.header import Header


# servidor = smtplib.SMTP()
# servidor.connect(HOST, PORT)
# servidor.login(user, usenha)
assunto = 'Hola'
para = 'jj@jj'
texto = 'Hola que tál?'
corpo = MIMEText(texto, 'plain', 'utf-8')
corpo['From'] = 'aa@aa'
corpo['To'] = para
corpo['Subject'] = Header(assunto, 'utf-8')

print(corpo.as_string())
# servidor.sendmail(user, [para], corpo.as_string())
