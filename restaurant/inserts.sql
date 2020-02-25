INSERT INTO restaurant(name, address, category)
VALUES 
    ('Farm Burger', '410B W Ponce de Leon Ave, Decatur, GA 30030', 'burger'),
    ('Fellini''s Pizza', '333 Commerce Dr, Decatur, GA 30030', 'pizza'),
    ('Twain''s Brewpub',  '211 E Trinity Pl, Decatur, GA 30030', 'brewpub'), 
    ('Grindhouse Killer Burger', '433 N McDonough St, Decatur, GA 30030', 'burger'), 
    ('Wreaking Bar Brewpub', '292 Moreland Ave NE, Atlanta, GA 30307', 'brewpub');

INSERT INTO reviewer(name, email, karma)
VALUES
    ('Jon', 'jon@elliott.com', 7),
    ('Matt', 'matt@howell.com', 6),
    ('Edward', 'ed@smith.com', 3), 
    ('Trina', 'trina@jang.com', 5);

INSERT INTO review(reviewer_id, stars, review, restaurant_id)
VALUES
    (1, 5, 'It''s great', 1),
    (2, 4, 'It''s OK', 3),
    (4, 1, 'Why outside?', 3),
    (1, 5, 'I like beer!', 5),
    (2, 3, 'Would be good if I liked pizza', 2),
    (1, 5, 'Woo, Burgers!', 4);

    ALTER TABLE review 
        ADD COLUMN title VARCHAR;

    INSERT INTO review(title)
    VALUES
        ('Great!'),
        ('OK'),
        ('Why?'),
        ('Beer!'),
        ('Woo');