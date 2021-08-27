from flask import Blueprint
from app.models import db
from app.models.album_icons import AlbumIcon

album_icon_routes = Blueprint('album_icons', __name__)


@album_icon_routes.route('/')
def getIcons():
    icons = AlbumIcon.query.all()
    return {'icons': [album_icon.to_dict() for album_icon in icons]}
