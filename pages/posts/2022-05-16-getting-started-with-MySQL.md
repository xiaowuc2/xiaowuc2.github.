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

```sql

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
```sql

INSERT INTO student VALUES(1, 'Jack', 'Biology');
INSERT INTO student VALUES(2, 'Kate', 'Sociology');
INSERT INTO student(student_id, name) VALUES(3, 'Claire');
INSERT INTO student VALUES(4, 'Jack', 'Biology');
INSERT INTO student VALUES(5, 'Mike', 'Computer Science');

SELECT * FROM student;

```
### 5.Constraints 

```sql

CREATE TABLE student (
  student_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL,
  -- name VARCHAR(40) UNIQUE,
  major VARCHAR(40) DEFAULT 'undecided',
);

```

### 6. Update & Delete

```sql

```

### 7. Basic Queries
```sql

```
### 8. Company Database Intro
```sql

```
### 9. Creating Company Database
```sql

```
### 10. More Basic Queries
```sql

```
### 11. Functions
```sql

```
### 12. Wildcards
```sql

```
### 13. Union
```sql

```
### 14. Joins
```sql

```
### 15. Nested Queries
```sql

```
### 16. On Delete
```sql

```
### 17. Triggers
```sql

```
### 18. ER Diagrams Intro
```sql

```
### 19. Designing an ER Diagram
```sql

```
### 20. Converting ER Diagrams to Schemas
```sql

```


[^1]: MLDB is an open-source database designed for machine learning.
[^2]: PopSQL is a modern SQL editor for teams.
