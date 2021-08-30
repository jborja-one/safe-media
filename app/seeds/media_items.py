from app.models import db, MediaItem


def seed_media_items():
    item_1 = MediaItem(
        item_name='Birthday-test1',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/birthday1.jpeg',
        album_id=1,
        user_id='1'
    )
    item_2 = MediaItem(
        item_name='Birthday-test2',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/birthday2.jpeg',
        album_id=1,
        user_id='1'
    )
    item_3 = MediaItem(
        item_name='Birthday-test3',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/birthday3.jpeg',
        album_id=1,
        user_id='1'
    )
    item_4 = MediaItem(
        item_name='Holiday-test1',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/holidays1.jpeg',
        album_id=2,
        user_id='1'
    )
    item_5 = MediaItem(
        item_name='Holiday-test2',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/holidays2.jpeg',
        album_id=2,
        user_id='1'
    )
    item_6 = MediaItem(
        item_name='Holiday-test3',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/holidays3.jpeg',
        album_id=2,
        user_id='1'
    )
    item_7 = MediaItem(
        item_name='Events-test1',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/events1.jpeg',
        album_id=3,
        user_id='1'
    )
    item_8 = MediaItem(
        item_name='Events-test2',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/events2.jpeg',
        album_id=3,
        user_id='1'
    )
    item_9 = MediaItem(
        item_name='Events-test3',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/events3.jpeg',
        album_id=3,
        user_id='1'
    )
    item_10 = MediaItem(
        item_name='Work-birthday-test1',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/work-birthday1.jpeg',
        album_id=4,
        user_id='1'
    )
    item_11 = MediaItem(
        item_name='Work-birthday-test2',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/work-birthday2.jpeg',
        album_id=4,
        user_id='1'
    )
    item_12 = MediaItem(
        item_name='Work-birthday-test3',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/work-birthday3.jpeg',
        album_id=4,
        user_id='1'
    )
    item_13 = MediaItem(
        item_name='Work-fun-test1',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/work-fun1.jpeg',
        album_id=5,
        user_id='1'
    )
    item_14 = MediaItem(
        item_name='Work-fun-test2',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/work-fun2.jpeg',
        album_id=5,
        user_id='1'
    )
    item_15 = MediaItem(
        item_name='Work-fun-test3',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/work-fun3.jpeg',
        album_id=5,
        user_id='1'
    )
    item_16 = MediaItem(
        item_name='Work-friends-test1',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/work-friends1.jpeg',
        album_id=6,
        user_id='1'
    )
    item_17 = MediaItem(
        item_name='Work-friends-test2',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/work-friends2.jpeg',
        album_id=6,
        user_id='1'
    )
    item_18 = MediaItem(
        item_name='Work-friends-test3',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/work-friends3.jpeg',
        album_id=6,
        user_id='1'
    )
    item_19 = MediaItem(
        item_name='Family-birthday-test1',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/family-birthday1.jpeg',
        album_id=7,
        user_id='1'
    )
    item_20 = MediaItem(
        item_name='Family-birthday-test2',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/family-birthday2.jpeg',
        album_id=7,
        user_id='1'
    )
    item_21 = MediaItem(
        item_name='Family-birthday-test3',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/family-birthday3.jpeg',
        album_id=7,
        user_id='1'
    )
    item_22 = MediaItem(
        item_name='camping-test1',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/family-camping1.jpeg',
        album_id=8,
        user_id='1'
    )
    item_23 = MediaItem(
        item_name='camping-test2',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/family-camping2.jpeg',
        album_id=8,
        user_id='1'
    )
    item_24 = MediaItem(
        item_name='camping-test3',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/family-camping3.jpeg',
        album_id=8,
        user_id='1'
    )
    item_25 = MediaItem(
        item_name='night-out-test1',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/night-out1.jpeg',
        album_id=9,
        user_id='1'
    )
    item_26 = MediaItem(
        item_name='night-out-test2',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/night-out2.jpeg',
        album_id=9,
        user_id='1'
    )
    item_27 = MediaItem(
        item_name='night-out-test3',
        item_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/media_items/media-seed/night-out3.jpeg',
        album_id=9,
        user_id='1'
    )

    db.session.add(item_1)
    db.session.add(item_2)
    db.session.add(item_3)
    db.session.add(item_4)
    db.session.add(item_5)
    db.session.add(item_6)
    db.session.add(item_7)
    db.session.add(item_8)
    db.session.add(item_9)
    db.session.add(item_10)
    db.session.add(item_11)
    db.session.add(item_12)
    db.session.add(item_13)
    db.session.add(item_14)
    db.session.add(item_15)
    db.session.add(item_16)
    db.session.add(item_17)
    db.session.add(item_18)
    db.session.add(item_19)
    db.session.add(item_20)
    db.session.add(item_21)
    db.session.add(item_22)
    db.session.add(item_23)
    db.session.add(item_24)
    db.session.add(item_25)
    db.session.add(item_26)
    db.session.add(item_27)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_media_items():
    db.session.execute('TRUNCATE media_items RESTART IDENTITY CASCADE;')
    db.session.commit()
