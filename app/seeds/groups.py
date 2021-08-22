from app.models import db, Album


# Adds a demo user, you can add other users here if you want
def seed_groups():
    group_1 = Group(
        group_category='Family',
        group_title='Vacations',
        group_icon_id=1,
        user_id=1)
    group_2 = Group(
        group_category='Work',
        group_title='Parties',
        group_icon_id=2,
        user_id=1)
    group_3 = Group(
        group_category='Friends',
        group_title='Camping',
        group_icon_id=3,
        user_id=1)
    group_4 = Group(
        group_category='Family',
        group_title='Vacations',
        group_icon_id=1,
        user_id=2)
    group_5 = Group(
        group_category='Work',
        group_title='Parties',
        group_icon_id=2,
        user_id=2)
    group_6 = Group(
        group_category='Friends',
        group_title='Camping',
        group_icon_id=3,
        user_id=2)

    db.session.add(group_1)
    db.session.add(group_2)
    db.session.add(group_3)
    db.session.add(group_4)
    db.session.add(group_5)
    db.session.add(group_6)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE groups RESTART IDENTITY CASCADE;')
    db.session.commit()
