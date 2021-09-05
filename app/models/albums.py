from .db import db


class Album(db.Model):
    __tablename__ = 'albums'

    id = db.Column(db.Integer, primary_key=True)
    album_category = db.Column(db.String(100), nullable=False)
    album_title = db.Column(db.String(100), nullable=False)
    album_icon_id = db.Column(db.Integer, db.ForeignKey(
        'album_icons.id'), nullable=True)
    group_id = db.Column(db.Integer, db.ForeignKey(
        'groups.id'), nullable=False)

    groups = db.relationship("Group", back_populates="albums")
    icon = db.relationship("AlbumIcon", back_populates="albums")
    media_items = db.relationship(
        'MediaItem', back_populates='album', cascade='all, delete')
    comments = db.relationship('Comment', back_populates='album')

    def to_dict(self):
        return {
            'id': self.id,
            'album_category': self.album_category,
            'album_title': self.album_title,
            'album_icon_id': self.album_icon_id,
            'group_id': self.group_id,
        }
