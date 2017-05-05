DROP TABLE shoe_store.product_info;

CREATE TABLE shoe_store.product_info(
   category VARCHAR(128),
   product_name VARCHAR(128),
   description VARCHAR(5000),
   color VARCHAR(50),
   price INT,
   PRIMARY KEY(product_name)
);