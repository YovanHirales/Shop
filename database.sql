CREATE DATABASE jwtauth;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

//fake user

INSERT INTO users (user_name, user_email, user_password) VALUES ('Yovan', 'yovanhirales@gmail.com', 'baja0277');