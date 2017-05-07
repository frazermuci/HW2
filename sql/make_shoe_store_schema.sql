CREATE SCHEMA shoe_store;

CREATE TABLE shoe_store.product_info(
   category VARCHAR(128),
   product_name VARCHAR(128),
   description VARCHAR(5000),
   color VARCHAR(50),
   price INT,
   PRIMARY KEY(product_name)
);

CREATE TABLE shoe_store.images(
   product_name VARCHAR(128),
   img_path VARCHAR(128),
   PRIMARY KEY(product_name, img_path)
);