create table if not exists item_images

(
    item_id uuid references items(item_id),
    img_url text not null,
    primary key (img_url, item_id)
);

grant select, insert, update, delete on table order_items to project_app;
grant select on table item_images to project_read;