"""create_users_table

Revision ID: ffdc0a98111c
Revises:
Create Date: 2020-11-20 15:06:02.230689

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ffdc0a98111c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('email', sa.String(length=255), nullable=False),
                    sa.Column('first_name', sa.String(
                        length=100), nullable=False),
                    sa.Column('first_name', sa.String(
                        length=100), nullable=False),
                    sa.Column('password', sa.String(
                        length=100), nullable=False),
                    sa.PrimaryKeyConstraint('id'),
                    sa.UniqueConstraint('email'),
                    )
    # ### end Alembic commands ###qqqqqqqqq
    op.create_table('groups',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('group_category', sa.String(
                        length=100), nullable=False),
                    sa.Column('group_title', sa.String(
                        length=100), nullable=False),
                    sa.Column('group_icon_id', sa.Integer(), nullable=True),
                    sa.Column('user_id', sa.Integer, nullable=False),
                    sa.ForeignKeyConstraint('group_icon_id', 'groups.id'),
                    sa.ForeignKeyConstraint('user_id', 'users.id'),
                    sa.PrimaryKeyConstraint('id'),
                    )

    op.create_table('group_icons',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('name', sa.String(
                        length=200), nullable=False),
                    sa.Column('img_url', sa.Text, nullable=False),
                    sa.PrimaryKeyConstraint('id'),
                    )

    op.create_table('albums',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('album_category', sa.String(
                        length=100), nullable=False),
                    sa.Column('album_title', sa.String(
                        length=100), nullable=False),
                    sa.Column('album_icon_id', sa.Integer(), nullable=True),
                    sa.Column('group_id', sa.Integer(), nullable=False),
                    sa.ForeignKeyConstraint('album_icon_id', 'album_icons.id'),
                    sa.ForeignKeyConstraint('group_id', 'groups.id'),
                    sa.PrimaryKeyConstraint('id'),
                    )

    op.create_table('album_icons',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('name', sa.String(
                        length=200), nullable=False),
                    sa.Column('img_url', sa.Text, nullable=False),
                    sa.PrimaryKeyConstraint('id'),
                    )

    op.create_table('media_items',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('item_name', sa.String(
                        length=100), nullable=False),
                    sa.Column('album_id', sa.Integer(), nullable=False),
                    sa.Column('user_id', sa.Integer(), nullable=True),
                    sa.ForeignKeyConstraint('album_id', 'albums.id'),
                    sa.ForeignKeyConstraint('user_id', 'users.id'),
                    sa.PrimaryKeyConstraint('id'),
                    )

    op.create_table('comments',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('comment', sa.Text, nullable=False),
                    sa.Column('album_id', sa.Integer(), nullable=False),
                    sa.Column('user_id', sa.Integer(), nullable=False),
                    sa.ForeignKeyConstraint('album_id', 'albums.id'),
                    sa.ForeignKeyConstraint('user_id', 'users.id'),
                    sa.PrimaryKeyConstraint('id'),
                    )


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    op.drop_table('groups')
    op.drop_table('group_icons')
    op.drop_table('albums')
    op.drop_table('album_icons')
    op.drop_table('media_items')
    op.drop_table('comments')
    # ### end Alembic commands ###