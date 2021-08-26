from .db import db


class AlbumIcon(db.Model):
    __tablename__ = 'album_icons'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    img_url = db.Column(db.Text, nullable=False)

    albums = db.relationship("Album", back_populates="icon")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'img_url': self.img_url
        }
