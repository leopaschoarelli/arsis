package br.com.arsis.salamusical.domain.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import br.com.arsis.salamusical.domain.model.Usuario;

@Repository
public interface UsuarioRepository extends CustomJpaRepository<Usuario, Long> {

	Optional<Usuario> findByEmail(String email);
	
}