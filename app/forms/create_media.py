from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextField
from wtforms.validators import DataRequired
from app.models import MediaItem


class CreateMedia(FlaskForm):
    item_name = StringField('File Name', validators=[DataRequired()])
    item_url = TextField('File URL', validators=[DataRequired()])
    album_id = IntegerField('Album ID', validators=[DataRequired()])
    user_id = IntegerField('User ID', validators=[DataRequired()])
