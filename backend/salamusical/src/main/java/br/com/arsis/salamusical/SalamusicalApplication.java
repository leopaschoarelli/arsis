package br.com.arsis.salamusical;

import java.util.TimeZone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import br.com.arsis.salamusical.core.io.Base64ProtocolResolver;
import br.com.arsis.salamusical.infrastructure.CustomJpaRepositoryImpl;

@SpringBootApplication
@EnableJpaRepositories(repositoryBaseClass = CustomJpaRepositoryImpl.class)
public class SalamusicalApplication {

	public static void main(String[] args) {
		TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
		
		var app = new SpringApplication(SalamusicalApplication.class);
		app.addListeners(new Base64ProtocolResolver());
		app.run(args);
	}

}
