create table grupo (
	id bigint not null auto_increment,
	nome varchar(60) not null,
	
	primary key (id)
) engine=InnoDB default charset=utf8;

create table grupo_permissao (
	grupo_id bigint not null,
	permissao_id bigint not null,
	
	primary key (grupo_id, permissao_id)
) engine=InnoDB default charset=utf8;

create table permissao (
	id bigint not null auto_increment,
	descricao varchar(60) not null,
	nome varchar(100) not null,
	
	primary key (id)
) engine=InnoDB default charset=utf8;

create table usuario (
	id bigint not null auto_increment,
	nome varchar(80) not null,
	email varchar(255) not null,
	senha varchar(255) not null,
	data_cadastro datetime not null,
	
	primary key (id)
) engine=InnoDB default charset=utf8;

create table usuario_grupo (
	usuario_id bigint not null,
	grupo_id bigint not null,
	
	primary key (usuario_id, grupo_id)
) engine=InnoDB default charset=utf8;

alter table grupo_permissao add constraint fk_grupo_permissao_permissao
foreign key (permissao_id) references permissao (id);

alter table grupo_permissao add constraint fk_grupo_permissao_grupo
foreign key (grupo_id) references grupo (id);

alter table usuario_grupo add constraint fk_usuario_grupo_grupo
foreign key (grupo_id) references grupo (id);

alter table usuario_grupo add constraint fk_usuario_grupo_usuario
foreign key (usuario_id) references usuario (id);

insert into permissao (id, nome, descricao) values (1, 'CONSULTA_TESTE1', 'Consulta de teste 1');
insert into permissao (id, nome, descricao) values (2, 'CONSULTA_TESTE2', 'Consulta de teste 2');

insert into grupo (id, nome) values (1, 'Administrador'), (2, 'Professor'), (3, 'Colaborador');

insert into grupo_permissao (grupo_id, permissao_id)
select 1, id from permissao;

insert into grupo_permissao (grupo_id, permissao_id)
select 2, id from permissao;

insert into usuario (id, nome, email, senha, data_cadastro) values
(1, 'Leonardo Paschoarelli', 'leonardo.lhpr@gmail.com', '$2y$12$NSsM4gEOR7MKogflKR7GMeYugkttjNhAJMvFdHrBLaLp2HzlggP5W', utc_timestamp),
(2, 'Colaborador Teste', 'teste@arsis.com', '$2y$12$NSsM4gEOR7MKogflKR7GMeYugkttjNhAJMvFdHrBLaLp2HzlggP5W', utc_timestamp);

insert into usuario_grupo (usuario_id, grupo_id) values (1, 1), (2, 2);