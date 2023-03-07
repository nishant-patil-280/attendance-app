create database Attendance_DB;
use Attendance_DB;


#create table course(CourseID int auto_increment, Division char not null, CName varchar(30) not null, Primary Key(CourseID));

#Creating appuser table
create table appuser(EnrollID varchar(12), Firstname varchar(30) not null, Lastname varchar(30) not null, Birthdate date, Phno varchar(10), Password varchar(30) not null, Primary Key (EnrollID));

#Inserting Values for appuser table

insert into appuser(EnrollID, Firstname, Lastname, Password) values('STUD01', 'Omkar', 'Mande', 'qwerty');
insert into appuser(EnrollID, Firstname, Lastname, Password) values('STUD02', 'Nishant', 'Patil', 'admin');
insert into appuser(EnrollID, Firstname, Lastname, Password) values('STUD03', 'Yash', 'Vishe', 'qwerty');
insert into appuser(EnrollID, Firstname, Lastname, Password) values('STUD04', 'Mihir', 'Bachhav', 'qwerty');
insert into appuser(EnrollID, Firstname, Lastname, Password) values('STUD05', 'Yash', 'Shrivastav', 'qwerty');
insert into appuser(EnrollID, Firstname, Lastname, Password) values('STUD06', 'Suyash', 'Ardhapure', 'qwerty');
insert into appuser(EnrollID, Firstname, Lastname, Password) values('STUD07', 'Abhijeet', 'Zagade', 'qwerty');
insert into appuser(EnrollID, Firstname, Lastname, Password) values('STUD08', 'Prashant', 'Chauhan', 'qwerty');
insert into appuser(EnrollID, Firstname, Lastname, Password) values('STUD09', 'Denish', 'Sharma', 'qwerty');
insert into appuser(EnrollID, Firstname, Lastname, Password) values('STUD10', 'Kshitij', 'Dumbre', 'qwerty');
insert into appuser(EnrollID, Firstname, Lastname, Password) values('PROF01', 'Rohini', 'Patil', 'terna');
insert into appuser(EnrollID, Firstname, Lastname, Password) values('PROF02', 'Shaveta', 'Malik', 'terna');
insert into appuser(EnrollID, Firstname, Lastname, Password) values('PROF03', 'Dnyaneshwar', 'Bavkar', 'terna');
insert into appuser(EnrollID, Firstname, Lastname, Password) values('PROF04', 'Sambhaji', 'Shirsat', 'terna');
insert into appuser(EnrollID, Firstname, Lastname, Password) values('PROF05', 'T.', 'Keerthana', 'terna');


#Creating Subject table

create table subject(SubID int auto_increment, SubName varchar(40) not null, Cname varchar(40) not null, Sem int not null check (Sem>=1 and Sem<=8), AcademicYear int not null check (AcademicYear>=1 and AcademicYear<=4), Primary Key(SubID));

#Inserting values into subject

insert into subject(SubName, Cname, Sem, AcademicYear) values('Distributed Computing', 'Computer Science', 8,4);
insert into subject(SubName, Cname, Sem, AcademicYear) values('Applied Data Science', 'Computer Science', 8,4);
insert into subject(SubName, Cname, Sem, AcademicYear) values('Social Media Analytics', 'Computer Science', 8,4);
insert into subject(SubName, Cname, Sem, AcademicYear) values('Environment Management', 'Computer Science', 8,4);

#Creating Student table
create table student(StudID varchar(10), RollNo int not null, Division char not null, Cname varchar(40) not null, Foreign Key (StudID) references appuser(EnrollID) on delete cascade, Sem int not null check (Sem>=1 and Sem<=8), AcademicYear int not null check (AcademicYear>=1 and AcademicYear<=4));

#Inserting values into student

insert into student values('STUD01', 1, 'A', 'Computer Science', 8, 4);
insert into student values('STUD02', 2, 'A', 'Computer Science', 8, 4);
insert into student values('STUD03', 3, 'A', 'Computer Science', 8, 4);
insert into student values('STUD04', 4, 'A', 'Computer Science', 8, 4);
insert into student values('STUD05', 1, 'B', 'Computer Science', 8, 4);
insert into student values('STUD06', 2, 'B', 'Computer Science', 8, 4);
insert into student values('STUD07', 3, 'B', 'Computer Science', 8, 4);
insert into student values('STUD08', 4, 'B', 'Computer Science', 8, 4);
insert into student values('STUD09', 5, 'B', 'Computer Science', 8, 4);
insert into student values('STUD10', 6, 'B', 'Computer Science', 8, 4);


#create table professor(ProfID varchar(10), Foreign Key (ProfID) references appuser(EnrollID), SubID int not null, Foreign Key (SubID) references subject(SubID), Division char not null);



#Creating lecture table
create table lectures(Division char not null, AcademicYear int not null check (AcademicYear>=1 and AcademicYear<=4), Sem int not null check (Sem>=1 and Sem<=8), Day varchar(20) not null, LectureTime time not null, SubID int not null, Foreign Key (SubID) references subject(SubID), ProfID varchar(10));

#Inserting values in lecture

insert into lectures values('A', 4, 8, 'Tuesday', '11:15:00', 2,'PROF01');
insert into lectures values('A', 4, 8, 'Tuesday', '12:15:00', 3,'PROF04');
insert into lectures values('A', 4, 8, 'Wednesday', '11:15:00', 1,'PROF05');
insert into lectures values('A', 4, 8, 'Wednesday', '12:15:00', 3,'PROF04');
insert into lectures values('A', 4, 8, 'Thursday', '11:15:00', 2,'PROF01');
insert into lectures values('A', 4, 8, 'Thursday', '12:15:00', 3,'PROF04');
insert into lectures values('A', 4, 8, 'Friday', '11:15:00', 1,'PROF05');
insert into lectures values('A', 4, 8, 'Friday', '12:15:00', 4,'PROF04');
insert into lectures values('B', 4, 8, 'Monday', '11:15:00', 1,'PROF01');
insert into lectures values('B', 4, 8, 'Monday', '12:15:00', 1,'PROF01');
insert into lectures values('B', 4, 8, 'Wednesday', '11:15:00', 1,'PROF01');
insert into lectures values('B', 4, 8, 'Wednesday', '12:15:00', 2,'PROF02');
insert into lectures values('B', 4, 8, 'Thursday', '11:15:00', 3,'PROF03');
insert into lectures values('B', 4, 8, 'Thursday', '12:15:00', 2,'PROF02');
insert into lectures values('B', 4, 8, 'Friday', '11:15:00', 4,'PROF04');
insert into lectures values('B', 4, 8, 'Friday', '12:15:00', 3,'PROF03');

