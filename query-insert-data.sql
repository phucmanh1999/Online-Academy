/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : PostgreSQL
 Source Server Version : 130001
 Source Host           : localhost:5432
 Source Catalog        : online-academy
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 130001
 File Encoding         : 65001

 Date: 20/01/2021 04:23:54
*/


-- ----------------------------
-- Sequence structure for administrator_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "administrator_id_seq";
CREATE SEQUENCE "administrator_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for cart_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "cart_id_seq";
CREATE SEQUENCE "cart_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for categories_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "categories_id_seq";
CREATE SEQUENCE "categories_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for chapters_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "chapters_id_seq";
CREATE SEQUENCE "chapters_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for coursebought_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "coursebought_id_seq";
CREATE SEQUENCE "coursebought_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for courses_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "courses_id_seq";
CREATE SEQUENCE "courses_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for instructor_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "instructor_id_seq";
CREATE SEQUENCE "instructor_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for lessons_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "lessons_id_seq";
CREATE SEQUENCE "lessons_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for review_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "review_id_seq";
CREATE SEQUENCE "review_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for roles_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "roles_id_seq";
CREATE SEQUENCE "roles_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for rootcategory_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "rootcategory_id_seq";
CREATE SEQUENCE "rootcategory_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for student_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "student_id_seq";
CREATE SEQUENCE "student_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for users_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "users_id_seq";
CREATE SEQUENCE "users_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for watchlist_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "watchlist_id_seq";
CREATE SEQUENCE "watchlist_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for administrator
-- ----------------------------
DROP TABLE IF EXISTS "administrator";
CREATE TABLE "administrator" (
  "id" int4 NOT NULL DEFAULT nextval('administrator_id_seq'::regclass),
  "user_id" int4 NOT NULL
)
;

-- ----------------------------
-- Records of administrator
-- ----------------------------
BEGIN;
INSERT INTO "administrator" VALUES (2, 32);
COMMIT;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS "cart";
CREATE TABLE "cart" (
  "id" int4 NOT NULL DEFAULT nextval('cart_id_seq'::regclass),
  "student_id" int4 NOT NULL,
  "course_id" int4 NOT NULL,
  "created_at" timestamp(6) NOT NULL,
  "updated_at" timestamp(6)
)
;

-- ----------------------------
-- Records of cart
-- ----------------------------
BEGIN;
INSERT INTO "cart" VALUES (17, 6, 37, '2021-01-19 20:41:30.051', NULL);
INSERT INTO "cart" VALUES (18, 6, 40, '2021-01-19 20:41:36.896', NULL);
COMMIT;

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS "categories";
CREATE TABLE "categories" (
  "id" int4 NOT NULL DEFAULT nextval('categories_id_seq'::regclass),
  "category_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "created_at" timestamp(6) NOT NULL,
  "updated_at" timestamp(6),
  "parent_category" int4
)
;

-- ----------------------------
-- Records of categories
-- ----------------------------
BEGIN;
INSERT INTO "categories" VALUES (17, 'Java Script', '2021-01-19 18:45:43.655', NULL, 3);
INSERT INTO "categories" VALUES (18, 'Flutter', '2021-01-19 18:45:53.422', NULL, 2);
INSERT INTO "categories" VALUES (19, 'Design Pattern', '2021-01-19 18:46:43.18', NULL, 2);
INSERT INTO "categories" VALUES (20, 'Android', '2021-01-19 18:46:52.839', NULL, 2);
INSERT INTO "categories" VALUES (21, 'Angular', '2021-01-19 18:47:29.059', NULL, 3);
COMMIT;

-- ----------------------------
-- Table structure for chapters
-- ----------------------------
DROP TABLE IF EXISTS "chapters";
CREATE TABLE "chapters" (
  "id" int4 NOT NULL DEFAULT nextval('chapters_id_seq'::regclass),
  "course_id" int4 NOT NULL,
  "lesson_number" int4,
  "short_description" text COLLATE "pg_catalog"."default",
  "created_at" timestamp(6) NOT NULL,
  "updated_at" timestamp(6),
  "chapter_name" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of chapters
-- ----------------------------
BEGIN;
INSERT INTO "chapters" VALUES (8, 27, 1, 'How to code', '2021-01-19 19:01:36.453', NULL, 'Chapter 1');
INSERT INTO "chapters" VALUES (9, 34, 0, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever', '2021-01-19 19:55:31.314', NULL, 'Builder 1');
INSERT INTO "chapters" VALUES (10, 36, 1, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever', '2021-01-19 19:59:39.984', NULL, 'Dart first look');
INSERT INTO "chapters" VALUES (11, 37, 5, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '2021-01-19 20:04:37.705', NULL, 'Ajax');
INSERT INTO "chapters" VALUES (12, 38, 1, 'Lorem Ipsum is simply dummy texttt1', '2021-01-19 21:09:08.448', NULL, 'Chapter 1.13');
COMMIT;

-- ----------------------------
-- Table structure for coursebought
-- ----------------------------
DROP TABLE IF EXISTS "coursebought";
CREATE TABLE "coursebought" (
  "id" int4 NOT NULL DEFAULT nextval('coursebought_id_seq'::regclass),
  "student_id" int4 NOT NULL,
  "course_id" int4 NOT NULL,
  "created_at" timestamp(6) NOT NULL,
  "updated_at" timestamp(6)
)
;

-- ----------------------------
-- Records of coursebought
-- ----------------------------
BEGIN;
INSERT INTO "coursebought" VALUES (12, 5, 27, '2021-01-19 19:04:31.831', NULL);
INSERT INTO "coursebought" VALUES (13, 5, 36, '2021-01-19 20:02:05.951', NULL);
INSERT INTO "coursebought" VALUES (14, 5, 37, '2021-01-19 20:10:15.085', NULL);
INSERT INTO "coursebought" VALUES (15, 6, 27, '2021-01-19 20:38:47.282', NULL);
INSERT INTO "coursebought" VALUES (16, 5, 38, '2021-01-19 21:15:13.723', NULL);
COMMIT;

-- ----------------------------
-- Table structure for courses
-- ----------------------------
DROP TABLE IF EXISTS "courses";
CREATE TABLE "courses" (
  "id" int4 NOT NULL DEFAULT nextval('courses_id_seq'::regclass),
  "course_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "img_path" varchar(255) COLLATE "pg_catalog"."default",
  "short_description" text COLLATE "pg_catalog"."default",
  "full_description" text COLLATE "pg_catalog"."default",
  "rating" numeric,
  "rating_number" int4,
  "enroll_number" int4,
  "chapter_number" int4,
  "view_number" int4,
  "price" numeric,
  "concurrency" varchar(50) COLLATE "pg_catalog"."default",
  "discount" int2,
  "course_language" varchar(50) COLLATE "pg_catalog"."default",
  "course_state" varchar(1) COLLATE "pg_catalog"."default",
  "created_at" timestamp(6) NOT NULL,
  "updated_at" timestamp(6),
  "category_id" int4 NOT NULL,
  "instructor_id" int4 NOT NULL,
  "is_active" bool
)
;

-- ----------------------------
-- Records of courses
-- ----------------------------
BEGIN;
INSERT INTO "courses" VALUES (27, 'Javascript for beginnerr', '/assets/images/cafedev_javascript.png', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '{"ops":[{"attributes":{"color":"#000000","size":"large","bold":true},"insert":"Lorem Ipsum"},{"attributes":{"color":"#000000"},"insert":" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"insert":"\n"}]}', 3.7, 3, 2, 1, 18, 198, 'USD', NULL, 'vi', 'U', '2021-01-19 18:55:26.369', '2021-01-19 19:42:45.394', 17, 7, 't');
INSERT INTO "courses" VALUES (33, 'Angular and more', '/assets/images/download.png', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever', '{"ops":[{"attributes":{"underline":true,"color":"#ff9900","bold":true},"insert":"Lorem Ipsum is simply dummy text of the "},{"attributes":{"underline":true,"color":"#ff9900","size":"large","bold":true},"insert":"printing "},{"attributes":{"underline":true,"color":"#ff9900","bold":true},"insert":"and typesetting industry. Lorem Ipsum"},{"attributes":{"color":"#ff9900"},"insert":" has been the industry''s standard dummy text ever"},{"insert":"\n"}]}', 0, 0, 0, 0, 0, 1230, 'USD', NULL, 'vi', 'U', '2021-01-19 19:53:54.15', NULL, 21, 8, 't');
INSERT INTO "courses" VALUES (34, 'Builder Pattern', '/assets/images/maxresdefault.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever', '{"ops":[{"attributes":{"color":"#000000","size":"large","bold":true},"insert":"Lorem Ipsum"},{"attributes":{"color":"#000000"},"insert":" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever"},{"insert":"\n"}]}', 0, 0, 0, 1, 0, 110, 'USD', NULL, 'vi', 'U', '2021-01-19 19:55:18.701', NULL, 19, 8, 't');
INSERT INTO "courses" VALUES (38, 'Javascript high skill', '/assets/images/default.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '{"ops":[{"attributes":{"color":"#000000","size":"large","bold":true},"insert":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"insert":"\n"}]}', 0, 0, 1, 1, 5, 89, 'USD', NULL, 'vi', 'U', '2021-01-19 20:17:48.634', '2021-01-19 21:08:43.994', 17, 6, 't');
INSERT INTO "courses" VALUES (35, 'Android for professor', '/assets/images/android-google_1280x720-800-resize.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever', '{"ops":[{"attributes":{"color":"#000000","size":"huge","bold":true},"insert":"Lorem"},{"attributes":{"color":"#000000","bold":true},"insert":" Ipsum"},{"attributes":{"color":"#000000"},"insert":" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever"},{"insert":"\n"}]}', 0, 0, 0, 0, 0, 1230, 'USD', NULL, 'vi', 'U', '2021-01-19 19:57:15.352', NULL, 20, 8, 't');
INSERT INTO "courses" VALUES (37, 'Jquery', '/assets/images/default.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '{"ops":[{"attributes":{"underline":true,"italic":true,"color":"#000000","bold":true},"insert":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"insert":"\n"}]}', 0, 0, 1, 1, 3, 110, 'USD', NULL, 'vi', 'U', '2021-01-19 20:04:29.221', NULL, 17, 6, 't');
INSERT INTO "courses" VALUES (36, 'Dart in flutter', '/assets/images/maxresdefault .jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever', '{"ops":[{"attributes":{"color":"#000000","bold":true},"insert":"Lorem Ipsum"},{"attributes":{"color":"#000000"},"insert":" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever"},{"insert":"\n"}]}', 0, 0, 1, 1, 4, 110, 'USD', NULL, 'vi', 'U', '2021-01-19 19:58:28.808', '2021-01-19 19:58:52.362', 18, 6, 't');
INSERT INTO "courses" VALUES (39, 'Html and js', '/assets/images/html-la-gi-1280x720.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '{"ops":[{"attributes":{"color":"#000000","bold":true},"insert":"Lorem Ipsum"},{"attributes":{"color":"#000000"},"insert":" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"insert":"\n"}]}', 0, 0, 0, 0, 0, 120, 'USD', NULL, 'vi', 'U', '2021-01-19 20:21:44.689', NULL, 17, 6, 't');
INSERT INTO "courses" VALUES (32, 'Flutter for beginner', '/assets/images/default.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever', '{"ops":[{"attributes":{"color":"#000000","size":"huge","bold":true},"insert":"Lorem "},{"attributes":{"size":"huge","color":"#ff9900","bold":true},"insert":"Ipsum"},{"attributes":{"size":"huge","color":"#ff9900"},"insert":" "},{"attributes":{"size":"huge","color":"#000000"},"insert":"is simply dummy text of the printing and typesetting"},{"attributes":{"color":"#000000"},"insert":" industry. Lorem Ipsum has been the industry''s standard "},{"attributes":{"color":"#000000","background":"#e60000"},"insert":"dummy text ever"},{"insert":"\n"}]}', 0, 0, 0, 0, 20, 990, 'USD', NULL, 'vi', 'U', '2021-01-19 19:24:23.992', '2021-01-19 19:51:10.562', 18, 7, 't');
INSERT INTO "courses" VALUES (43, 'Date in js', '/assets/images/doi-tuong-date.png', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '{"ops":[{"attributes":{"color":"#000000","bold":true},"insert":"Lorem Ipsum"},{"attributes":{"color":"#000000"},"insert":" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"insert":"\n"}]}', 0, 0, 0, 0, 0, 1110, 'USD', NULL, 'vi', 'U', '2021-01-19 20:24:56.262', NULL, 17, 6, 't');
INSERT INTO "courses" VALUES (44, 'Js 2', '/assets/images/unnamed.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '{"ops":[{"attributes":{"color":"#000000","bold":true},"insert":"Lorem Ipsum"},{"attributes":{"color":"#000000"},"insert":" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"insert":"\n"}]}', 0, 0, 0, 0, 0, 660, 'USD', NULL, 'vi', 'U', '2021-01-19 20:25:32.269', NULL, 17, 6, 't');
INSERT INTO "courses" VALUES (41, 'String js', '/assets/images/gọi-hàm-javascript-trong-html.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '{"ops":[{"attributes":{"color":"#000000","bold":true},"insert":"Lorem Ipsum"},{"attributes":{"color":"#000000"},"insert":" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"insert":"\n"}]}', 0, 0, 0, 0, 0, 12, 'USD', NULL, 'vi', 'U', '2021-01-19 20:23:36.082', NULL, 17, 6, 't');
INSERT INTO "courses" VALUES (40, 'Event and listener', '/assets/images/event-listeners-trong-javascript.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '{"ops":[{"attributes":{"color":"#000000","size":"large","bold":true},"insert":"Lorem Ipsum"},{"attributes":{"color":"#000000","size":"large"},"insert":" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"insert":"\n"}]}', 0, 0, 0, 0, 1, 12, 'USD', NULL, 'vi', 'U', '2021-01-19 20:22:48.347', NULL, 17, 6, 't');
INSERT INTO "courses" VALUES (42, 'Design', '/assets/images/myclass.vn-frontend-big.jpeg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '{"ops":[{"attributes":{"color":"#000000","bold":true},"insert":"Lorem Ipsum"},{"attributes":{"color":"#000000"},"insert":" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"insert":"\n"}]}', 0, 0, 0, 0, 1, 12340, 'USD', NULL, 'vi', 'U', '2021-01-19 20:24:15.57', NULL, 17, 6, 't');
COMMIT;

-- ----------------------------
-- Table structure for instructor
-- ----------------------------
DROP TABLE IF EXISTS "instructor";
CREATE TABLE "instructor" (
  "id" int4 NOT NULL DEFAULT nextval('instructor_id_seq'::regclass),
  "user_id" int4 NOT NULL,
  "job_title" varchar(255) COLLATE "pg_catalog"."default",
  "short_description" text COLLATE "pg_catalog"."default",
  "full_description" text COLLATE "pg_catalog"."default",
  "rating" numeric,
  "rating_number" int4,
  "enroll_number" int4,
  "course_number" int4
)
;

-- ----------------------------
-- Records of instructor
-- ----------------------------
BEGIN;
INSERT INTO "instructor" VALUES (7, 34, 'Teacher', '', 'This is description', NULL, NULL, NULL, 2);
INSERT INTO "instructor" VALUES (8, 35, 'Professor', NULL, 'This is description', NULL, NULL, NULL, 3);
INSERT INTO "instructor" VALUES (6, 33, 'Professor', NULL, 'This is description', NULL, NULL, NULL, 9);
COMMIT;

-- ----------------------------
-- Table structure for lessons
-- ----------------------------
DROP TABLE IF EXISTS "lessons";
CREATE TABLE "lessons" (
  "id" int4 NOT NULL DEFAULT nextval('lessons_id_seq'::regclass),
  "chapter_id" int4 NOT NULL,
  "lesson_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "video_url" varchar(255) COLLATE "pg_catalog"."default",
  "short_description" text COLLATE "pg_catalog"."default",
  "full_description" text COLLATE "pg_catalog"."default",
  "view_number" int4,
  "hour" int4,
  "current_watch" timestamp(6),
  "created_at" timestamp(6) NOT NULL,
  "updated_at" timestamp(6),
  "is_free" bool
)
;

-- ----------------------------
-- Records of lessons
-- ----------------------------
BEGIN;
INSERT INTO "lessons" VALUES (9, 8, 'How to code 1', '/assets/video/44f4bae2-05ed-4b38-afb8-09893a3a1ca3.mov', 'Code over view', '{"ops":[{"attributes":{"underline":true,"color":"#000000","bold":true},"insert":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not"},{"attributes":{"color":"#000000"},"insert":" only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"insert":"\n"}]}', NULL, NULL, NULL, '2021-01-19 19:03:05.48', NULL, 'f');
INSERT INTO "lessons" VALUES (15, 11, 'Ajax lesson 1', '/assets/video/44f4bae2-05ed-4b38-afb8-09893a3a1ca3.mov', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '{"ops":[{"attributes":{"italic":true,"color":"#000000","bold":true},"insert":"Lorem Ipsum"},{"attributes":{"color":"#000000","italic":true},"insert":" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"insert":"\n"}]}', NULL, NULL, NULL, '2021-01-19 20:09:17.921', NULL, 'f');
INSERT INTO "lessons" VALUES (16, 11, 'Ajax Lesson 2', '/assets/video/big_buck_bunny.mp4', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '{"ops":[{"attributes":{"underline":true,"color":"#000000","bold":true},"insert":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"insert":"\n"}]}', NULL, NULL, NULL, '2021-01-19 20:09:34.928', NULL, 'f');
INSERT INTO "lessons" VALUES (18, 12, '2222222222', '/assets/video/44f4bae2-05ed-4b38-afb8-09893a3a1ca3.mov', 'Lorem Ipsum is simply dummy text', '', NULL, NULL, NULL, '2021-01-19 21:10:06.774', NULL, 'f');
COMMIT;

-- ----------------------------
-- Table structure for review
-- ----------------------------
DROP TABLE IF EXISTS "review";
CREATE TABLE "review" (
  "id" int4 NOT NULL DEFAULT nextval('review_id_seq'::regclass),
  "comment" text COLLATE "pg_catalog"."default",
  "star" int4,
  "student_id" int4 NOT NULL,
  "course_id" int4 NOT NULL,
  "created_at" timestamp(6) NOT NULL,
  "updated_at" timestamp(6)
)
;

-- ----------------------------
-- Records of review
-- ----------------------------
BEGIN;
INSERT INTO "review" VALUES (24, 'Verry nice', 2, 5, 27, '2021-01-19 19:14:52.599', NULL);
INSERT INTO "review" VALUES (25, 'SO very good', 4, 6, 27, '2021-01-19 20:40:18.703', NULL);
INSERT INTO "review" VALUES (26, 'From noluckallskill with love', 5, 6, 27, '2021-01-19 20:44:44.766', NULL);
COMMIT;

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS "roles";
CREATE TABLE "roles" (
  "id" int4 NOT NULL DEFAULT nextval('roles_id_seq'::regclass),
  "role_name" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "created_at" timestamp(6) NOT NULL,
  "updated_at" timestamp(6)
)
;

-- ----------------------------
-- Records of roles
-- ----------------------------
BEGIN;
INSERT INTO "roles" VALUES (4, 'Administrator', '2021-01-20 01:38:22', NULL);
INSERT INTO "roles" VALUES (5, 'Instructor', '2021-01-20 01:38:32', NULL);
INSERT INTO "roles" VALUES (6, 'Student', '2021-01-20 01:38:40', NULL);
COMMIT;

-- ----------------------------
-- Table structure for rootcategory
-- ----------------------------
DROP TABLE IF EXISTS "rootcategory";
CREATE TABLE "rootcategory" (
  "id" int4 NOT NULL DEFAULT nextval('rootcategory_id_seq'::regclass),
  "root_category_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "created_at" timestamp(6)
)
;

-- ----------------------------
-- Records of rootcategory
-- ----------------------------
BEGIN;
INSERT INTO "rootcategory" VALUES (2, 'Mobile', NULL);
INSERT INTO "rootcategory" VALUES (3, 'Web', NULL);
COMMIT;

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS "student";
CREATE TABLE "student" (
  "id" int4 NOT NULL DEFAULT nextval('student_id_seq'::regclass),
  "user_id" int4 NOT NULL,
  "buy_number" int4
)
;

-- ----------------------------
-- Records of student
-- ----------------------------
BEGIN;
INSERT INTO "student" VALUES (5, 36, NULL);
INSERT INTO "student" VALUES (6, 37, NULL);
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "users";
CREATE TABLE "users" (
  "id" int4 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
  "user_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "user_password" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "email" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "first_name" varchar(255) COLLATE "pg_catalog"."default",
  "last_name" varchar(255) COLLATE "pg_catalog"."default",
  "gender" varchar(1) COLLATE "pg_catalog"."default",
  "birthday" date,
  "avatar_url" varchar(255) COLLATE "pg_catalog"."default",
  "user_address" varchar(255) COLLATE "pg_catalog"."default",
  "created_at" timestamp(6) NOT NULL,
  "updated_at" timestamp(6),
  "last_login" timestamp(6),
  "role_id" int4 NOT NULL,
  "is_active" bool
)
;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO "users" VALUES (36, 'hoangphuc', '$2b$10$OvZsL1bVW5Yqb6JYXUTNwuUo9dqYHoaelPB75hG5tCzixjV379/ae', 'student1@gmail.com', 'Hoàng Phúc', 'Nguyễn Son', 'F', NULL, '/assets/image/49407179_220560048847487_4788935466147643392_n.jpg', '', '2021-01-19 18:50:49.487', NULL, '2021-01-19 20:30:31.437', 6, 't');
INSERT INTO "users" VALUES (37, 'nguyenanhnam', '$2b$10$6hddGf.vEZYO4m2eliMtRubQJmmcgZOaenScf4wJIcyIkxCd7LGqW', 'anhnamnguyen99@gmail.com', 'Nguyễn', 'Anh Nam', 'F', NULL, '/assets/image/53591940_337028313587051_1255083860157267968_n.jpg', '', '2021-01-19 20:38:15.503', NULL, '2021-01-19 20:38:40.711', 6, 't');
INSERT INTO "users" VALUES (33, 'manh', '$2b$10$IYNKlv7XHU178PAeudRPmO/K8XBgo0.kix.OavIElT8uWgT7e6xnm', 'manh@gmail.com', 'Nguyen Anh', 'Manh', NULL, NULL, '/assets/images/default_avt.png', NULL, '2021-01-19 18:48:27.385', NULL, '2021-01-19 21:08:20.7', 5, 't');
INSERT INTO "users" VALUES (32, 'admin', '$2b$10$/tbH.b0NCEYq.x4/fx00hO4a6OvQGClXSajNhA.e5wDZuPv6KsIle', 'admin@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-20 01:39:19', '2021-01-20 01:39:09', '2021-01-19 18:44:55.933', 4, 't');
INSERT INTO "users" VALUES (34, 'phat', '$2b$10$rIDz4fIu8Epv.BSI/GiIsur15UTAjsNOAmC5Oav81mdjC1jTfiVWW', 'phat@gmail.com', 'Nguyen Phuoc', 'Phat', 'F', NULL, '/assets/image/67378560_2322539804491813_5632656751787507712_n.png', '', '2021-01-19 18:49:07.238', NULL, '2021-01-19 18:51:15.992', 5, 't');
INSERT INTO "users" VALUES (35, 'nam', '$2b$10$lOwve4GmRFPe/rcwmyBYgOXMuL1EctHunGBWWiJRZnWEcZNLgffNa', 'nam@gmail.com', 'Nguyen Phuc', 'Nam', NULL, NULL, '/assets/images/default_avt.png', NULL, '2021-01-19 18:49:54.699', NULL, '2021-01-19 19:52:22.413', 5, 't');
COMMIT;

-- ----------------------------
-- Table structure for watchlist
-- ----------------------------
DROP TABLE IF EXISTS "watchlist";
CREATE TABLE "watchlist" (
  "id" int4 NOT NULL DEFAULT nextval('watchlist_id_seq'::regclass),
  "student_id" int4 NOT NULL,
  "course_id" int4 NOT NULL,
  "created_at" timestamp(6) NOT NULL,
  "updated_at" timestamp(6)
)
;

-- ----------------------------
-- Records of watchlist
-- ----------------------------
BEGIN;
INSERT INTO "watchlist" VALUES (6, 6, 37, '2021-01-19 20:41:22.199', NULL);
INSERT INTO "watchlist" VALUES (7, 6, 36, '2021-01-19 20:41:26.25', NULL);
COMMIT;

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "administrator_id_seq"
OWNED BY "administrator"."id";
SELECT setval('"administrator_id_seq"', 3, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "cart_id_seq"
OWNED BY "cart"."id";
SELECT setval('"cart_id_seq"', 19, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "categories_id_seq"
OWNED BY "categories"."id";
SELECT setval('"categories_id_seq"', 22, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "chapters_id_seq"
OWNED BY "chapters"."id";
SELECT setval('"chapters_id_seq"', 13, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "coursebought_id_seq"
OWNED BY "coursebought"."id";
SELECT setval('"coursebought_id_seq"', 17, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "courses_id_seq"
OWNED BY "courses"."id";
SELECT setval('"courses_id_seq"', 45, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "instructor_id_seq"
OWNED BY "instructor"."id";
SELECT setval('"instructor_id_seq"', 9, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "lessons_id_seq"
OWNED BY "lessons"."id";
SELECT setval('"lessons_id_seq"', 19, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "review_id_seq"
OWNED BY "review"."id";
SELECT setval('"review_id_seq"', 27, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "roles_id_seq"
OWNED BY "roles"."id";
SELECT setval('"roles_id_seq"', 7, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "rootcategory_id_seq"
OWNED BY "rootcategory"."id";
SELECT setval('"rootcategory_id_seq"', 4, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "student_id_seq"
OWNED BY "student"."id";
SELECT setval('"student_id_seq"', 7, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "users_id_seq"
OWNED BY "users"."id";
SELECT setval('"users_id_seq"', 38, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "watchlist_id_seq"
OWNED BY "watchlist"."id";
SELECT setval('"watchlist_id_seq"', 8, true);

-- ----------------------------
-- Primary Key structure for table administrator
-- ----------------------------
ALTER TABLE "administrator" ADD CONSTRAINT "administrator_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table cart
-- ----------------------------
ALTER TABLE "cart" ADD CONSTRAINT "cart_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table categories
-- ----------------------------
ALTER TABLE "categories" ADD CONSTRAINT "categories_category_name_key" UNIQUE ("category_name");

-- ----------------------------
-- Primary Key structure for table categories
-- ----------------------------
ALTER TABLE "categories" ADD CONSTRAINT "categories_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table chapters
-- ----------------------------
ALTER TABLE "chapters" ADD CONSTRAINT "chapters_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table coursebought
-- ----------------------------
ALTER TABLE "coursebought" ADD CONSTRAINT "coursebought_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table courses
-- ----------------------------
ALTER TABLE "courses" ADD CONSTRAINT "courses_course_name_key" UNIQUE ("course_name");

-- ----------------------------
-- Primary Key structure for table courses
-- ----------------------------
ALTER TABLE "courses" ADD CONSTRAINT "courses_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table instructor
-- ----------------------------
ALTER TABLE "instructor" ADD CONSTRAINT "instructor_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table lessons
-- ----------------------------
ALTER TABLE "lessons" ADD CONSTRAINT "lessons_lesson_name_key" UNIQUE ("lesson_name");

-- ----------------------------
-- Primary Key structure for table lessons
-- ----------------------------
ALTER TABLE "lessons" ADD CONSTRAINT "lessons_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table review
-- ----------------------------
ALTER TABLE "review" ADD CONSTRAINT "review_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table roles
-- ----------------------------
ALTER TABLE "roles" ADD CONSTRAINT "roles_role_name_key" UNIQUE ("role_name");

-- ----------------------------
-- Primary Key structure for table roles
-- ----------------------------
ALTER TABLE "roles" ADD CONSTRAINT "roles_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table rootcategory
-- ----------------------------
ALTER TABLE "rootcategory" ADD CONSTRAINT "rootcategory_root_category_name_key" UNIQUE ("root_category_name");

-- ----------------------------
-- Primary Key structure for table rootcategory
-- ----------------------------
ALTER TABLE "rootcategory" ADD CONSTRAINT "rootcategory_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table student
-- ----------------------------
ALTER TABLE "student" ADD CONSTRAINT "student_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table users
-- ----------------------------
ALTER TABLE "users" ADD CONSTRAINT "users_user_name_key" UNIQUE ("user_name");
ALTER TABLE "users" ADD CONSTRAINT "users_email_key" UNIQUE ("email");

-- ----------------------------
-- Primary Key structure for table users
-- ----------------------------
ALTER TABLE "users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table watchlist
-- ----------------------------
ALTER TABLE "watchlist" ADD CONSTRAINT "watchlist_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table administrator
-- ----------------------------
ALTER TABLE "administrator" ADD CONSTRAINT "administrator_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table cart
-- ----------------------------
ALTER TABLE "cart" ADD CONSTRAINT "cart_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "cart" ADD CONSTRAINT "cart_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "student" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table categories
-- ----------------------------
ALTER TABLE "categories" ADD CONSTRAINT "categories_rootcategory_id_fkey" FOREIGN KEY ("parent_category") REFERENCES "rootcategory" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table chapters
-- ----------------------------
ALTER TABLE "chapters" ADD CONSTRAINT "chapters_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table coursebought
-- ----------------------------
ALTER TABLE "coursebought" ADD CONSTRAINT "coursebought_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "coursebought" ADD CONSTRAINT "coursebought_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "student" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table courses
-- ----------------------------
ALTER TABLE "courses" ADD CONSTRAINT "courses_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "courses" ADD CONSTRAINT "courses_instructor_id_fkey" FOREIGN KEY ("instructor_id") REFERENCES "instructor" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table instructor
-- ----------------------------
ALTER TABLE "instructor" ADD CONSTRAINT "instructor_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table lessons
-- ----------------------------
ALTER TABLE "lessons" ADD CONSTRAINT "lessons_chapter_id_fkey" FOREIGN KEY ("chapter_id") REFERENCES "chapters" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table review
-- ----------------------------
ALTER TABLE "review" ADD CONSTRAINT "review_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "review" ADD CONSTRAINT "review_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "student" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table student
-- ----------------------------
ALTER TABLE "student" ADD CONSTRAINT "student_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table users
-- ----------------------------
ALTER TABLE "users" ADD CONSTRAINT "users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table watchlist
-- ----------------------------
ALTER TABLE "watchlist" ADD CONSTRAINT "watchlist_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "watchlist" ADD CONSTRAINT "watchlist_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "student" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
