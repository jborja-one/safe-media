from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        email='demo@aa.io',
        profile_img='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/Profile+Pictures/195136_1684899921290_3431314_o.jpeg',
        first_name='Demo',
        last_name='Litious',
        password='password')
    admin = User(
        email='admin@aa.io',
        profile_img='',
        first_name='Admin',
        last_name='Media',
        password='password')
    jonathan = User(
        email='jonathan@aa.io',
        profile_img='',
        first_name='Jonathan',
        last_name='Borja',
        password='password')

    db.session.add(demo)
    db.session.add(admin)
    db.session.add(jonathan)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
