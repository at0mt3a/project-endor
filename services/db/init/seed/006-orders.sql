insert into orders (order_id, purchaser_id, seller_id, order_date) values
    ('d61f9e68-75f2-11e9-8f9e-2a86e4085a59', '17832b68-e91e-45f4-9a92-042c69b1b9c5', '037b4897-8a2a-46b6-8ed7-47a555bb40f2', now() - INTERVAL '1 Day'),
    ('d61fa110-75f2-11e9-8f9e-2a86e4085a59', '17832b68-e91e-45f4-9a92-042c69b1b9c5', '037b4897-8a2a-46b6-8ed7-47a555bb40f2', now() - INTERVAL '3 Days'),
    ('d61fa26e-75f2-11e9-8f9e-2a86e4085a59', '17832b68-e91e-45f4-9a92-042c69b1b9c5', '037b4897-8a2a-46b6-8ed7-47a555bb40f2', now() - INTERVAL '101 Days'),
    ('d61fa3a4-75f2-11e9-8f9e-2a86e4085a59', '037b4897-8a2a-46b6-8ed7-47a555bb40f2', '17832b68-e91e-45f4-9a92-042c69b1b9c5', now() - INTERVAL '300 Days')
on conflict do nothing;