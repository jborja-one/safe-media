from app.models import db, GroupIcon


# Adds a demo user, you can add other users here if you want
def seed_group_icons():
    family = GroupIcon(
        id=1,
        name='Family',
        img_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/Icons/group_icons/family.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJIMEYCIQDL08Ui%2Bw%2B5iqAUf%2F965XnUHsqL0vvxWBjto%2BQsH%2F3tsQIhAMZwjMqLW%2BKzjTedgLEPwzOe%2By0B2%2BKwHbyNJqYIeoTuKtACCDEQABoMNjQzNzY1OTYxODY4IgxOHsZoiLvvD%2BiBayoqrQIYKYKDmySko1hksrd9%2Fjw8BGIQmR7j%2FdclszqwQjpmc0nWHH%2BNfyfylARHKI%2FZ5h7Pl2QwxYJg5mb6uYFnkYEy%2FJIGskKwteIs5Lbn1s3bEEAcOSSVo1rR7lwZozA3MXj%2Fx324hI9mvn5aiIqGg%2BYRJAH1xuuTTDpGK6stzf8qx2oRn3bQkdEYM0xmmqaxDlySfA6sFXBQGbQUF8hG3RIgqK%2B4R30K3UEGo2EOABgXqbZRkg85cRMLQ1um5%2FSGHnV0Gnp0w06yKu0Xa0gBhVe%2BdGpxSMMNGlc0ckJEtCe4hun6Yb09KaW8k6xrkCrVVANAPG3xp36DToQM9a396uFhk0K07VlyBRRXJAYGf544S4r2TaTF5%2FOvxGJ4zbuUXYrRsFf7jMSe65pCkUgBMOaqlIkGOrQCTveuWA0Lckx%2FNcH5o4Ozgv1XRF8R85BhJrmUW%2Bb68AIwrQoPZgbAmoVeroE2r5ORcUt0KcYsCd2tC%2F8heSupM46NW3omlBQo8FyyF8CynomJ7YxzUJiTafPNm9axbzuZi2SL%2BH02j%2BylVzQY8XIF%2FMazg6GDa5UO3AsZ6%2Bt22PUU3XogNer47r2ACTvD%2BLMOKwhJrSlDzOEtMI6vL29v6uWZL2ICxMWzGWnhWG9ehtuXemC56Ek%2Ba8TdUm2AtpLxFBnYp7iS4gEMi7va3L%2BCogW9CeICBSmlb2oE8NGru5jPkPWgNyXfL%2Fm50bsAcbY9oX60RVmL61ZaL6yUjS0iDd5dbbfozoF%2FRHJN5p56xwA88FBFm%2FQvZQMxRNXXFAS%2B7Gxf0ohsdXnVz9E0L9uM94aAYMg%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210824T170835Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAZLY3RASGO3HX4UU5%2F20210824%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=9ba3fe2ac0e9380a2032f057e64013e05bb76ce7bfc2d05118842987a1e75ce2')
    work = GroupIcon(
        id=2,
        name='Work',
        img_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/Icons/group_icons/friends.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJIMEYCIQDL08Ui%2Bw%2B5iqAUf%2F965XnUHsqL0vvxWBjto%2BQsH%2F3tsQIhAMZwjMqLW%2BKzjTedgLEPwzOe%2By0B2%2BKwHbyNJqYIeoTuKtACCDEQABoMNjQzNzY1OTYxODY4IgxOHsZoiLvvD%2BiBayoqrQIYKYKDmySko1hksrd9%2Fjw8BGIQmR7j%2FdclszqwQjpmc0nWHH%2BNfyfylARHKI%2FZ5h7Pl2QwxYJg5mb6uYFnkYEy%2FJIGskKwteIs5Lbn1s3bEEAcOSSVo1rR7lwZozA3MXj%2Fx324hI9mvn5aiIqGg%2BYRJAH1xuuTTDpGK6stzf8qx2oRn3bQkdEYM0xmmqaxDlySfA6sFXBQGbQUF8hG3RIgqK%2B4R30K3UEGo2EOABgXqbZRkg85cRMLQ1um5%2FSGHnV0Gnp0w06yKu0Xa0gBhVe%2BdGpxSMMNGlc0ckJEtCe4hun6Yb09KaW8k6xrkCrVVANAPG3xp36DToQM9a396uFhk0K07VlyBRRXJAYGf544S4r2TaTF5%2FOvxGJ4zbuUXYrRsFf7jMSe65pCkUgBMOaqlIkGOrQCTveuWA0Lckx%2FNcH5o4Ozgv1XRF8R85BhJrmUW%2Bb68AIwrQoPZgbAmoVeroE2r5ORcUt0KcYsCd2tC%2F8heSupM46NW3omlBQo8FyyF8CynomJ7YxzUJiTafPNm9axbzuZi2SL%2BH02j%2BylVzQY8XIF%2FMazg6GDa5UO3AsZ6%2Bt22PUU3XogNer47r2ACTvD%2BLMOKwhJrSlDzOEtMI6vL29v6uWZL2ICxMWzGWnhWG9ehtuXemC56Ek%2Ba8TdUm2AtpLxFBnYp7iS4gEMi7va3L%2BCogW9CeICBSmlb2oE8NGru5jPkPWgNyXfL%2Fm50bsAcbY9oX60RVmL61ZaL6yUjS0iDd5dbbfozoF%2FRHJN5p56xwA88FBFm%2FQvZQMxRNXXFAS%2B7Gxf0ohsdXnVz9E0L9uM94aAYMg%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210824T170918Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAZLY3RASGO3HX4UU5%2F20210824%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=cc53eb2a5ef5fd4c94f3c71e62e8ff103b441faf9822814c2049cbd0bb9763f3'),
    friends = GroupIcon(
        id=3,
        name='Friends',
        img_url='https://safemedia-capstone.s3.us-east-2.amazonaws.com/Icons/group_icons/work.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJIMEYCIQDL08Ui%2Bw%2B5iqAUf%2F965XnUHsqL0vvxWBjto%2BQsH%2F3tsQIhAMZwjMqLW%2BKzjTedgLEPwzOe%2By0B2%2BKwHbyNJqYIeoTuKtACCDEQABoMNjQzNzY1OTYxODY4IgxOHsZoiLvvD%2BiBayoqrQIYKYKDmySko1hksrd9%2Fjw8BGIQmR7j%2FdclszqwQjpmc0nWHH%2BNfyfylARHKI%2FZ5h7Pl2QwxYJg5mb6uYFnkYEy%2FJIGskKwteIs5Lbn1s3bEEAcOSSVo1rR7lwZozA3MXj%2Fx324hI9mvn5aiIqGg%2BYRJAH1xuuTTDpGK6stzf8qx2oRn3bQkdEYM0xmmqaxDlySfA6sFXBQGbQUF8hG3RIgqK%2B4R30K3UEGo2EOABgXqbZRkg85cRMLQ1um5%2FSGHnV0Gnp0w06yKu0Xa0gBhVe%2BdGpxSMMNGlc0ckJEtCe4hun6Yb09KaW8k6xrkCrVVANAPG3xp36DToQM9a396uFhk0K07VlyBRRXJAYGf544S4r2TaTF5%2FOvxGJ4zbuUXYrRsFf7jMSe65pCkUgBMOaqlIkGOrQCTveuWA0Lckx%2FNcH5o4Ozgv1XRF8R85BhJrmUW%2Bb68AIwrQoPZgbAmoVeroE2r5ORcUt0KcYsCd2tC%2F8heSupM46NW3omlBQo8FyyF8CynomJ7YxzUJiTafPNm9axbzuZi2SL%2BH02j%2BylVzQY8XIF%2FMazg6GDa5UO3AsZ6%2Bt22PUU3XogNer47r2ACTvD%2BLMOKwhJrSlDzOEtMI6vL29v6uWZL2ICxMWzGWnhWG9ehtuXemC56Ek%2Ba8TdUm2AtpLxFBnYp7iS4gEMi7va3L%2BCogW9CeICBSmlb2oE8NGru5jPkPWgNyXfL%2Fm50bsAcbY9oX60RVmL61ZaL6yUjS0iDd5dbbfozoF%2FRHJN5p56xwA88FBFm%2FQvZQMxRNXXFAS%2B7Gxf0ohsdXnVz9E0L9uM94aAYMg%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210824T170850Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAZLY3RASGO3HX4UU5%2F20210824%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=9f72338aad8c1c7e1f0acc41ee44dfde76cf62f8187add333e0a5db1eb33b24f'),

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
