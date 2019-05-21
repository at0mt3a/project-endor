insert into passhash (user_handle, passhash, mod_date) values
    ('037b4897-8a2a-46b6-8ed7-47a555bb40f2', '$2a$10$RNki7aWKS6386IIR9PyFpOrY7ljeVweyD3H5HejDj9tHbR1.yjUY.',  now()),
    ('06fad102-1a73-41ad-ba62-7bbd4be3278f', '$2a$10$RNki7aWKS6386IIR9PyFpOrY7ljeVweyD3H5HejDj9tHbR1.yjUY.',  now()),
    ('037b4897-8a2a-46b6-8ed7-47a555bb40f2', '$2a$10$RNki7aWKS6386IIR9PyFpOrY7ljeVweyD3H5HejDj9tHbR1.yjUY.',  now()),
    ('8b5213b1-4c41-499e-a1db-93da54713dbb', '$2a$10$RNki7aWKS6386IIR9PyFpOrY7ljeVweyD3H5HejDj9tHbR1.yjUY.',  now()),
    ('b9cdffec-ad82-4855-8cad-5315c3a06610', '$2a$10$RNki7aWKS6386IIR9PyFpOrY7ljeVweyD3H5HejDj9tHbR1.yjUY.',  now()),
    ('17832b68-e91e-45f4-9a92-042c69b1b9c5', '$2a$10$RNki7aWKS6386IIR9PyFpOrY7ljeVweyD3H5HejDj9tHbR1.yjUY.',  now())
on conflict do nothing;
