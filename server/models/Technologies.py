from connection import db
from datetime import datetime

class Technologies(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    image = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now())

    def __init__(self, name, image):
        self.name = name
        self.image = image

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'image': self.image,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
    
    
