from .db import db


class Group(db.Model):
    __tablename__ = 'groups'

    id = db.Column(db.Integer, primary_key=True)
    group_category = db.Column(db.String(100), nullable=False)
    group_name = db.Column(db.String(100), nullable=True)
    icon_img = db.Column(db.Text(500), nullable=False)
    user_id = db.Column(db.Integer, nullable=False)

    # restaurant = db.relationship(
    #     "Restaurant", back_populates="address")

    def to_dict(self):
        return {
            'id': self.id,
            'group_category': self.group_category,
            'group_name': self.group_name,
            'icon_img': self.icon_img,
            'user_id': self.user_id
        }
