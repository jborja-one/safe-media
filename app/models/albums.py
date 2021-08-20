from .db import db


class Album(db.Model):
    __tablename__ = 'albums'

    id = db.Column(db.Integer, primary_key=True)
    album_category = db.Column(db.String(100), nullable=False)
    album_name = db.Column(db.String(100), nullable=True)
    icon_img = db.Column(db.Text(500), nullable=False)
    group_id = db.Column(db.Integer, nullable=False)

    restaurant = db.relationship(
        "Restaurant", back_populates="address")

    def to_dict(self):
        return {
            'id': self.id,
            'album_category': self.album_category,
            'album_name': self.album_name,
            'icon_img': self.icon_img,
            'group_id': self.group_id,
        }
