package br.com.arsis.salamusical.core.security;

import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import org.springframework.security.access.prepost.PreAuthorize;

public @interface CheckSecurity {

	public @interface Teste {
		
		@PreAuthorize("hasAuthority('SCOPE_READ') and hasAuthority('CONSULTA_TESTE1')")
		@Retention(RUNTIME)
		@Target(METHOD)
		public @interface PodeConsultar1 { }
		
		@PreAuthorize("hasAuthority('SCOPE_READ') and hasAuthority('CONSULTA_TESTE2')")
		@Retention(RUNTIME)
		@Target(METHOD)
		public @interface PodeConsultar2 { }
		
		@PreAuthorize("isAuthenticated()")
		@Retention(RUNTIME)
		@Target(METHOD)
		public @interface PodeConsultar3 { }
		
	}
	
}
