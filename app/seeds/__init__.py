from flask.cli import AppGroup
from .users import seed_users, undo_users
from .groups import seed_groups, undo_groups
from .albums import seed_albums, undo_albums
from .album_icons import seed_album_icons, undo_album_icons
from .group_icons import seed_group_icons, undo_group_icons

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_album_icons()
    seed_group_icons()
    seed_groups()
    seed_albums()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_album_icons()
    undo_group_icons()
    undo_groups()
    undo_albums()
    # Add other undo functions here
