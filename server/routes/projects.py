from flask import Blueprint, request, jsonify
from connection.database import db

from models import Project, Technologies

projects = Blueprint('projects', __name__)

# Create a new project
@projects.route('/', methods=['POST'])
def create_project():
    data = request.get_json()
    technologies = []
    for tech_data in data['technologies']:
        tech = Technologies.query.filter_by(name=tech_data['name']).first()
        if not tech:
            tech = Technologies(name=tech_data['name'], image=tech_data['image'])                
            db.session.add(tech)
            db.session.commit()
        technologies.append(tech)

    new_project = Project(
        title=data['title'],
        description=data['description'],
        image=data['image'],
        deployed_link=data['deployed_link'],
        github_link=data['github_link']
    )

    new_project.technologies = technologies
    db.session.add(new_project)
    db.session.commit()

    return jsonify(new_project.serialize())

# Get all projects
@projects.route('/all', methods=['GET'])
def get_projects():
    projects = Project.query.order_by(Project.id.desc()).all()
    return jsonify([project.serialize() for project in projects])

# Get a single project (by id)
@projects.route('/<int:id>', methods=['GET'])
def get_project(id):
    project = Project.query.get(id)
    return jsonify(project.serialize())

# Update a project (by id)
@projects.route('/<int:id>', methods=['PUT'])
def update_project(id):
    project = Project.query.get(id)
    data = request.get_json()

    project.title = data['title']
    project.description = data['description']
    project.image = data['image']
    project.deployed_link = data['deployed_link']
    project.github_link = data['github_link']

    technologies = []
    for tech_data in data['technologies']:
        tech = Technologies.query.filter_by(name=tech_data['name']).first()
        if not tech:
            tech = Technologies(name=tech_data['name'], image=tech_data['image'])                
            db.session.add(tech)
            db.session.commit()
        technologies.append(tech)


    db.session.commit()

    return jsonify(project.serialize())

# Delete a project (by id)
@projects.route('/<int:id>', methods=['DELETE'])
def delete_project(id):
    project = Project.query.get(id)

    db.session.delete(project)
    db.session.commit()

    return jsonify(project.serialize())