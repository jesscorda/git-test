create table Register(
	RegisterId int primary key auto_increment,
    FullName varchar(100),
    CompanyName varchar(100),
    email varchar(100),
    country varchar(100),
    UserPassword varchar(100)
);

use backend;

create table UserProfile(
	ProfileId int primary key auto_increment,
    FirstName varchar(100),
	LastName varchar(100),
    Phone int,
    City varchar(100),
    email varchar(100),
    bio varchar(100),
    gender varchar(100),
    ImageFile varchar(100)
);