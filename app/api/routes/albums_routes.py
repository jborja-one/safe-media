from flask import Blueprint, redirect
from flask_login import login_required
from app.models.albums import Album
from app.models.groups import Group
from app.models.album_icons import AlbumIcon

from app.models.db import db

album_routes = Blueprint('album', __name__)


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
        album['user'] = Group.query.get(album['album_icon_id']).to_dict()
    return{'albums': albums}
