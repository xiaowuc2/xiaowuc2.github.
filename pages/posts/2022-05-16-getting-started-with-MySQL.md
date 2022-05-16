---
title: Getting started with MySQL
date: 2022/05/16
description: Data is useful as long as we've control over storing, reading, updating and deleting it as per our needs. MySQL is a Database Management System which allows us to use the CRUD(create, read, update, and delete) method.
tag: dbms
author: Rohit Prasan Mandal
---

1..........

<object width="425" height="350">
  <param name="movie" value="http://www.youtube.com/user/wwwLoveWatercom?v=BTRN1YETpyg" />
  <param name="wmode" value="transparent" />
  <embed src="http://www.youtube.com/user/wwwLoveWatercom?v=BTRN1YETpyg"
         type="application/x-shockwave-flash"
         wmode="transparent" width="425" height="350" />
</object>

2............

<iframe width="1045" height="588" src="https://www.youtube.com/embed/yfWu2clv9UY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

3.................

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](https://www.youtube.com/watch?v=Rub-JsjMhWY)



### Types of Keys

#### 1. Super Key
A super key is a set of one or more than one key that can be used to identify a record uniquely in a table. Example: Primary key, Unique key, Alternate key are a subset of Super Keys.

#### 2. Candidate Key
A Candidate Key is a set of one or more fields/columns that can identify a record uniquely in a table. There can be multiple Candidate Keys in one table. Each Candidate Key can work as a Primary Key.

#### 3. Primary Key
A primary key is a set of one or more fields/columns of a table that uniquely identify a record in a database table. It can not accept null, duplicate values. Only one Candidate Key can be Primary Key.

#### 4. Alternate key
An Alternate key is a key that can work as a primary key. Basically, it is a candidate key that currently is not a primary key.

#### 5. Composite/Compound Key
A composite Key is a combination of more than one field/column of a table. It can be a Candidate key, Primary key.

#### 6. Unique Key
A unique key is a set of one or more fields/columns of a table that uniquely identify a record in a database table. It is like a Primary key but it can accept only one null value and it can not have duplicate values. For more help refer to the article Difference between primary key and unique key.

#### 7. Foreign Key
Foreign Key is a field in a database table that is the Primary key in another table. It can accept multiple nulls and duplicate values. For more help refer to the article Difference between primary key and foreign key.

