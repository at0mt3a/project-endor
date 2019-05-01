insert into items (item_id, item_name, price, category, seller, release_date) values
    ('8fd78897-5b8c-4187-918b-e13418de17ea', 'spam', '2', 'vittles', 'brian', now()),
    ('1f7e1057-01b3-4f6d-8c0c-73d6b314a68f', 'spam-n-eggs', '3', 'vittles', 'brian', now()),
    ('9c8128e4-b7d4-4051-8133-619f762fd1ca', 'spammity spam', '5', 'vittles', 'brian', now()),
    ('bedded8e-2040-4a86-8eef-051cf1be96d4', 'eggs-n-spam', '1', 'vittles', 'brian', now()),
    ('cfcfdad5-b1ea-4666-aab1-1fa71077fe19', 'spam, spam & spam', '2', 'vittles', 'brian', now()),
    ('35c738ad-01f3-46b4-bad3-108bd9f28159', 'eggs', '10', 'vittles', 'brian', now()),
    ('9c32f279-4418-4878-babf-2da295ac5bbe', 'lance', '101', 'accoutrements', 'spamalot', now()),
    ('649c1b98-1e47-467f-9d8c-9de3fefccb71', 'holy hand grenade', '999', 'goods', 'spamalot', now()),
    ('ecd0a045-de50-4669-8939-28aae6a13719', 'holy grail', '0.1', 'goods', 'spamalot', now()),
    ('4fd0d819-db1e-4de5-b445-5a35e4b03a8e', 'holy grail', '0.2', 'goods', 'spamalot', now()),
    ('ccd7917a-585a-4c51-a158-bbaf4b4c108f', 'holy grail', '0.3', 'goods', 'spamalot', now()),
    ('4beef271-5a19-4086-86a4-496c01b2147a', 'beef sandwich', '0.4', 'vittles', 'spamalot', now()),
    ('d3113b39-4a98-4f0b-9588-11146fef1dc4', 'holy grail', '0.5', 'goods', 'spamalot', now()),
    ('b9e6187b-3cda-4d81-bc3a-baae038a9d67', 'holy grail', '0.6', 'goods', 'spamalot', now()),
    ('2cee7461-b1d8-44c7-a646-6458d4e7a9de', 'holy grail', '0.7', 'goods', 'spamalot', now())

   
on conflict do nothing;
