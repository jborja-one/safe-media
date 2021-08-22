from .db import db


class MediaItem(db.Model):
    __tablename__ = 'media_items'

    id = db.Column(db.Integer, primary_key=True)
    item_name = db.Column(db.String(100), nullable=False)
    album_id = db.Column(db.Integer, db.ForeignKey(
        'albums.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    user = db.relationship("User", back_populates="media_items")
    album = db.relationship('Album', back_populates='media_items')

    def to_dict(self):
        return {
            'id': self.id,
            'item_name': self.item_name,
            'album_id': self.album_id,
            'user_id': self.user_id
        }
