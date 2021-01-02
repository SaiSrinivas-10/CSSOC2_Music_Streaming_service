CREATE TABLE USERS( name varchar(24) NOT NULL, email_id varchar(104) PRIMARY KEY, password varchar(1024),mobile_no varchar(20) NOT NULL);
CREATE TABLE All_songs(s_no SERIAL, song_name VARCHAR(52),song_path VARCHAR(52),song_id VARCHAR PRIMARY KEY);
CREATE TABLE liked_songs(song VARCHAR(104),email_id VARCHAR(104),song_id VARCHAR,FOREIGN KEY(email_id) REFERENCES USERS(email_id),FOREIGN KEY(song_id) REFERENCES All_songs(song_id));
