insert into carts (user_id, item_id, active, quantity) values
    ('037b4897-8a2a-46b6-8ed7-47a555bb40f2', '9c32f279-4418-4878-babf-2da295ac5bbe', true, 10),
    ('037b4897-8a2a-46b6-8ed7-47a555bb40f2', '649c1b98-1e47-467f-9d8c-9de3fefccb71', true, 1),
    ('17832b68-e91e-45f4-9a92-042c69b1b9c5', '35c738ad-01f3-46b4-bad3-108bd9f28159', false, 2),
    ('17832b68-e91e-45f4-9a92-042c69b1b9c5', '4beef271-5a19-4086-86a4-496c01b2147a', true, 1)
on conflict do nothing;