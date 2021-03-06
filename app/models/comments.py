from .db import db


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.Text, nullable=False)
    album_id = db.Column(db.Integer, db.ForeignKey(
        'albums.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    album = db.relationship('Album', back_populates='comments')
    users = db.relationship('User', back_populates='comments')

    def to_dict(self):
        return {
            'id': self.id,
            'comment': self.comment,
            'album_id': self.album_id,
            'user_id': self.user_id,
        }
