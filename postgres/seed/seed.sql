BEGIN TRANSACTION;

INSERT into users (name, email, entries, joined, age, pet) values ('Jessie', 'jessie@gmail.com', 5, '2018-01-01', '26', 'Dog');
INSERT into login (hash, email) values ('$2a$10$WAK21U0LWl7C//jJ.DOB2uPP1DJQh7KUDgasdyQeGzkop2Pzl8W7u', 'jessie@gmail.com');

COMMIT;