"""empty message

Revision ID: 3cfbdde23928
Revises: 141d4163b066
Create Date: 2021-08-29 22:26:23.780944

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3cfbdde23928'
down_revision = '141d4163b066'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('media_items', sa.Column('item_url', sa.Text(), nullable=False))
    op.add_column('users', sa.Column('profile_img', sa.Text(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'profile_img')
    op.drop_column('media_items', 'item_url')
    # ### end Alembic commands ###
