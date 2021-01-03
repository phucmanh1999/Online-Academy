-- CREATE TABLE table_name(
--     Id SERIAL
-- );
-- is equivalent to the following statements:

-- CREATE SEQUENCE table_name_Id_seq;

-- CREATE TABLE table_name (
--     Id INTEGEReger NOT NULL DEFAULT nextval('table_name_Id_seq')
-- );

-- ALTER SEQUENCE table_name_Id_seq
-- OWNED BY table_name.Id;

CREATE TABLE roles ( -- admin, học viên, giảng viên
	id serial PRIMARY KEY,
	roleName VARCHAR ( 50 ) UNIQUE NOT NULL,
	createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP
);

-- Unlike VARCHAR, The CHARACTER or  CHAR without the length specifier (n) is the same as the CHARACTER(1) or CHAR(1).

-- Different from other database systems, in PostgreSQL, there is no performance difference among three character types.

-- In most cases, you should use TEXTor VARCHAR. And you use the VARCHAR(n) when you want PostgreSQL to check for the length.


CREATE TABLE users (
	id serial PRIMARY KEY,
	userName VARCHAR (255) UNIQUE NOT NULL,
	userPassword VARCHAR (255) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
    firstName VARCHAR (255),
    lastName VARCHAR (255),
    gender VARCHAR(1), --M: male, F: female
    birthday DATE,
    avatarUrl VARCHAR(255),
    userAddress VARCHAR(255),
	createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP,
    lastLogin TIMESTAMP,
    roleId INTEGER NOT NULL REFERENCES roles(id)

);
-- 3 bảng update các cột sau :v
CREATE TABLE student ( -- mua khóa học, đánh giá khóa học, danh sách khóa học yêu thích
	id serial PRIMARY KEY,
    userId INTEGER NOT NULL REFERENCES users(id),
    buyNumber INTEGER -- Số khóa học đã mua

);
CREATE TABLE instructor (-- giảng viên: đăng khóa học
	id serial PRIMARY KEY,
    userId INTEGER NOT NULL REFERENCES users(id),
    jobTitle VARCHAR(255), --ex: Professional Web Developer and Instructor
    shortDescription TEXT,
    fullDescription TEXT,
    --videoPresentUrl VARCHAR(255),???
    rating NUMERIC,
    ratingNumber INTEGER, -- so luong hoc vien danh gia
    enrollNumber INTEGER, --so luong hoc vien dk hoc
    courseNumber INTEGER -- so khoa hoc

);
CREATE TABLE administrator (
	id serial PRIMARY KEY,
    userId INTEGER NOT NULL REFERENCES users(id)
);

CREATE TABLE categories (
	id serial PRIMARY KEY,
	categoryName VARCHAR (255) UNIQUE NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP
);

CREATE TABLE courses (
	id serial PRIMARY KEY,
	courseName VARCHAR (255) UNIQUE NOT NULL,
    imgPath VARCHAR(255),
    shortDescription TEXT,
    fullDescription TEXT,
    --videoPresentUrl VARCHAR(255),???
    rating NUMERIC,
    ratingNumber INTEGER, -- so luong hoc vien danh gia
    enrollNumber INTEGER, --so luong hoc vien dk hoc
    chapterNumber INTEGER, -- so chuong
    viewNumber INTEGER, -- luot xem
    price NUMERIC,
    concurrency VARCHAR(50),
    discount SMALLINT,
    courseLanguage VARCHAR(50),
    courseState VARCHAR(1), --F: Finished, U: Unfinished
	createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP,
    categoryId INTEGER NOT NULL REFERENCES categories(id),
    instructorId INTEGER NOT NULL REFERENCES instructor(id)
);

CREATE TABLE chapters( -- một khóa học có nhiều chương 1 2 3 ...
    id serial PRIMARY KEY,
    courseId INTEGER NOT NULL REFERENCES courses(id),
    lessonNumber INTEGER,
    shortDescription TEXT,
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP
);

CREATE TABLE lessons ( -- mỗi chương có nhiều bài 1 2 3 ...
	id serial PRIMARY KEY,
    chapterId INTEGER NOT NULL REFERENCES chapters(id),
	lessonName VARCHAR (255) UNIQUE NOT NULL,
    videoUrl VARCHAR(255),
    shortDescription TEXT,
    fullDescription TEXT,
    viewNumber INTEGER, -- luot xem
    hour INTEGER,
    currentWatch TIMESTAMP, -- xem tới khúc nào của video
	createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP
);

CREATE TABLE watchList( -- học viên: danh sach yêu thích: nhiều nhiều student-courses
    id serial PRIMARY KEY,
    studentID INTEGER NOT NULL REFERENCES student(id),
    courseId INTEGER NOT NULL REFERENCES courses(id),
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP
);

CREATE TABLE review( -- học viên đánh giá khóa học: nhiều - nhiều
    id serial PRIMARY KEY,
    comment TEXT,
    star INTEGER, -- từ 0-5 sao
    studentID INTEGER NOT NULL REFERENCES student(id),
    courseId INTEGER NOT NULL REFERENCES courses(id),
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP
);

CREATE TABLE cart(-- giỏ hàng: học viên mua khóa học: nhiều - nhiều
    id serial PRIMARY KEY,
    studentID INTEGER NOT NULL REFERENCES student(id),
    courseId INTEGER NOT NULL REFERENCES courses(id),
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP
);

CREATE TABLE courseBought(-- khóa học đã đc mua:  nhiều - nhiều
    id serial PRIMARY KEY,
    studentID INTEGER NOT NULL REFERENCES student(id),
    courseId INTEGER NOT NULL REFERENCES courses(id),
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP
);

--insert data

--roles table
insert into roles values (DEFAULT,'Administrator',current_timestamp,current_timestamp);
insert into roles values (DEFAULT,'Instructor',current_timestamp,current_timestamp);
insert into roles values (DEFAULT,'Student',current_timestamp,current_timestamp);

--select * from roles;

-- user table

insert into users (id,userName,userPassword,email,createdAt,updatedAt,lastLogin,roleId)
            values (DEFAULT,'phucmanh1999','12345678','phucmanh1999@gmail.com',current_timestamp,current_timestamp,current_timestamp,3)
