create database MOVIESdb;
use MOVIESdb;

create table movies(
	id int unsigned primary key not null auto_increment,
    title varchar(255) not null,
    director varchar(255) not null,
    genre varchar(255) not null
);

insert into movies(title, director, genre)
values("Jurassic Park","Steven Spielberg","Sci-fi"),
("The Shining", "Stanley Kubrick", "Thriller"),
("The Hangover", "Todd Phillips", "Comedy");

select * from movies;
