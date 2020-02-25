-- CREATE DATABASE restaurant;

CREATE TABLE restaurant (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    address VARCHAR,
    category TEXT
);

CREATE TABLE reviewer (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    email VARCHAR, 
    karma INT, 
    CHECK(karma >= 0 AND karma <=7)
);

CREATE TABLE review (
    id SERIAL PRIMARY KEY, 
    reviewer_id INT,
    FOREIGN KEY (reviewer_id) REFERENCES reviewer(id), 
    stars INT, 
    CHECK(stars > 0 AND stars <= 5),
    review VARCHAR, 
    restaurant_id INT, 
    FOREIGN KEY (restaurant_id) REFERENCES restaurant(id)
);