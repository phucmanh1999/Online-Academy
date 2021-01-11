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
	role_name VARCHAR ( 50 ) UNIQUE NOT NULL,
	created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP
);

-- Unlike VARCHAR, The CHARACTER or  CHAR without the length specifier (n) is the same as the CHARACTER(1) or CHAR(1).

-- Different from other database systems, in PostgreSQL, there is no performance difference among three character types.

-- In most cases, you should use TEXTor VARCHAR. And you use the VARCHAR(n) when you want PostgreSQL to check for the length.


CREATE TABLE users (
	id serial PRIMARY KEY,
	user_name VARCHAR (255) UNIQUE NOT NULL,
	user_password VARCHAR (255) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
    first_name VARCHAR (255),
    last_name VARCHAR (255),
    gender VARCHAR(1), --M: male, F: female
    birthday DATE,
    avatar_url VARCHAR(255),
    user_address VARCHAR(255),
	created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP,
    last_login TIMESTAMP,
    role_id INTEGER NOT NULL REFERENCES roles(id)

);
-- 3 bảng update các cột sau :v
CREATE TABLE student ( -- mua khóa học, đánh giá khóa học, danh sách khóa học yêu thích
	id serial PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    buy_number INTEGER -- Số khóa học đã mua

);
CREATE TABLE instructor (-- giảng viên: đăng khóa học
	id serial PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    job_title VARCHAR(255), --ex: Professional Web Developer and Instructor
    short_description TEXT,
    full_description TEXT,
    --videoPresentUrl VARCHAR(255),???
    rating NUMERIC,
    rating_number INTEGER, -- so luong hoc vien danh gia
    enroll_number INTEGER, --so luong hoc vien dk hoc
    course_number INTEGER -- so khoa hoc

);
CREATE TABLE administrator (
	id serial PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id)
);

CREATE TABLE categories (
	id serial PRIMARY KEY,
	category_name VARCHAR (255) UNIQUE NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP
);

CREATE TABLE courses (
	id serial PRIMARY KEY,
	course_name VARCHAR (255) UNIQUE NOT NULL,
    img_path VARCHAR(255),
    short_description TEXT,
    full_description TEXT,
    --videoPresentUrl VARCHAR(255),???
    rating NUMERIC,
    rating_number INTEGER, -- so luong hoc vien danh gia
    enroll_number INTEGER, --so luong hoc vien dk hoc
    chapter_number INTEGER, -- so chuong
    view_number INTEGER, -- luot xem
    price NUMERIC,
    concurrency VARCHAR(50),
    discount SMALLINT,
    course_language VARCHAR(50),
    course_state VARCHAR(1), --F: Finished, U: Unfinished
	created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP,
    category_id INTEGER NOT NULL REFERENCES categories(id),
    instructor_id INTEGER NOT NULL REFERENCES instructor(id)
);

CREATE TABLE chapters( -- một khóa học có nhiều chương 1 2 3 ...
    id serial PRIMARY KEY,
    course_id INTEGER NOT NULL REFERENCES courses(id),
    lesson_number INTEGER,
    short_description TEXT,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP
);

CREATE TABLE lessons ( -- mỗi chương có nhiều bài 1 2 3 ...
	id serial PRIMARY KEY,
    chapter_id INTEGER NOT NULL REFERENCES chapters(id),
	lesson_name VARCHAR (255) UNIQUE NOT NULL,
    video_url VARCHAR(255),
    short_description TEXT,
    full_description TEXT,
    view_number INTEGER, -- luot xem
    hour INTEGER,
    current_watch TIMESTAMP, -- xem tới khúc nào của video
	created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP
);

CREATE TABLE watchList( -- học viên: danh sach yêu thích: nhiều nhiều student-courses
    id serial PRIMARY KEY,
    student_id INTEGER NOT NULL REFERENCES student(id),
    course_id INTEGER NOT NULL REFERENCES courses(id),
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP
);

CREATE TABLE review( -- học viên đánh giá khóa học: nhiều - nhiều
    id serial PRIMARY KEY,
    comment TEXT,
    star INTEGER, -- từ 0-5 sao
    student_id INTEGER NOT NULL REFERENCES student(id),
    course_id INTEGER NOT NULL REFERENCES courses(id),
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP
);

CREATE TABLE cart(-- giỏ hàng: học viên mua khóa học: nhiều - nhiều
    id serial PRIMARY KEY,
    student_id INTEGER NOT NULL REFERENCES student(id),
    course_id INTEGER NOT NULL REFERENCES courses(id),
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP
);

CREATE TABLE courseBought(-- khóa học đã đc mua:  nhiều - nhiều
    id serial PRIMARY KEY,
    student_id INTEGER NOT NULL REFERENCES student(id),
    course_id INTEGER NOT NULL REFERENCES courses(id),
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP
);

ALTER TABLE lessons
ADD COLUMN is_free boolean;

ALTER TABLE chapters
ADD COLUMN chapter_name VARCHAR (255);
