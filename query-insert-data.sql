
--insert data

--roles table
insert into roles values (DEFAULT,'Administrator',current_timestamp,current_timestamp);
insert into roles values (DEFAULT,'Instructor',current_timestamp,current_timestamp);
insert into roles values (DEFAULT,'Student',current_timestamp,current_timestamp);

-- select * from roles;

-- user table
insert into users (id,userName,userPassword,email,createdAt,updatedAt,lastLogin,roleId)
            values (DEFAULT,'phucmanh1999','12345678','phucmanh1999@gmail.com',current_timestamp,current_timestamp,current_timestamp,12);

--select * from users;

-- select * from instructor

-- instructor
insert into instructor(id, userId, jobTitle)
			values (DEFAULT, 9, 'Professor');

-- select * from categories

-- categories
insert into categories (id,categoryName,createdAt,updatedAt)
			values (DEFAULT,'Mobile',current_timestamp,current_timestamp);
insert into categories (id,categoryName,createdAt,updatedAt)
			values (DEFAULT,'Web',current_timestamp,current_timestamp);

-- courses
insert into courses (id, courseName, imgPath, shortDescription, price, concurrency , viewNumber, createdAt, updatedAt, categoryId, instructorId)
			values (DEFAULT, 'Artificial Intelligence A-Z™: Learn How To Build An AI', '/assets/images/Course3.jpg', 'This is the lectures of courses and have many word', '9.99', 'USD', 1000, current_timestamp, current_timestamp, 5, 4);
insert into courses (id, courseName, imgPath, shortDescription, price, rating, concurrency , viewNumber, createdAt, updatedAt, categoryId, instructorId)
			values (DEFAULT, 'React-native for beginer', '/assets/images/Course4.jpg', 'This is the lectures of courses and have many word', '9.99', 4.5, 'USD', 1234, current_timestamp, current_timestamp, 5, 4);
insert into courses (id, courseName, imgPath, shortDescription, price, rating, concurrency , viewNumber, createdAt, updatedAt, categoryId, instructorId)
			values (DEFAULT, 'Flutter for beginer', '/assets/images/Course4.jpg', 'This is the lectures of courses and have many word', '9.99', 4.5, 'USD', 1234, current_timestamp, current_timestamp, 5, 4);
insert into courses (id, courseName, imgPath, shortDescription, price, rating, concurrency , viewNumber, createdAt, updatedAt, categoryId, instructorId)
			values (DEFAULT, 'Java for beginer', '/assets/images/Course6.jpg', 'This is the lectures of courses and have many word', '9.99', 1.2, 'USD', 3231, current_timestamp, current_timestamp, 5, 4);
insert into courses (id, courseName, imgPath, shortDescription, price, rating, concurrency , viewNumber, createdAt, updatedAt, categoryId, instructorId)
			values (DEFAULT, 'Kotlin for beginer', '/assets/images/Course7.jpg', 'This is the lectures of courses and have many word', '9.99', 4.9, 'USD', 323, current_timestamp, current_timestamp, 5, 4);

insert into courses (id, courseName, imgPath, shortDescription, price, concurrency , viewNumber, createdAt, updatedAt, categoryId, instructorId)
			values (DEFAULT, 'Web 1', '/assets/images/Course3.jpg', 'This is the lectures of courses and have many word', '9.99', 'USD', 1000, current_timestamp, current_timestamp, 6, 4);
insert into courses (id, courseName, imgPath, shortDescription, price, rating, concurrency , viewNumber, createdAt, updatedAt, categoryId, instructorId)
			values (DEFAULT, 'Web 2', '/assets/images/Course4.jpg', 'This is the lectures of courses and have many word', '9.99', 4.5, 'USD', 1234, current_timestamp, current_timestamp, 6, 4);
insert into courses (id, courseName, imgPath, shortDescription, price, rating, concurrency , viewNumber, createdAt, updatedAt, categoryId, instructorId)
			values (DEFAULT, 'Web 3', '/assets/images/Course4.jpg', 'This is the lectures of courses and have many word', '9.99', 4.5, 'USD', 1234, current_timestamp, current_timestamp, 6, 4);
insert into courses (id, courseName, imgPath, shortDescription, price, rating, concurrency , viewNumber, createdAt, updatedAt, categoryId, instructorId)
			values (DEFAULT, 'Web 4', '/assets/images/Course6.jpg', 'This is the lectures of courses and have many word', '9.99', 1.2, 'USD', 3231, current_timestamp, current_timestamp, 6, 4);
insert into courses (id, courseName, imgPath, shortDescription, price, rating, concurrency , viewNumber, createdAt, updatedAt, categoryId, instructorId)
			values (DEFAULT, 'Web 5', '/assets/images/Course7.jpg', 'This is the lectures of courses and have many word', '9.99', 4.9, 'USD', 323, current_timestamp, current_timestamp, 6, 4);
