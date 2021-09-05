from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField
from wtforms.validators import DataRequired
from app.models import Group


class CreateGroup(FlaskForm):
    group_category = StringField('Group Category', validators=[DataRequired()])
    group_title = StringField('Group Title', validators=[DataRequired()])
    group_icon_id = SelectField(
        'Icon Id', choices=[1, 2, 3, 4], validators=[DataRequired()])
    user_id = IntegerField('User ID', validators=[DataRequired()])
