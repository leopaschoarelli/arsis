package br.com.arsis.salamusical.api.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.arsis.salamusical.core.security.CheckSecurity;

@RestController
@RequestMapping(path = "/teste", produces = MediaType.APPLICATION_JSON_VALUE)
public class TesteController {

	@CheckSecurity.Teste.PodeConsultar1
	@GetMapping("/1")
	public String getTesteOne() {
		return "Teste 1";
	}
	
	@CheckSecurity.Teste.PodeConsultar2
	@GetMapping("/2")
	public String getTesteTwo() {
		return "Teste 2";
	}
	
}
