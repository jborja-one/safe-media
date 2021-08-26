from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField
from wtforms.validators import DataRequired
from app.models import Album


class CreateAlbum(FlaskForm):
    album_category = StringField('Album Category', validators=[DataRequired()])
    album_title = StringField('Album Title', validators=[DataRequired()])
    album_icon_id = SelectField(
        'Icon Id', choices=[1, 2, 3, 4, 5, 6], validators=[DataRequired()])
    group_id = IntegerField('Group ID', validators=[DataRequired()])
