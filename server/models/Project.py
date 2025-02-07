# Create model for Project
# fields: id, title(string), description(string), stack(dict), image(link), link(string), created_at(datetime), updated_at(datetime)

from connection import db
from datetime import datetime

# Association table for the many-to-many relationship
project_technology_association = db.Table('project_technology',
    db.Column('project_id', db.Integer, db.ForeignKey('project.id')),
    db.Column('technology_id', db.Integer, db.ForeignKey('technologies.id'))
)

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    image = db.Column(db.String(255), nullable=False)
    deployed_link = db.Column(db.String(255), nullable=True)
    github_link = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now())

    technologies = db.relationship('Technologies', secondary=project_technology_association, backref=db.backref('projects', lazy=True))

    def __init__(self, title, description, image, deployed_link, github_link):
        self.title = title
        self.description = description
        self.image = image
        self.deployed_link = deployed_link
        self.github_link = github_link

    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'image': self.image,
            'deployed_link': self.deployed_link,
            'github_link': self.github_link,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'technologies': [technology.serialize() for technology in self.technologies]
        }
