-- create users table 
CREATE TABLE users (
   id INTEGER PRIMARY KEY ,
   first_name vARCHAR NOT NULL,
   last_name VARCHAR NOT NULL,
   email VARCHAR,
   password VARCHAR,
   username VARCHAR NOT NULL,
   is_removed INTEGER NOT NULL DEFAULT FALSE, 
   created_at INTEGER NOT NULL
);

-- create threads table
CREATE TABLE threads (
   id INTEGER PRIMARY KEY,
   title VARCHAR NOT NULL,
   url VARCHAR NOT NULL UNIQUE, -- url must be unique for each thread
   user_id INTEGER NOT NULL,
   is_removed INTEGER NOT NULL DEFAULT FALSE,
   created_at INTEGER NOT NULL,
   FOREIGN KEY(user_id) REFERENCES users (id)
);

-- create comments table


-- create likes table
