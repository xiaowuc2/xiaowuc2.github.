---
title: Getting started with MySQL
date: 2022/05/16
description: Data is useful as long as we've control over storing, reading, updating and deleting it as per our needs. MySQL is a Database Management System which allows us to use the CRUD(create, read, update, and delete) method.
tag: dbms
author: Rohit Prasan Mandal
---

### About

Data is useful as long as we've control over storing, reading, updating and deleting it as per our needs. MySQL is a Database Management System which allows us to use the CRUD(create, read, update, and delete) method. Database Management Systems can be used for data collection and storage through the training of machine learning models, or to deploy real-time prediction endpoints.
 
### Prerequisites

1. Programming sense
2. MySQL community server
3. PopSQL [^1]

### Index:

0. [Important Commands]()
1. [Introduction]()
2. [Types of Keys](https://xiaowuc2.vercel.app/posts/2022-05-16-getting-started-with-MySQL#types-of-keys)
3. Creating Tables
4. Inserting Data
5. Constraints 
6. Update & Delete
7. Basic Queries
8. Company Database Intro
9. Creating Company Database
10. More Basic Queries
11. Functions
12. Wildcards
13. Union
14. Joins
15. Nested Queries
16. On Delete
17. Triggers
18. ER Diagrams Intro
19. Designing an ER Diagram
20. Converting ER Diagrams to Schemas

----
### 0. Important Commands


```
SELECT - extracts data from a database
UPDATE - updates data in a database
DELETE - deletes data from a database
INSERT INTO - inserts new data into a database
CREATE DATABASE - creates a new database
ALTER DATABASE - modifies a database
CREATE TABLE - creates a new table
ALTER TABLE - modifies a table
DROP TABLE - deletes a table
CREATE INDEX - creates an index (search key)
DROP INDEX - deletes an index
-- - comment 
AUTO_INCREMENT - auto increment values. eg. 1 2 3 4 ...

```

### 1. Introduction

- Database is any collection of related information
- DBMS / Database Management Systems makes it easy to create, maintain and secure a database
- It allows us to perform CRUD operations
- Database are of two types : i) Relational ii) Non-relational
- Relational databases use SQL and store data in tabular format
- Non-relational stores data using ohter data structure like graphs, documents(json, blob, xml etc) 

### 2. Types of Keys

1. Super Key
2. Candidate Key
3. Primary Key
4. Alternate key
5. Composite/Compound Key
6. Unique Key
7. Foreign Key

### 3. Creating tables

```

INT                           -- Whole Numbers
DECIMAL(M,N)                  -- Decimal Numbers - Exact Value
VARCHAR(l)                    -- String of text of length l
BLOB                          -- Binary Large Object, Stores large data
DATE                          -- 'YYYY-MM-DD'
TIMESTAMP                     -- 'YYYY-MM-DD HH:MM:SS' - used for recording events

-- Creating tables
CREATE TABLE student (
  student_id INT PRIMARY KEY,
  name VARCHAR(40),
  major VARCHAR(40)
  -- PRIMARY KEY(student_id)
);

DESCRIBE student;
DROP TABLE student;
ALTER TABLE student ADD gpa DECIMAL;
ALTER TABLE student DROP COLUMN gpa;

```

### 4. Inserting Data
```

INSERT INTO student VALUES(1, 'Jack', 'Biology');
INSERT INTO student VALUES(2, 'Kate', 'Sociology');
INSERT INTO student(student_id, name) VALUES(3, 'Claire');
INSERT INTO student VALUES(4, 'Jack', 'Biology');
INSERT INTO student VALUES(5, 'Mike', 'Computer Science');

SELECT * FROM student;

```
### 5.Constraints 

PRIMARY KEY = NOT NULL and UNIQUE

```
CREATE TABLE student (
  student_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL,                        -- name VARCHAR(40) UNIQUE
  major VARCHAR(40) DEFAULT 'undecided',            -- major VARCHAR(40) UNIQUE
);

INSERT INTO student(name, major) VALUES(1, 'Jack', 'Biology');
INSERT INTO student(name, major) VALUES(2, 'Kate', 'Sociology');
INSERT INTO student(name) VALUES('Kate');
-- INSERT INTO student(name, major) VALUES(NULL, 'Sociology'); -- Error it can't be NULL as defined.
```

### 6. Update & Delete

|Comparison Operators|Meanning|
|----------|--------|
|=|Equals|
|<>|Not equals|
|>|greater than|
|<|less than|
|>=|greater than equal|
|<=|less than equal|
``` 
DELETE FROM student;

DELETE FROM student
WHERE student_id = 4;

DELETE FROM student
WHERE major = 'Sociology' AND name = 'Kate';

UPDATE student
SET major = 'Undecided';

UPDATE student
SET name = 'Johnny'
WHERE student_id = 4;

UPDATE student
SET major = 'Bio'
WHERE major = 'Biology';

UPDATE student
SET major = 'Biosociology'
WHERE major = 'Biology' OR major = 'sociology'

UPDATE student
SET major = 'Undecided', name = 'Tom'
WHERE student_id = 4;

```

### 7. Basic Queries
```

```
### 8. Company Database Intro
```

```
### 9. Creating Company Database
```

```
### 10. More Basic Queries
```

```
### 11. Functions
```

```
### 12. Wildcards
```

```
### 13. Union
```

```
### 14. Joins
```

```
### 15. Nested Queries
```

```
### 16. On Delete
```

```
### 17. Triggers
```

```
### 18. ER Diagrams Intro
```

```
### 19. Designing an ER Diagram
```

```
### 20. Converting ER Diagrams to Schemas
```

```


[^1]: MLDB is an open-source database designed for machine learning.
[^2]: PopSQL is a modern SQL editor for teams.
