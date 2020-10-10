CREATE TABLE USERRS(name varchar(24) NOT NULL,email_id varchar(24 ) UNIQUE,password varchar(1024),mobile_no varchar(20) NOT NULL);
INSERT INTO USERRS(name,email_id,password,mobile_no) VALUES ('sravani','abc@gmail.com','xxxxxxxxxxx','243253464'),('dssdd','vdfvd','dvddzv','fzsvdf'),('dffvrgr','vgdgrg','fdgr','rfegf'),('sdfrdfr','efedfe','efsfe','efdse');
 ALTER TABLE USERRS ADD id serial;
  SELECT * FROM USERRS;
  UPDATE USERRS SET mobile_no = '9393393' WHERE email_id='vdfvd';
   CREATE TABLE SONGS(song_name varchar(24),song_link varchar(70));
   INSERT INTO SONGS(song_name,song_link) VALUES ('shape of you','sjfszfgrkbgktjhbnjmfxgbk'),('despacito','djfhrsuvhvgjubdfh');
    DELETE FROM SONGS WHERE song_name='shape of you';
     SELECT*FROM SONGS;
