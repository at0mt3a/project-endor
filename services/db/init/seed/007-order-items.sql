insert into order_items (order_id, item_id, quantity) values
    ('d61f9e68-75f2-11e9-8f9e-2a86e4085a59', '8fd78897-5b8c-4187-918b-e13418de17ea', 2),
    ('d61f9e68-75f2-11e9-8f9e-2a86e4085a59', '9c8128e4-b7d4-4051-8133-619f762fd1ca', 10),
    ('d61f9e68-75f2-11e9-8f9e-2a86e4085a59', 'cfcfdad5-b1ea-4666-aab1-1fa71077fe19', 1),
    ('d61fa110-75f2-11e9-8f9e-2a86e4085a59', '4beef271-5a19-4086-86a4-496c01b2147a', 2),
    ('d61fa26e-75f2-11e9-8f9e-2a86e4085a59', '1f7e1057-01b3-4f6d-8c0c-73d6b314a68f', 1),
    ('d61fa26e-75f2-11e9-8f9e-2a86e4085a59', 'bedded8e-2040-4a86-8eef-051cf1be96d4', 2),
    ('d61fa26e-75f2-11e9-8f9e-2a86e4085a59', '35c738ad-01f3-46b4-bad3-108bd9f28159', 5),
    ('d61fa3a4-75f2-11e9-8f9e-2a86e4085a59', '2cee7461-b1d8-44c7-a646-6458d4e7a9de', 9001)
on conflict do nothing;
