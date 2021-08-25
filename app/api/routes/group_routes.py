from flask import Blueprint, redirect
from flask_login import login_required
from app.models.groups import Group
from app.models.group_icons import GroupIcon
from app.models.user import User
from app.models.db import db

group_routes = Blueprint('groups', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@group_routes.route('/<int:userId>')
def get_groups(userId):
    groups_query = Group.query.filter(Group.user_id == userId).all()
    groups = [group.to_dict() for group in groups_query]
    for group in groups:
        group['icon'] = GroupIcon.query.get(group['group_icon_id']).to_dict()
        group['user'] = User.query.get(group['user_id']).to_dict()
    print(list(groups), '*************************')
    return {'groups': groups}
