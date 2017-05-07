CREATE SCHEMA order_info;

CREATE TABLE order_info.shipping_info(
   onum INT NOT NULL AUTO_INCREMENT,
   address VARCHAR(128),
   city VARCHAR(128),
   state VARCHAR(128),
   zip VARCHAR(128),
   tax VARCAR(128),
   method VARCHAR(128),
   PRIMARY KEY(onum)
);

CREATE TABLE order_info.contact_info(
   onum INT NOT NULL AUTO_INCREMENT,
   fname VARCHAR(128),
   lname VARCHAR(128),
   pnumber VARCHAR(128),
   email VARCHAR(128),
   PRIMARY KEY(onum)
);

CREATE TABLE order_info.card_info(
   onum INT NOT NULL AUTO_INCREMENT,
   card_num VARCHAR(128),
   cvc_num VARCHAR(128),
   exp VARCHAR(128),
   PRIMARY KEY(onum)
);

CREATE TABLE order_info.billing_info(
   onum INT NOT NULL AUTO_INCREMENT,
   address VARCHAR(128),
   city VARCHAR(128),
   state VARCHAR(128),
   zip VARCHAR(128),
   tax VARCAR(128),
   PRIMARY KEY(onum)
);

CREATE TABLE order_info.product_info(
   onum INT NOT NULL AUTO_INCREMENT,
   product_name VARCHAR(128),
   price VARCHAR(128),
   size VARCHAR(128),
   quantity VARCHAR(128),
   PRIMARY KEY(onum)
);