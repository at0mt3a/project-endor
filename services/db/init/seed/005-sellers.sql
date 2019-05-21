insert into sellers (seller_id, seller_name, seller_description, seller_rating) values
    ('037b4897-8a2a-46b6-8ed7-47a555bb40f2', 'Spamalot', 'I seek the Holy Grail.', '5'),
    ('17832b68-e91e-45f4-9a92-042c69b1b9c5', 'Brian', 'I am seriously famished.', 9001)
on conflict do nothing;
