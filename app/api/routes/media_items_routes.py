from flask import Blueprint, redirect, request, session
from flask_login import login_required
from app.models.albums import Album
from app.models.user import User
from app.models.media_items import MediaItem

media_routes = Blueprint('media', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@media_routes.route('/<int:id>')
def get_media(id):
    media_query = MediaItem.query.filter(MediaItem.album_id == id).all()
    media_items = [media.to_dict() for media in media_query]
    for media in media_items:
        media['album'] = Album.query.get(media['album_id']).to_dict()
        media['user'] = User.query.get(media['user_id']).to_dict()
        media['media_items'] = MediaItem.query.get(media['id']).to_dict()
    return{'media': media_items}
