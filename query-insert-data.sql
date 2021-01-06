
--insert data

--roles table
insert into roles values (DEFAULT,'Administrator',current_timestamp,current_timestamp);
insert into roles values (DEFAULT,'Instructor',current_timestamp,current_timestamp);
insert into roles values (DEFAULT,'Student',current_timestamp,current_timestamp);

-- select * from roles;

-- user table
insert into users (id,user_name,user_password,email,created_at,updated_at,last_login,role_id)
            values (DEFAULT,'phucmanh1999','12345678','phucmanh1999@gmail.com',current_timestamp,current_timestamp,current_timestamp,3);

--select * from users;

-- select * from instructor

-- instructor
insert into instructor(id, user_id, job_title)
			values (DEFAULT, 1, 'Professor');

-- select * from categories

-- categories
insert into categories (id,category_name,created_at,updated_at)
			values (DEFAULT,'Mobile',current_timestamp,current_timestamp);
insert into categories (id,category_name,created_at,updated_at)
			values (DEFAULT,'Web',current_timestamp,current_timestamp);

-- courses
insert into courses (id, course_name, img_path, short_description, price, concurrency , rating, view_number, created_at, updated_at, category_id, instructor_id)
			values (DEFAULT, 'Artificial Intelligence A-Z™: Learn How To Build An AI', '/assets/images/Course3.jpg', 'This is the lectures of courses and have many word', '9.99', 'USD', 4.5, 1000, current_timestamp, current_timestamp, 2, 2);
insert into courses (id, course_name, img_path, short_description, price, concurrency , rating, view_number, created_at, updated_at, category_id, instructor_id)
			values (DEFAULT, 'React-native for beginer', '/assets/images/Course4.jpg', 'This is the lectures of courses and have many word', '9.99', 'USD', 4.5, 1234, current_timestamp, current_timestamp, 2, 2);
insert into courses (id, course_name, img_path, short_description, price, concurrency , rating, view_number, created_at, updated_at, category_id, instructor_id)
			values (DEFAULT, 'Flutter for beginer', '/assets/images/Course4.jpg', 'This is the lectures of courses and have many word', '9.99', 'USD', 4.5, 1234, current_timestamp, current_timestamp, 2, 2);
insert into courses (id, course_name, img_path, short_description, price, concurrency , rating, view_number, created_at, updated_at, category_id, instructor_id)
			values (DEFAULT, 'Java for beginer', '/assets/images/Course6.jpg', 'This is the lectures of courses and have many word', '9.99', 'USD', 1.2, 3231, current_timestamp, current_timestamp, 2, 2);
insert into courses (id, course_name, img_path, short_description, price, concurrency , rating, view_number, created_at, updated_at, category_id, instructor_id)
			values (DEFAULT, 'Kotlin for beginer', '/assets/images/Course7.jpg', 'This is the lectures of courses and have many word', '9.99', 'USD', 4.9, 323, current_timestamp, current_timestamp, 2, 2);

insert into courses (id, course_name, img_path, short_description, price, concurrency , rating, view_number, created_at, updated_at, category_id, instructor_id)
			values (DEFAULT, 'Web 1', '/assets/images/Course3.jpg', 'This is the lectures of courses and have many word', '9.99', 'USD', 4.9, 1000, current_timestamp, current_timestamp, 3, 2);
insert into courses (id, course_name, img_path, short_description, price, concurrency , rating, view_number, created_at, updated_at, category_id, instructor_id)
			values (DEFAULT, 'Web 2', '/assets/images/Course4.jpg', 'This is the lectures of courses and have many word', '9.99','USD', 4.5,  1234, current_timestamp, current_timestamp, 3, 2);
insert into courses (id, course_name, img_path, short_description, price, concurrency , rating, view_number, created_at, updated_at, category_id, instructor_id)
			values (DEFAULT, 'Web 3', '/assets/images/Course4.jpg', 'This is the lectures of courses and have many word', '9.99',  'USD', 4.5,1234, current_timestamp, current_timestamp, 3, 2);
insert into courses (id, course_name, img_path, short_description, price, concurrency , rating, view_number, created_at, updated_at, category_id, instructor_id)
			values (DEFAULT, 'Web 4', '/assets/images/Course6.jpg', 'This is the lectures of courses and have many word', '9.99', 'USD', 1.2, 3231, current_timestamp, current_timestamp, 3, 2);
insert into courses (id, course_name, img_path, short_description, price, concurrency , rating, view_number, created_at, updated_at, category_id, instructor_id)
			values (DEFAULT, 'Web 5', '/assets/images/Course7.jpg', 'This is the lectures of courses and have many word', '9.99', 'USD', 4.9, 323, current_timestamp, current_timestamp, 3, 2);
