from flask import Blueprint, redirect, request, session
from flask_login import login_required, current_user
from app.models.albums import Album
from app.models.groups import Group
from app.models.user import User
from app.models.album_icons import AlbumIcon
from app.forms.create_album_form import CreateAlbum

from app.models.db import db

album_routes = Blueprint('albums', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@album_routes.route('/<int:group_id>')
def get_albums(group_id):
    # album_query = Album.query.filter(Album.group_id == group_id).all()
    # albums = [album.to_dict() for album in album_query]
    # # group = Group.query.all()
    # for album in albums:
    #     album['icon'] = AlbumIcon.query.get(album['album_icon_id']).to_dict()
    #     album['group'] = Group.query.get(album['album_icon_id']).to_dict()
    # return{'albums': albums}

    albums = Album.query.filter(Album.group_id == group_id).all()
    new_dict = {'albums': {}, 'groups': {}, 'icons': {}}
    for album in albums:
        new_dict['albums'][album.id] = album.to_dict()
        new_dict['groups'][album.id] = album.to_dict()
        new_dict['icons'][album.icon.id] = album.icon.to_dict()
    # import pdb
    # pdb.set_trace()
    return new_dict


@album_routes.route('/<int:id>', methods=['POST'])
def create_album(id):
    form = CreateAlbum()
    form['csrf_token'].data = request.cookies['csrf_token']
    if not form.validate_on_submit():
        # groupId = Group.query.get(id)
        album = Album(
            album_category=form.data['album_category'],
            album_title=form.data['album_title'],
            album_icon_id=form.data['album_icon_id'],
            group_id=current_user.id
        )
        db.session.add(album)
        db.session.commit()
        return album.to_dict()
    errors = form.errors
    return{'errors': validation_errors_to_error_messages(errors)}, 401


@album_routes.route('/<int:id>', methods=['DELETE'])
def delete_album(id):
    album = Album.query.get(id)
    db.session.delete(album)
    db.session.commit()
    return{'message': 'Delete Success'}, 204
