-- SELECT name, review FROM review 
--     INNER JOIN restaurant ON review.restaurant_id = restaurant.id 
--     WHERE restaurant.name = 'Farm Burger';

-- SELECT name, review FROM review INNER JOIN reviewer ON review.reviewer_id = reviewer.id
    -- WHERE reviewer.name = 'Jon';

SELECT name, count(stars) FROM review INNER JOIN restaurant ON review.restaurant_id = restaurant.id
    GROUP BY restaurant.name;

SELECT review, restaurant.name, reviewer.name from review INNER JOIN restaurant ON 
    review.restaurant_id = restaurant.id INNER JOIN reviewer ON review.reviewer_id = reviewer.id;

SELECT name, AVG(stars) FROM review RIGHT OUTER JOIN reviewer on reviewer.id = review.reviewer_id 
    GROUP BY name;