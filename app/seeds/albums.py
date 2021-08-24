from app.models import db, Album


# Adds a demo user, you can add other users here if you want
def seed_albums():
    album_1 = Album(
        album_category='Birthdays',
        album_title='John\'s Birthday',
        album_icon_id=1,
        group_id=1)
    album_2 = Album(
        album_category='Holidays',
        album_title='Thanksgiving 2020',
        album_icon_id=2,
        group_id=1)
    album_3 = Album(
        album_category='Events',
        album_title='4th of July 2021',
        album_icon_id=3,
        group_id=1)
    album_4 = Album(
        album_category='Birthdays',
        album_title='Boss\' Birthday',
        album_icon_id=1,
        group_id=2)
    album_5 = Album(
        album_category='Work-Fun',
        album_title='Retreat 2020',
        album_icon_id=4,
        group_id=2)
    album_6 = Album(
        album_category='Work-Friends',
        album_title='Pranks at work',
        album_icon_id=4,
        group_id=2)
    album_7 = Album(
        album_category='Birthdays',
        album_title='Lily\'s Birthday',
        album_icon_id=1,
        group_id=3)
    album_8 = Album(
        album_category='Camping',
        album_title='Bear Lake 2021',
        album_icon_id=5,
        group_id=3)
    album_9 = Album(
        album_category='Night Out',
        album_title='Celebrating Lily\'s Promotion',
        album_icon_id=6,
        group_id=3)

    db.session.add(album_1)
    db.session.add(album_2)
    db.session.add(album_3)
    db.session.add(album_4)
    db.session.add(album_5)
    db.session.add(album_6)
    db.session.add(album_7)
    db.session.add(album_8)
    db.session.add(album_9)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_albums():
    db.session.execute('TRUNCATE albums RESTART IDENTITY CASCADE;')
    db.session.commit()
