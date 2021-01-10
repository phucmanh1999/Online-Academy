
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

--chapter

insert into chapters values (1,1,2,'Why AI?',current_time, current_time)
insert into chapters values (2,1,2,'Fundamentals of Reinforcement Learning',current_time, current_time)

--lesson

insert into lessons values (1,1,'Course Structure',null,'What is AI?','{\"ops\":[{\"attributes\":{\"size\":\"large\"},\"insert\":\"Artificial intelligence, is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals, which involves consciousness and emotionality. The distinction between the former and the latter categories is often revealed by the acronym chosen.\"},{\"attributes\":{\"blockquote\":true},\"insert\":\"\\n\"}]}',null,null,null,LOCALTIMESTAMP,LOCALTIMESTAMP)
insert into lessons values (2,1,'Course Required',null,'Course Required','{\"ops\":[{\"attributes\":{\"size\":\"large\"},\"insert\":\"Math: \"},{\"attributes\":{\"size\":\"large\",\"color\":\"rgba(0, 0, 0, 0.87)\"},\"insert\":\"Discrete mathematics, \"},{\"attributes\":{\"size\":\"large\",\"color\":\"#202124\"},\"insert\":\"Probability theory\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"attributes\":{\"size\":\"large\"},\"insert\":\"Program language: python\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"insert\":\"\\n\"}]}',null,null,null,LOCALTIMESTAMP,LOCALTIMESTAMP)
insert into lessons values (3,1,'Human Required',null,'Course Required','{\"ops\":[{\"attributes\":{\"size\":\"huge\"},\"insert\":\"Handsome\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"attributes\":{\"size\":\"huge\"},\"insert\":\"Inteligent\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"\\n\"}]}',null,null,null,LOCALTIMESTAMP,LOCALTIMESTAMP)

insert into lessons values (4,2,'Course Structure2',null,'What is AI?','{\"ops\":[{\"attributes\":{\"size\":\"large\"},\"insert\":\"Artificial intelligence, is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals, which involves consciousness and emotionality. The distinction between the former and the latter categories is often revealed by the acronym chosen.\"},{\"attributes\":{\"blockquote\":true},\"insert\":\"\\n\"}]}',null,null,null,LOCALTIMESTAMP,LOCALTIMESTAMP)
insert into lessons values (5,2,'Course Required2',null,'Course Required','{\"ops\":[{\"attributes\":{\"size\":\"large\"},\"insert\":\"Math: \"},{\"attributes\":{\"size\":\"large\",\"color\":\"rgba(0, 0, 0, 0.87)\"},\"insert\":\"Discrete mathematics, \"},{\"attributes\":{\"size\":\"large\",\"color\":\"#202124\"},\"insert\":\"Probability theory\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"attributes\":{\"size\":\"large\"},\"insert\":\"Program language: python\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"insert\":\"\\n\"}]}',null,null,null,LOCALTIMESTAMP,LOCALTIMESTAMP)
insert into lessons values (6,2,'Human Required2',null,'Course Required','{\"ops\":[{\"attributes\":{\"size\":\"huge\"},\"insert\":\"Handsome\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"attributes\":{\"size\":\"huge\"},\"insert\":\"Inteligent\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"\\n\"}]}',null,null,null,LOCALTIMESTAMP,LOCALTIMESTAMP)

