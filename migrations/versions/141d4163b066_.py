"""empty message

Revision ID: 141d4163b066
Revises: 07dfa5ce3f12
Create Date: 2021-08-25 09:51:17.314670

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '141d4163b066'
down_revision = '07dfa5ce3f12'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('hashed_password', sa.String(length=255), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'hashed_password')
    # ### end Alembic commands ###
