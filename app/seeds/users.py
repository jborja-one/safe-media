from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        email='demo@aa.io',
        first_name='Demo',
        last_name='Litious',
        password='password')
    admin = User(
        email='admin@aa.io',
        first_name='Admin',
        last_name='Media',
        password='password')
    jonathan = User(
        email='jonathan@aa.io',
        first_name='Jonathan',
        last_name='Borja',
        password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
