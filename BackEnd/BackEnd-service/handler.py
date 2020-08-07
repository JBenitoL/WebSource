import json
import os
import smtplib
import ssl

from email.mime.text import MIMEText
from email.header import Header

TOKEN = os.environ.get('Pass')


def hello(event, context):

    print(event)
    print(1)
    print(event["body"])
    print(2)
    print(context)
    personal = "jbenitollorens@gmail.com"
    port = 587  # For starttls
    smtp_server = "smtp.gmail.com"
    sender_email = "jbenitollorensweb@gmail.com"
    context1 = ssl.create_default_context()
    password = TOKEN
    print(context1)

    try:
        print('va yendo')
        body = event["body"]

        body = json.loads(body)
        receiver_email = body["emailTo"]

        Subject = body["Subject"]

        texto = body["message"]

        msg = MIMEText(texto, 'plain', 'utf-8')
        msg['From'] = sender_email
        msg['To'] = personal + ', ' + receiver_email
        msg['Subject'] = Header("Correct submission: " + Subject, 'utf-8')

        context = ssl.create_default_context()
        with smtplib.SMTP(smtp_server, port) as server:
            server.ehlo()  # Can be omitted
            server.starttls(context=context1)
            server.ehlo()  # Can be omitted
            server.login(sender_email, password)
            server.sendmail(
                sender_email, [receiver_email, personal], msg.as_string())

        return {
            'statusCode': 200,
        }
    except:

        msg = "Subject: Error\n\n Ha habido un error con un envio del correo, chequea aws. "
        print('Paso el except')
        print(msg)
        with smtplib.SMTP(smtp_server, port) as server:
            server.ehlo()  # Can be omitted
            server.starttls(context=context1)
            server.ehlo()  # Can be omitted
            server.login(sender_email, password)
            server.sendmail(
                sender_email, personal, msg)


# return json.dumps(body)
# Use this code if you don't use the http event with the LAMBDA-PROXY
# integration
"""
    return {
        "message": "Go Serverless v1.0! Your function executed successfully!",
        "event": event
    }
    """
