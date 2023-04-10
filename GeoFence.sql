-- Active: 1678263946852@@127.0.0.1@3306@attendance_db
create database GeoFence;
use GeoFence;

#Creating tables for Student, Professor and Admin Login

create table StudUser(StudID varchar(10) not null, Password varchar(30) not null, Primary Key(StudID));
create table ProfUser(ProfID varchar(10) not null, Password varchar(30) not null, Primary Key(ProfID));
create table AdminUser(AdminID varchar(10) not null, Password varchar(30) not null, Primary Key(AdminID));

#Inserting values in Student, Professor and Admin Login
#StudUser
insert into StudUser values('STUD01' , 'terna');
insert into StudUser values('STUD02' , 'terna');
insert into StudUser values('STUD03' , 'terna');

#ProfUser
insert into ProfUser values('PROF01' , 'terna');
insert into ProfUser values('PROF02' , 'terna');
insert into ProfUser values('PROF03' , 'terna');
insert into ProfUser values('PROF04' , 'terna');

#AdminUser
insert into AdminUser values('ADMIN01' , 'admin');
insert into AdminUser values('ADMIN02' , 'admin');



#Creating detail table for Student and Professor

create table StudDetails(StudID varchar(10) not null, Firstname varchar(30) not null, Lastname varchar(30) not null, Birthdate date, Phno varchar(10), RollNo int not null, Division char not null, Cname varchar(40) not null, Sem int not null check (Sem>=1 and Sem<=8), AcademicYear int not null check (AcademicYear>=1 and AcademicYear<=4), PhotoUrl varchar(50), Primary Key (StudID));
create table ProfDetails(ProfID varchar(10) not null, Firstname varchar(30) not null, Lastname varchar(30) not null, Birthdate date, Phno varchar(10), PhotoUrl varchar(50), Primary Key (ProfID));

#Inserting values into Student and Professor

#StudDeatils
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD01', 'Omkar', 'Mande', 33, 'B', 'Computer Science', 8, 4);

insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD02', 'Sneha', 'Patil', 42, 'A', 'Electronics Engineering', 6, 3);

insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD03', 'Rohit', 'Kumar', 21, 'C', 'Mechanical Engineering', 2, 1);

insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD04', 'Nidhi', 'Sharma', 55, 'B', 'Civil Engineering', 4, 2);

insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD05', 'Sachin', 'Pawar', 12, 'A', 'Information Technology', 7, 3);

insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD06', 'Amit', 'Singh', 25, 'B', 'Computer Science', 1, 1);

insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD07', 'Priya', 'Rao', 61, 'A', 'Electrical Engineering', 5, 2);

insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD08', 'Saurabh', 'Joshi', 45, 'C', 'Mechanical Engineering', 3, 2);

insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD09', 'Pooja', 'Gupta', 22, 'A', 'Civil Engineering', 6, 3);

insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD10', 'Rahul', 'Shah', 36, 'C', 'Information Technology', 4, 2);

insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD11', 'Megha', 'Chopra', 9, 'B', 'Electrical Engineering', 7, 3);

insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD12', 'Akhil', 'Raj', 30, 'A', 'Computer Science', 2, 1);


#ProfDetails
insert into ProfDetails(ProfID, Firstname, Lastname) values('PROF01', 'Rohini', 'Patil');
insert into ProfDetails(ProfID, Firstname, Lastname) 
values
('PROF02', 'Sachin', 'Desai'),
('PROF03', 'Anita', 'Sharma'),
('PROF04', 'Alok', 'Singh'),
('PROF05', 'Rajiv', 'Kumar'),
('PROF06', 'Neha', 'Gupta'),
('PROF07', 'Prasad', 'Joshi'),
('PROF08', 'Deepak', 'Shinde'),
('PROF09', 'Pooja', 'Shah'),
('PROF10', 'Kunal', 'Chopra'),
('PROF11', 'Anjali', 'Pandey');

#Creating Subject table

create table Subject(SubID int auto_increment, SubName varchar(40) not null, Cname varchar(40) not null, Sem int not null check (Sem>=1 and Sem<=8), AcademicYear int not null check (AcademicYear>=1 and AcademicYear<=4), Primary Key(SubID));

#Inserting into subject

insert into Subject(SubName, Cname, Sem, AcademicYear) values('Distributed Computing', 'Computer Science', 8,4);
insert into Subject(SubName, Cname, Sem, AcademicYear) values('Applied Data Science', 'Computer Science', 8,4);
insert into Subject(SubName, Cname, Sem, AcademicYear) values('Social Media Analytics', 'Computer Science', 8,4);
insert into Subject(SubName, Cname, Sem, AcademicYear) values('Environment Management', 'Computer Science', 8,4);


#Creating Timetable table

create table TimeTable(LecID int auto_increment, Division char not null, AcademicYear int not null check (AcademicYear>=1 and AcademicYear<=4), Sem int not null check (Sem>=1 and Sem<=8), Day varchar(20) not null, StartTime time not null, EndTime time not null, SubID int not null, Foreign Key (SubID) references Subject(SubID), ProfID varchar(10), Primary Key (LecID));

#Inserting into TimeTable

insert into TimeTable(Division, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values('A', 4, 8, 'Tuesday', '11:15:00', '12:15:00', 2,'PROF01');