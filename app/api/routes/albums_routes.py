from flask import Blueprint, redirect
from flask_login import login_required
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


@album_routes.route('/<int:id>')
def get_albums(id):
    album_query = Album.query.filter(Album.group_id == id).all()
    albums = [album.to_dict() for album in album_query]
    for album in albums:
        album['icon'] = AlbumIcon.query.get(album['album_icon_id']).to_dict()
        album['group'] = Group.query.get(album['album_icon_id']).to_dict()
        # album['user'] = User.query.get(album['user_id']).to_dict()
    return{'albums': albums}


@album_routes.route('/', methods=['POST'])
def create_album():
    form = CreateAlbum()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        album = Album(
            album_category=form.data['album_category'],
            group_title=form.data['group_title'],
            album_icon_id=form.data['album_icon_id'],
            group_id=groups.user_id
        )
        db.session.add(album)
        db.session.commit()
        return(album.to_dict())
    errors = form.errors
    return{'errors': validation_errors_to_error_messages(errors)}, 401


@album_routes.route('/<int:id>', methods=['DELETE'])
def delete_album(id):
    album = Album.query.get(id)
    db.session.delete(album)
    db.session.commit()
    return{'message': 'Delete Success'}, 204
