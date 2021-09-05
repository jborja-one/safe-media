from .db import db


class Group(db.Model):
    __tablename__ = 'groups'

    id = db.Column(db.Integer, primary_key=True)
    group_category = db.Column(db.String(100), nullable=False)
    group_title = db.Column(db.String(100), nullable=True)
    group_icon_id = db.Column(db.Integer, db.ForeignKey(
        'group_icons.id'), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    users = db.relationship("User", back_populates="groups")
    icon = db.relationship("GroupIcon", back_populates="groups")
    albums = db.relationship(
        "Album", back_populates="groups", cascade='all, delete')

    def to_dict(self):
        return {
            'id': self.id,
            'group_category': self.group_category,
            'group_title': self.group_title,
            'group_icon_id': self.group_icon_id,
            'user_id': self.user_id
        }
