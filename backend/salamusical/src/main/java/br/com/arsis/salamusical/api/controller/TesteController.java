package br.com.arsis.salamusical.api.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping(path = "/teste", produces = MediaType.APPLICATION_JSON_VALUE)
public class TesteController {

	@GetMapping("/1")
	public String getTesteOne() {
		return "Teste 1";
	}
	
	@GetMapping("/2")
	public String getTesteTwo() {
		return "Teste 2";
	}
	
}
