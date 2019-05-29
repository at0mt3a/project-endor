insert into item_images (item_id, img_url) values
    ('8fd78897-5b8c-4187-918b-e13418de17ea', '/images/spam1.png'),
    ('8fd78897-5b8c-4187-918b-e13418de17ea', '/images/spam2.png'),
    ('8fd78897-5b8c-4187-918b-e13418de17ea', '/images/spam3.png')
on conflict do nothing;