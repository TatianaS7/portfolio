from models import Project, Technologies
import json
from connection import db

def seedData():
    db.session.query(Project).delete()

    with open('server/seed_data/seedProjects.json') as f:
        projects = json.load(f)

    for project in projects:
        technologies = []
        for tech_data in project['technologies']:
            tech = Technologies.query.filter_by(name=tech_data['name']).first()
            if not tech:
                tech = Technologies(name=tech_data['name'], image=tech_data['image'])                
                db.session.add(tech)
                db.session.commit()
            technologies.append(tech)
        new_project = Project(
            title=project['title'],
            description=project['description'],
            image=project['image'],
            deployed_link=project['deployed_link'],
            github_link=project['github_link'],
        )

        new_project.technologies = technologies
        db.session.add(new_project)
    db.session.commit()

    print(f'{len(projects)} projects seeded')