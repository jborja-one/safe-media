from flask import Blueprint, redirect, request, session
from flask_login import login_required, current_user
from app.models.groups import Group
from app.models.group_icons import GroupIcon
from app.models.user import User
from app.models.db import db
from app.forms.create_group_form import CreateGroup

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


@group_routes.route('/<int:id>')
def get_groups(id):
    groups_query = Group.query.filter(Group.user_id == id).all()
    groups = [group.to_dict() for group in groups_query]
    for group in groups:
        group['icon'] = GroupIcon.query.get(group['group_icon_id']).to_dict()
        group['user'] = User.query.get(group['user_id']).to_dict()
    return {'groups': groups}


@group_routes.route('/', methods=['POST'])
def create_group():
    form = CreateGroup()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        group = Group(
            group_category=form.data['group_category'],
            group_title=form.data['group_title'],
            group_icon_id=form.data['group_icon_id'],
            user_id=current_user.id
        )
        db.session.add(group)
        db.session.commit()
        return {group.to_dict()}
    errors = form.errors
    return {'errors': validation_errors_to_error_messages(errors)}, 401


@group_routes.route('/<int:id>', methods=['DELETE'])
def delete_group(id):
    group = Group.query.get(id)
    db.session.delete(group)
    db.session.commit()
    return{'message': 'Delete Success'}, 204
