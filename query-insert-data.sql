
--insert data

--roles table
insert into roles values (1,'Administrator',current_timestamp,current_timestamp);
insert into roles values (2,'Instructor',current_timestamp,current_timestamp);
insert into roles values (3,'Student',current_timestamp,current_timestamp);

-- select * from roles;

-- user table
insert into users (id,user_name,user_password,email,created_at,updated_at,last_login,role_id)
            values (1,'phucmanh1999','12345678','phucmanh1999@gmail.com',current_timestamp,current_timestamp,current_timestamp,3);

--select * from users;

-- select * from instructor

-- instructor
insert into instructor(id, user_id, job_title)
			values (1, 1, 'Professor');

-- select * from categories

-- categories
insert into categories (id,category_name,created_at,updated_at)
			values (1,'Mobile',current_timestamp,current_timestamp);
insert into categories (id,category_name,created_at,updated_at)
			values (2,'Web',current_timestamp,current_timestamp);

-- courses
select * from courses

insert into courses (id, course_name,                                           img_path,                      short_description,                                    price, concurrency , rating, view_number, created_at, updated_at, category_id, instructor_id)
			values (1, 'Artificial Intelligence A-Z™: Learn How To Build An AI', '/assets/images/Course3.jpg', 'This is the lectures of courses and have many word', '9.99', 'USD', 4.5, 1000, current_timestamp, current_timestamp, 1, 1);
insert into courses (id, course_name, img_path, short_description, price, concurrency , rating, view_number, created_at, updated_at, category_id, instructor_id)
			values (2, 'React-native for beginer', '/assets/images/Course4.jpg', 'This is the lectures of courses and have many word', '9.99', 'USD', 4.5, 1234, current_timestamp, current_timestamp, 1, 1);
insert into courses (id, course_name, img_path, short_description, price, concurrency , rating, view_number, created_at, updated_at, category_id, instructor_id)
			values (3, 'Flutter for beginer', '/assets/images/Course4.jpg', 'This is the lectures of courses and have many word', '9.99', 'USD', 4.5, 1234, current_timestamp, current_timestamp, 1, 1);
insert into courses (id, course_name, img_path, short_description, price, concurrency , rating, view_number, created_at, updated_at, category_id, instructor_id)
			values (4, 'Java for beginer', '/assets/images/Course6.jpg', 'This is the lectures of courses and have many word', '9.99', 'USD', 1.2, 3231, current_timestamp, current_timestamp, 1, 1);
insert into courses (id, course_name, img_path, short_description, price, concurrency , rating, view_number, created_at, updated_at, category_id, instructor_id)
			values (5, 'Kotlin for beginer', '/assets/images/Course7.jpg', 'This is the lectures of courses and have many word', '9.99', 'USD', 4.9, 323, current_timestamp, current_timestamp, 1, 1);

insert into courses (id, course_name, img_path, short_description, price, concurrency , rating, view_number, created_at, updated_at, category_id, instructor_id)
			values (6, 'Web 1', '/assets/images/Course3.jpg', 'This is the lectures of courses and have many word', '9.99', 'USD', 4.9, 1000, current_timestamp, current_timestamp, 2, 1);
insert into courses (id, course_name, img_path, short_description, price, concurrency , rating, view_number, created_at, updated_at, category_id, instructor_id)
			values (7, 'Web 2', '/assets/images/Course4.jpg', 'This is the lectures of courses and have many word', '9.99','USD', 4.5,  1234, current_timestamp, current_timestamp, 2, 1);
insert into courses (id, course_name, img_path, short_description, price, concurrency , rating, view_number, created_at, updated_at, category_id, instructor_id)
			values (8, 'Web 3', '/assets/images/Course4.jpg', 'This is the lectures of courses and have many word', '9.99',  'USD', 4.5,1234, current_timestamp, current_timestamp, 2, 1);
insert into courses (id, course_name, img_path, short_description, price, concurrency , rating, view_number, created_at, updated_at, category_id, instructor_id)
			values (9, 'Web 4', '/assets/images/Course6.jpg', 'This is the lectures of courses and have many word', '9.99', 'USD', 1.2, 3231, current_timestamp, current_timestamp, 2, 1);
insert into courses (id, course_name, img_path, short_description, price, concurrency , rating, view_number, created_at, updated_at, category_id, instructor_id)
			values (10, 'Web 5', '/assets/images/Course7.jpg', 'This is the lectures of courses and have many word', '9.99', 'USD', 4.9, 323, current_timestamp, current_timestamp, 2, 1);
