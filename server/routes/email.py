from flask import Blueprint, request, jsonify
import smtplib
from dotenv import load_dotenv
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

env = load_dotenv()

recipient_email = os.getenv("recipient_email")
smtp_server = os.getenv("smtp_server")
smtp_port = os.getenv("smtp_port")
smtp_username = os.getenv("smtp_username")
smtp_password = os.getenv("smtp_password")

email = Blueprint('email', __name__)

def send_email(body):
    name = body['name']
    sender_email = body['email']
    body = body['message']

    # Create a multipart message and set headers
    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = recipient_email
    message["Subject"] = f"{name} - SWE Portfolio Contact Form"

    # Add body to email
    message.attach(MIMEText(body, "plain"))

    # Connect to the server
    try:
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(smtp_username, smtp_password)
            server.sendmail(sender_email, recipient_email, message.as_string())
            print("Email sent successfully")
    except Exception as e:
        print(f"Error sending email: {e}")
 

# Route to handle email sending
@email.route('/', methods=['POST'])
def send_email_route():
    data = request.get_json()
    try:
        send_email(data)
        return jsonify({"message": "Email sent successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500