from flask import Blueprint, redirect, request, session
from flask_login import login_required, current_user
from app.models.albums import Album
from app.models.user import User
from app.models.media_items import MediaItem
from app.forms.create_media import CreateMedia
from app.models import db

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


@media_routes.route('/<int:album_id>')
def get_media(album_id):
    # media_query = MediaItem.query.filter(MediaItem.album_id == id).all()
    # media_items = [media.to_dict() for media in media_query]
    # for media in media_items:
    #     media['album'] = Album.query.get(media['album_id']).to_dict()
    #     media['user'] = User.query.get(media['user_id']).to_dict()
    #     media['media_items'] = MediaItem.query.get(media['id']).to_dict()
    # return{'media': media_items}
    media_items = MediaItem.query.filter(MediaItem.album_id == album_id).all()

    new_dict = {'media_items': {}, 'groups': {}}
    for item in media_items:
        new_dict['media_items'][item.id] = item.to_dict()
    return new_dict


@media_routes.route('/<int:id>', methods=['POST'])
def create_media(id):
    form = CreateMedia()
    form['csrf_token'].data = request.cookies['csrf_token']
    if not form.validate_on_submit():
        mediaItem = MediaItem(
            item_name=form.data['item_name'],
            item_url=form.data['item_url'],
            album_id=form.data['album_id'],
            user_id=current_user.id
        )
        db.session.add(mediaItem)
        db.session.commit()
        return mediaItem.to_dict()
    errors = form.errors
    return {'errors': validation_errors_to_error_messages(errors)}, 401


@media_routes.route('/<int:id>', methods=['POST'])
def delete_media(id):
    media_item = MediaItem.query.get(id)
    db.session.delete(media_item)
    db.session.commit()
    return{'message': 'Delete Success'}, 204
