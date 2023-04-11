create database GeoFence;
use GeoFence;

#Creating tables for Student, Professor and Admin Login

create table StudUser(StudID varchar(10) not null, Password varchar(30) not null, Primary Key(StudID));
create table ProfUser(ProfID varchar(10) not null, Password varchar(30) not null, Primary Key(ProfID));
create table AdminUser(AdminID varchar(10) not null, Password varchar(30) not null, Primary Key(AdminID));

#Inserting values in Student, Professor and Admin Login
#StudUser
insert into StudUser values('STUD01' , 'qwerty');
insert into StudUser values('STUD02' , 'qwerty');
insert into StudUser values('STUD03' , 'qwerty');
insert into StudUser values('STUD04' , 'qwerty');
insert into StudUser values('STUD05' , 'qwerty');
insert into StudUser values('STUD06' , 'qwerty');
insert into StudUser values('STUD07' , 'qwerty');
insert into StudUser values('STUD08' , 'qwerty');
insert into StudUser values('STUD09' , 'qwerty');
insert into StudUser values('STUD10' , 'qwerty');
insert into StudUser values('STUD11' , 'qwerty');
insert into StudUser values('STUD12' , 'qwerty');
insert into StudUser values('STUD13' , 'qwerty');
insert into StudUser values('STUD14' , 'qwerty');
insert into StudUser values('STUD15' , 'qwerty');
insert into StudUser values('STUD16' , 'qwerty');
insert into StudUser values('STUD17' , 'qwerty');
insert into StudUser values('STUD18' , 'qwerty');
insert into StudUser values('STUD19' , 'qwerty');
insert into StudUser values('STUD20' , 'qwerty');
insert into StudUser values('STUD21' , 'qwerty');
insert into StudUser values('STUD22' , 'qwerty');
insert into StudUser values('STUD23' , 'qwerty');
insert into StudUser values('STUD24' , 'qwerty');
insert into StudUser values('STUD25' , 'qwerty');
insert into StudUser values('STUD26' , 'qwerty');
insert into StudUser values('STUD27' , 'qwerty');
insert into StudUser values('STUD28' , 'qwerty');
insert into StudUser values('STUD29' , 'qwerty');
insert into StudUser values('STUD30' , 'qwerty');
insert into StudUser values('STUD31' , 'qwerty');
insert into StudUser values('STUD32' , 'qwerty');
insert into StudUser values('STUD33' , 'qwerty');
insert into StudUser values('STUD34' , 'qwerty');
insert into StudUser values('STUD35' , 'qwerty');
insert into StudUser values('STUD36' , 'qwerty');
insert into StudUser values('STUD37' , 'qwerty');
insert into StudUser values('STUD38' , 'qwerty');
insert into StudUser values('STUD39' , 'qwerty');
insert into StudUser values('STUD40' , 'qwerty');
insert into StudUser values('STUD41' , 'qwerty');
insert into StudUser values('STUD42' , 'qwerty');
insert into StudUser values('STUD43' , 'qwerty');
insert into StudUser values('STUD44' , 'qwerty');
insert into StudUser values('STUD45' , 'qwerty');
insert into StudUser values('STUD46' , 'qwerty');
insert into StudUser values('STUD47' , 'qwerty');
insert into StudUser values('STUD48' , 'qwerty');
insert into StudUser values('STUD49' , 'qwerty');
insert into StudUser values('STUD50' , 'qwerty');

#ProfUser
insert into ProfUser values('PROF01' , 'terna');
insert into ProfUser values('PROF02' , 'terna');
insert into ProfUser values('PROF03' , 'terna');
insert into ProfUser values('PROF04' , 'terna');
insert into ProfUser values('PROF05' , 'terna');
insert into ProfUser values('PROF06' , 'terna');
insert into ProfUser values('PROF07' , 'terna');
insert into ProfUser values('PROF08' , 'terna');
insert into ProfUser values('PROF09' , 'terna');
insert into ProfUser values('PROF10' , 'terna');

#AdminUser
insert into AdminUser values('ADMIN01' , 'admin');



#Creating detail table for Student and Professor

create table StudDetails(StudID varchar(10) not null, Firstname varchar(30) not null, Lastname varchar(30) not null, Birthdate date, Phno varchar(10), RollNo int not null, Division char not null, Cname varchar(40) not null, Sem int not null check (Sem>=1 and Sem<=8), AcademicYear int not null check (AcademicYear>=1 and AcademicYear<=4), PhotoUrl varchar(50), Primary Key (StudID));
create table ProfDetails(ProfID varchar(10) not null, Firstname varchar(30) not null, Lastname varchar(30) not null, Birthdate date, Phno varchar(10), PhotoUrl varchar(50), Primary Key (ProfID));

#Inserting values into Student and Professor

#StudDeatils
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD01', 'Omkar', 'Mande', 1, 'A', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD02', 'Advaith', 'Issac', 2, 'A', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD03', 'Sharma', 'Sha', 3, 'A', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD04', 'Haiya', 'Loyal', 4, 'A', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD05', 'Nitya', 'Kara', 5, 'A', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD06', 'Mahendra', 'Banerjee', 6, 'A', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD07', 'Akshi', 'Padmanabhan', 7, 'A', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD08', 'Trishna', 'Ramaswamy', 8, 'A', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD09', 'Devadas', 'Sanghvi', 9, 'A', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD10', 'Sarthak', 'Om', 10, 'A', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD11', 'Tejas', 'Deshmukh', 11, 'A', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD12', 'Nilam', 'Konda', 12, 'A', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD13', 'Ritu', 'Mammen', 13, 'A', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD14', 'Anima', 'Contractor', 14, 'A', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD15', 'Aruna', 'Chadha', 15, 'A', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD16', 'Nishant', 'Patil', 1, 'B', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD17', 'Raghav', 'Dua', 2, 'B', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD18', 'Rajesh', 'Kumar', 3, 'B', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD19', 'Aashita', 'Shetty', 4, 'B', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD20', 'Viaan', 'Lala', 5, 'B', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD21', 'Ayush', 'Koshy', 6, 'B', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD22', 'Lila', 'Magar', 7, 'B', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD23', 'Kiran', 'Bahl', 8, 'B', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD24', 'Bhuvana', 'Nair', 9, 'B', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD25', 'Swarna', 'Luthra', 10, 'B', 'Computer Science', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD26', 'Yash', 'Vishe', 1, 'A', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD27', 'Jagan', 'Cherian', 2, 'A', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD28', 'Vasu', 'Ravel', 3, 'A', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD29', 'Lakshmi', 'Raju', 4, 'A', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD30', 'Vaneet', 'Hegde', 5, 'A', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD31', 'Sarita', 'Nori', 6, 'A', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD32', 'Roshan', 'Shan', 7, 'A', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD33', 'Hari', 'Sura', 8, 'A', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD34', 'Haimi', 'Ravi', 9, 'A', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD35', 'Mahendra', 'Narayanan', 10, 'A', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD36', 'Vipin', 'Reddy', 11, 'A', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD37', 'Sunil', 'Bali', 12, 'A', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD38', 'Inika', 'Khosla', 13, 'A', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD39', 'Khosla', 'Krishnamurthy', 14, 'A', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD40', 'Maya', 'Madan', 15, 'A', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD41', 'Mihir', 'Bachhav', 1, 'B', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD42', 'Ankit', 'Bhatti', 2, 'B', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD43', 'Mohini', 'Sane', 3, 'B', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD44', 'Arjun', 'Chad', 4, 'B', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD45', 'Rakesh', 'Desai', 5, 'B', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD46', 'Sanjit', 'Raghavan', 6, 'B', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD47', 'Nirmal', 'D’Alia', 7, 'B', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD48', 'Mina', 'Mehrotra', 8, 'B', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD49', 'Sushila', 'Magar', 9, 'B', 'Information Technology', 8, 4);
insert into StudDetails(StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear) values('STUD50', 'Shanaya', 'Deshpande', 10, 'B', 'Information Technology', 8, 4);

#ProfDetails
insert into ProfDetails(ProfID, Firstname, Lastname) values('PROF01', 'Rohini', 'Patil');
insert into ProfDetails(ProfID, Firstname, Lastname) values('PROF02', 'Pravin', 'Hole');
insert into ProfDetails(ProfID, Firstname, Lastname) values('PROF03', 'Nikola', 'Tesla');
insert into ProfDetails(ProfID, Firstname, Lastname) values('PROF04', 'Robert', 'Hooke');
insert into ProfDetails(ProfID, Firstname, Lastname) values('PROF05', 'Galileo', 'Galilei');
insert into ProfDetails(ProfID, Firstname, Lastname) values('PROF06', 'Marie', 'Curie');
insert into ProfDetails(ProfID, Firstname, Lastname) values('PROF07', 'Charles', 'Darwin');
insert into ProfDetails(ProfID, Firstname, Lastname) values('PROF08', 'Heinrich', 'Hertz');
insert into ProfDetails(ProfID, Firstname, Lastname) values('PROF09', 'Niels', 'Bohr');
insert into ProfDetails(ProfID, Firstname, Lastname) values('PROF10', 'C.V.', 'Raman');


#Creating Subject table

create table Subject(SubID int auto_increment, SubName varchar(40) not null, Cname varchar(40) not null, Sem int not null check (Sem>=1 and Sem<=8), AcademicYear int not null check (AcademicYear>=1 and AcademicYear<=4), Primary Key(SubID));

#Inserting into subject

insert into Subject(SubName, Cname, Sem, AcademicYear) values('Distributed Computing', 'Computer Science', 8,4);
insert into Subject(SubName, Cname, Sem, AcademicYear) values('Applied Data Science', 'Computer Science', 8,4);
insert into Subject(SubName, Cname, Sem, AcademicYear) values('Social Media Analytics', 'Computer Science', 8,4);
insert into Subject(SubName, Cname, Sem, AcademicYear) values('Environment Management', 'Computer Science', 8,4);
insert into Subject(SubName, Cname, Sem, AcademicYear) values('Big Data Analytics', 'Information Technology', 8,4);
insert into Subject(SubName, Cname, Sem, AcademicYear) values('Internet of Everything', 'Information Technology', 8,4);
insert into Subject(SubName, Cname, Sem, AcademicYear) values('Robotics', 'Information Technology', 8,4);
insert into Subject(SubName, Cname, Sem, AcademicYear) values('Project Management', 'Information Technology', 8,4);


#Creating Timetable table

create table TimeTable(LecID int auto_increment,RoomNo int not null,Division char not null, Cname varchar(40) not null, AcademicYear int not null check (AcademicYear>=1 and AcademicYear<=4), Sem int not null check (Sem>=1 and Sem<=8), Day varchar(20) not null, StartTime time not null, EndTime time not null, SubID int not null, Foreign Key (SubID) references Subject(SubID), ProfID varchar(10), Primary Key (LecID));

#Inserting into TimeTable
#COMP A
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(328,'A', 'Computer Science', 4, 8, 'Monday', '11:15:00', '12:15:00', 1,'PROF01');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(328,'A', 'Computer Science', 4, 8, 'Monday', '12:15:00', '13:15:00', 2,'PROF02');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(328,'A', 'Computer Science', 4, 8, 'Monday', '13:15:00', '14:15:00', 3,'PROF03');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(328,'A', 'Computer Science', 4, 8, 'Tuesday', '11:15:00', '12:15:00', 4,'PROF04');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(328,'A', 'Computer Science', 4, 8, 'Tuesday', '12:15:00', '13:15:00', 1,'PROF01');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(328,'A', 'Computer Science', 4, 8, 'Tuesday', '13:15:00', '14:15:00', 2,'PROF02');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(328,'A', 'Computer Science', 4, 8, 'Wednesday', '11:15:00', '12:15:00', 3,'PROF03');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(328,'A', 'Computer Science', 4, 8, 'Wednesday', '12:15:00', '13:15:00', 4,'PROF04');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(328,'A', 'Computer Science', 4, 8, 'Wednesday', '13:15:00', '14:15:00', 1,'PROF01');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(328,'A', 'Computer Science', 4, 8, 'Thursday', '11:15:00', '12:15:00', 2,'PROF02');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(328,'A', 'Computer Science', 4, 8, 'Thursday', '12:15:00', '13:15:00', 3,'PROF03');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(328,'A', 'Computer Science', 4, 8, 'Thursday', '13:15:00', '14:15:00', 4,'PROF04');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(328,'A', 'Computer Science', 4, 8, 'Friday', '11:15:00', '12:15:00', 1,'PROF01');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(328,'A', 'Computer Science', 4, 8, 'Friday', '12:15:00', '13:15:00', 2,'PROF02');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(328,'A', 'Computer Science', 4, 8, 'Friday', '13:15:00', '14:15:00', 3,'PROF03');

#COMP B
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(426,'B', 'Computer Science', 4, 8, 'Monday', '11:15:00', '12:15:00', 2,'PROF02');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(426,'B', 'Computer Science', 4, 8, 'Monday', '12:15:00', '13:15:00', 3,'PROF03');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(426,'B', 'Computer Science', 4, 8, 'Monday', '13:15:00', '14:15:00', 4,'PROF04');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(426,'B', 'Computer Science', 4, 8, 'Tuesday', '11:15:00', '12:15:00', 1,'PROF01');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(426,'B', 'Computer Science', 4, 8, 'Tuesday', '12:15:00', '13:15:00', 2,'PROF02');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(426,'B', 'Computer Science', 4, 8, 'Tuesday', '13:15:00', '14:15:00', 3,'PROF03');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(426,'B', 'Computer Science', 4, 8, 'Wednesday', '11:15:00', '12:15:00', 4,'PROF04');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(426,'B', 'Computer Science', 4, 8, 'Wednesday', '12:15:00', '13:15:00', 1,'PROF01');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(426,'B', 'Computer Science', 4, 8, 'Wednesday', '13:15:00', '14:15:00', 2,'PROF02');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(426,'B', 'Computer Science', 4, 8, 'Thursday', '11:15:00', '12:15:00', 3,'PROF03');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(426,'B', 'Computer Science', 4, 8, 'Thursday', '12:15:00', '13:15:00', 4,'PROF04');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(426,'B', 'Computer Science', 4, 8, 'Thursday', '13:15:00', '14:15:00', 1,'PROF01');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(426,'B', 'Computer Science', 4, 8, 'Friday', '11:15:00', '12:15:00', 2,'PROF02');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(426,'B', 'Computer Science', 4, 8, 'Friday', '12:15:00', '13:15:00', 3,'PROF03');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(426,'B', 'Computer Science', 4, 8, 'Friday', '13:15:00', '14:15:00', 4,'PROF04');



#IT A
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(103,'A', 'Information Technology', 4, 8, 'Monday', '11:15:00', '12:15:00', 5,'PROF05');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(103,'A', 'Information Technology', 4, 8, 'Monday', '12:15:00', '13:15:00', 6,'PROF06');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(103,'A', 'Information Technology', 4, 8, 'Monday', '13:15:00', '14:15:00', 7,'PROF07');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(103,'A', 'Information Technology', 4, 8, 'Tuesday', '11:15:00', '12:15:00', 8,'PROF08');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(103,'A', 'Information Technology', 4, 8, 'Tuesday', '12:15:00', '13:15:00', 5,'PROF05');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(103,'A', 'Information Technology', 4, 8, 'Tuesday', '13:15:00', '14:15:00', 6,'PROF06');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(103,'A', 'Information Technology', 4, 8, 'Wednesday', '11:15:00', '12:15:00', 7,'PROF07');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(103,'A', 'Information Technology', 4, 8, 'Wednesday', '12:15:00', '13:15:00', 8,'PROF08');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(103,'A', 'Information Technology', 4, 8, 'Wednesday', '13:15:00', '14:15:00', 5,'PROF05');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(103,'A', 'Information Technology', 4, 8, 'Thursday', '11:15:00', '12:15:00', 6,'PROF06');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(103,'A', 'Information Technology', 4, 8, 'Thursday', '12:15:00', '13:15:00', 7,'PROF07');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(103,'A', 'Information Technology', 4, 8, 'Thursday', '13:15:00', '14:15:00', 8,'PROF08');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(103,'A', 'Information Technology', 4, 8, 'Friday', '11:15:00', '12:15:00', 5,'PROF05');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(103,'A', 'Information Technology', 4, 8, 'Friday', '12:15:00', '13:15:00', 6,'PROF06');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(103,'A', 'Information Technology', 4, 8, 'Friday', '13:15:00', '14:15:00', 7,'PROF07');

#IT B
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(104,'B', 'Information Technology', 4, 8, 'Monday', '11:15:00', '12:15:00', 6,'PROF06');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(104,'B', 'Information Technology', 4, 8, 'Monday', '12:15:00', '13:15:00', 7,'PROF07');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(104,'B', 'Information Technology', 4, 8, 'Monday', '13:15:00', '14:15:00', 8,'PROF08');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(104,'B', 'Information Technology', 4, 8, 'Tuesday', '11:15:00', '12:15:00', 5,'PROF05');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(104,'B', 'Information Technology', 4, 8, 'Tuesday', '12:15:00', '13:15:00', 6,'PROF06');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(104,'B', 'Information Technology', 4, 8, 'Tuesday', '13:15:00', '14:15:00', 7,'PROF07');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(104,'B', 'Information Technology', 4, 8, 'Wednesday', '11:15:00', '12:15:00', 8,'PROF08');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(104,'B', 'Information Technology', 4, 8, 'Wednesday', '12:15:00', '13:15:00', 5,'PROF05');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(104,'B', 'Information Technology', 4, 8, 'Wednesday', '13:15:00', '14:15:00', 6,'PROF06');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(104,'B', 'Information Technology', 4, 8, 'Thursday', '11:15:00', '12:15:00', 7,'PROF07');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(104,'B', 'Information Technology', 4, 8, 'Thursday', '12:15:00', '13:15:00', 8,'PROF08');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(104,'B', 'Information Technology', 4, 8, 'Thursday', '13:15:00', '14:15:00', 5,'PROF05');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(104,'B', 'Information Technology', 4, 8, 'Friday', '11:15:00', '12:15:00', 6,'PROF06');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(104,'B', 'Information Technology', 4, 8, 'Friday', '12:15:00', '13:15:00', 7,'PROF07');
insert into TimeTable(RoomNo,Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID, ProfID) values(104,'B', 'Information Technology', 4, 8, 'Friday', '13:15:00', '14:15:00', 8,'PROF08');










