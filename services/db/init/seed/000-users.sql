insert into users (user_handle, username, first_name, middle_name, last_name, suffix, email, user_type, joined_date) values
    ('037b4897-8a2a-46b6-8ed7-47a555bb40f2', 'Spamalot', 'Ana', 'D', 'Held', '', 'user@gmail.com', 'gold', now()),
    ('17832b68-e91e-45f4-9a92-042c69b1b9c5', 'Brian', 'Ben', 'B', 'Benson', '', 'admin@gmail.com', 'admin', now()),
    ('06fad102-1a73-41ad-ba62-7bbd4be3278f', 'NPC 1', 'John', 'Z', 'Doe', 'Jr.', 'npc1@gmail.com', 'standard', now()),
    ('8b5213b1-4c41-499e-a1db-93da54713dbb', 'NPC 2', 'David', 'Q', 'Hawkins', 'III', 'npc2@gmail.com', 'standard', now()),
    ('b9cdffec-ad82-4855-8cad-5315c3a06610', 'NPC 3', 'Shara', 'M', 'Jerkin', 'Esq.', 'npc3@gmail.com', 'standard', now())
on conflict do nothing;