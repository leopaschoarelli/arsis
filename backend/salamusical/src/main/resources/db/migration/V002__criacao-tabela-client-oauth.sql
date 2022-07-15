create table oauth_client_details (
  client_id varchar(255),
  resource_ids varchar(256),
  client_secret varchar(256),
  scope varchar(256),
  authorized_grant_types varchar(256),
  web_server_redirect_uri varchar(256),
  authorities varchar(256),
  access_token_validity integer,
  refresh_token_validity integer,
  additional_information varchar(4096),
  autoapprove varchar(256),
  
  primary key (client_id)
) engine=innodb default charset=utf8;

insert into oauth_client_details (
  client_id, resource_ids, client_secret, 
  scope, authorized_grant_types, web_server_redirect_uri, authorities,
  access_token_validity, refresh_token_validity, autoapprove
)
values (
  'arsis-web', null, '$2a$12$P/HV8817OHpWG6hud1MQ1.02TuQpWw5m7VM0BKjNUUCsdseQ4fVy2',
  'READ,WRITE', 'password,refresh_token', null, null,
  60 * 60 * 6, 60 * 60 * 12, true
);