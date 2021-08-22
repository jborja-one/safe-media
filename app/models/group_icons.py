from .db import db


class GroupIcon(db.Model):
    __tablename__ = 'group_icons'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)

    groups = db.relationship("Group", back_populates="icon")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name
        }