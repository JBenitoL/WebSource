
import smtplib
import ssl
import os

port = 587  # For starttls
smtp_server = "smtp.gmail.com"
sender_email = "jbenitollorensweb@gmail.com"
receiver_email = "jbenitollorens@gmail.com"
Subject = "Subject"
msg = "Hola que tal?"
password = os.environ.get('cuentaWeb')

# message = """\
# Subject: Python

# Mensaje a python."""

message = "Subject: " + Subject + "\n\n" + msg
#
msg = "malcom@example.com,reynolds@example.com,firefly@example.com"
print(msg.split(","))

# context = ssl.create_default_context()
# with smtplib.SMTP(smtp_server, port) as server:
#     server.ehlo()  # Can be omitted
#     server.starttls(context=context)
#     server.ehlo()  # Can be omitted
#     server.login(sender_email, password)
#     server.sendmail(sender_email, receiver_email, message)
