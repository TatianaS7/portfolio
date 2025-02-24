from flask import Blueprint, request, jsonify
import smtplib
from dotenv import load_dotenv
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import logging

env = load_dotenv()

# Set up logging
logging.basicConfig(level=logging.INFO)

# Load environment variables
recipient_email = os.getenv("recipient_email")
smtp_server = os.getenv("smtp_server")
smtp_port = os.getenv("smtp_port")
smtp_username = os.getenv("smtp_username")
smtp_password = os.getenv("smtp_password")

email = Blueprint('email', __name__)


# Send email function
def send_email(body):
    name = body.get('name')
    sender_email = body.get('email')
    message_body = body.get('message')

    if not name or not sender_email or not message_body:
            raise ValueError("Missing required fields: name, email, or message.")

    # Create the email message
    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = recipient_email
    message["Subject"] = f"{name} - SWE Portfolio Contact Form"

    # Add body to email
    message.attach(MIMEText(message_body, "plain"))

    # Connect to the server
    try:
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(smtp_username, smtp_password)
            server.sendmail(sender_email, recipient_email, message.as_string())
            logging.info("Email sent successfully")    
    except Exception as e:
        logging.error(f"Error sending email: {e}")
        raise Exception(f"Error sending email: {e}") 

# Route to handle email sending
@email.route('/', methods=['POST'])
def send_email_route():
    try:
        data = request.get_json()

        if not data or not all(k in data for k in ['name', 'email', 'message']):
                return jsonify({"error": "Missing required fields in the request"}), 400
        
        send_email(data)
        return jsonify({"message": "Email sent successfully"}), 200
    except Exception as e:
        logging.error(f"Error in send_email_route: {e}")
        return jsonify({"error": str(e)}), 500