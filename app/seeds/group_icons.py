from app.models import db, GroupIcon


# Adds a demo user, you can add other users here if you want
def seed_group_icons():
    family = GroupIcon(
        id=1,
        name='Family',
        img_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/Icons/group_icons/family.png')
    work = GroupIcon(
        id=2,
        name='Work',
        img_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/Icons/group_icons/work.png'),
    friends = GroupIcon(
        id=3,
        name='Friends',
        img_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/Icons/group_icons/friends.png'),

    db.session.add(family)
    db.session.add(work)
    db.session.add(friends)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_group_icons():
    db.session.execute('TRUNCATE group_icons RESTART IDENTITY CASCADE;')
    db.session.commit()
