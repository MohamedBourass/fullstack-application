INSERT INTO continent (code, name) VALUES ('AF', 'Africa');
INSERT INTO continent (code, name) VALUES ('AS', 'Asia');
INSERT INTO continent (code, name) VALUES ('EU', 'Europe');
INSERT INTO continent (code, name) VALUES ('NA', 'North America');
INSERT INTO continent (code, name) VALUES ('SA', 'South America');
INSERT INTO continent (code, name) VALUES ('OC', 'Oceania');
INSERT INTO continent (code, name) VALUES ('AN', 'Antarctica');

INSERT INTO users (password, email) VALUES ('$2a$10$ha923GH6opI0T6ViO06w1.A01z3Si3MPxN7ax5.3XkizodqzW8HJ6', 'admin@gmail.com');
INSERT INTO user_roles(user_id, roles) VALUES(1, 'ADMIN');

INSERT INTO country (code, name, capital, area) VALUES
('DZ', 'Algeria', 'Algiers', 2381741),
('AO', 'Angola', 'Luanda', 1246700),
('BJ', 'Benin', 'Porto-Novo', 112622),
('BW', 'Botswana', 'Gaborone', 581730),
('BF', 'Burkina Faso', 'Ouagadougou', 272967),
('BI', 'Burundi', 'Gitega', 27834),
('CM', 'Cameroon', 'Yaoundé', 475442),
('CV', 'Cape Verde', 'Praia', 4033),
('CF', 'Central African Republic', 'Bangui', 622984),
('TD', 'Chad', 'N’Djamena', 1284000),
('KM', 'Comoros', 'Moroni', 2235),
('CG', 'Congo', 'Brazzaville', 342000),
('CD', 'Democratic Republic of the Congo', 'Kinshasa', 2344858),
('DJ', 'Djibouti', 'Djibouti', 23200),
('EG', 'Egypt', 'Cairo', 1002450),
('GQ', 'Equatorial Guinea', 'Malabo', 28051),
('ER', 'Eritrea', 'Asmara', 117600),
('SZ', 'Eswatini', 'Mbabane', 17364),
('ET', 'Ethiopia', 'Addis Ababa', 1104300),
('GA', 'Gabon', 'Libreville', 267667),
('GM', 'Gambia', 'Banjul', 11295),
('GH', 'Ghana', 'Accra', 238533),
('GN', 'Guinea', 'Conakry', 245857),
('GW', 'Guinea-Bissau', 'Bissau', 36125),
('CI', 'Ivory Coast', 'Yamoussoukro', 322463),
('KE', 'Kenya', 'Nairobi', 580367),
('LS', 'Lesotho', 'Maseru', 30355),
('LR', 'Liberia', 'Monrovia', 111369),
('LY', 'Libya', 'Tripoli', 1759540),
('MG', 'Madagascar', 'Antananarivo', 587041),
('MW', 'Malawi', 'Lilongwe', 118484),
('ML', 'Mali', 'Bamako', 1240192),
('MR', 'Mauritania', 'Nouakchott', 1030700),
('MU', 'Mauritius', 'Port Louis', 2040),
('MA', 'Morocco', 'Rabat', 710850),
('MZ', 'Mozambique', 'Maputo', 801590),
('NA', 'Namibia', 'Windhoek', 825615),
('NE', 'Niger', 'Niamey', 1267000),
('NG', 'Nigeria', 'Abuja', 923768),
('RW', 'Rwanda', 'Kigali', 26338),
('ST', 'São Tomé and Príncipe', 'São Tomé', 964),
('SN', 'Senegal', 'Dakar', 196722),
('SC', 'Seychelles', 'Victoria', 455),
('SL', 'Sierra Leone', 'Freetown', 71740),
('SO', 'Somalia', 'Mogadishu', 637657),
('ZA', 'South Africa', 'Pretoria', 1219090),
('SS', 'South Sudan', 'Juba', 619745),
('SD', 'Sudan', 'Khartoum', 1861484),
('TZ', 'Tanzania', 'Dodoma', 945087),
('TG', 'Togo', 'Lomé', 56785),
('TN', 'Tunisia', 'Tunis', 163610),
('UG', 'Uganda', 'Kampala', 241038),
('ZM', 'Zambia', 'Lusaka', 752618),
('ZW', 'Zimbabwe', 'Harare', 390757);