from flask import Blueprint
from app.models import db
from app.models.group_icons import GroupIcon

group_icon_routes = Blueprint('group_icons', __name__)


@group_icon_routes.route('/')
def getIcons():
    icons = GroupIcon.query.all()
    return {'icons': [group_icon.to_dict() for group_icon in icons]}
