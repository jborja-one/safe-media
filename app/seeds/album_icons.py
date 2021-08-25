from app.models import db, AlbumIcon


# Adds a demo user, you can add other users here if you want
def seed_album_icons():
    birthdays = AlbumIcon(
        id=1,
        name='Birthdays',
        img_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/Icons/album_icons/birthday.png')
    holidays = AlbumIcon(
        id=2,
        name='Holidays',
        img_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/Icons/album_icons/holiday.png')
    events = AlbumIcon(
        id=3,
        name='Events',
        img_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/Icons/album_icons/events.png')
    work_fun = AlbumIcon(
        id=4,
        name='Work-Fun',
        img_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/Icons/album_icons/work-fun.png')
    camping = AlbumIcon(
        id=5,
        name='Camping',
        img_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/Icons/album_icons/camping.png')
    night_out = AlbumIcon(
        id=6,
        name='Night-Out',
        img_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/Icons/album_icons/night-out.png')

    db.session.add(birthdays)
    db.session.add(holidays)
    db.session.add(events)
    db.session.add(work_fun)
    db.session.add(camping)
    db.session.add(night_out)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_album_icons():
    db.session.execute('TRUNCATE album_icons RESTART IDENTITY CASCADE;')
    db.session.commit()
