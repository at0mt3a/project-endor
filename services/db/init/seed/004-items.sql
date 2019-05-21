insert into items (item_id, item_name, price, category, item_description, seller, release_date) values
    ('8fd78897-5b8c-4187-918b-e13418de17ea', 'Spam', '2', 'Vittles', 'Savory Protein', 'Spamalot', now()),
    ('1f7e1057-01b3-4f6d-8c0c-73d6b314a68f', 'Spam-n-Eggs', '3', 'Vittles', 'Mixed Proteins', 'Spamalot', now()),
    ('9c8128e4-b7d4-4051-8133-619f762fd1ca', 'Spammity Spam', '5', 'Vittles', 'Extra-Excellent Nutrition', 'Spamalot', now()),
    ('bedded8e-2040-4a86-8eef-051cf1be96d4', 'Eggs-n-Spam', '1', 'Vittles', 'A Heterogenous Mixture', 'Spamalot', now()),
    ('cfcfdad5-b1ea-4666-aab1-1fa71077fe19', 'Spam, Spam & Spam', '2', 'Vittles', 'A King`s Portion', 'Spamalot', now()),
    ('35c738ad-01f3-46b4-bad3-108bd9f28159', 'Eggs', '10', 'Vittles', 'A Homogenous Mixture', 'Spamalot', now()),
    ('9c32f279-4418-4878-babf-2da295ac5bbe', 'Lance', '101', 'Accoutrements', 'Strange women lying in ponds distributing swords is no basis for a system of government.', 'Brian', now()),
    ('649c1b98-1e47-467f-9d8c-9de3fefccb71', 'Holy Hand grenade', '999', 'Goods', 'Three is the number you shall count unto.', 'Brian', now()),
    ('ecd0a045-de50-4669-8939-28aae6a13719', 'Holy Grail', '0.1', 'Goods', 'A Holy Grail', 'Brian', now()),
    ('4fd0d819-db1e-4de5-b445-5a35e4b03a8e', 'Holy Grail', '0.2', 'Goods', 'Yon Holy Grail', 'Brian', now()),
    ('ccd7917a-585a-4c51-a158-bbaf4b4c108f', 'Holy Grail', '0.3', 'Goods', 'The Holy Grail', 'Brian', now()),
    ('4beef271-5a19-4086-86a4-496c01b2147a', 'Beef Sandwich', '0.4', 'Vittles', 'I fart in your general direction.', 'Spamalot', now()),
    ('d3113b39-4a98-4f0b-9588-11146fef1dc4', 'Holy Grail', '0.5', 'Goods', 'The One Holy Grail', 'Brian', now()),
    ('b9e6187b-3cda-4d81-bc3a-baae038a9d67', 'Holy Grail', '0.6', 'Goods', 'An Holy Grail', 'Brian', now()),
    ('2cee7461-b1d8-44c7-a646-6458d4e7a9de', 'Holy Grail', '0.7', 'Goods', 'No-one expects the Spanish Inquisition!', 'Brian', now())

   
on conflict do nothing;
