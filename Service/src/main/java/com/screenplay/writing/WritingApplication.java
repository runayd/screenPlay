package com.screenplay.writing;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WritingApplication {

	public static void main(String[] args) {
		System.setProperty("server.servlet.context-path", "/writenow");
		SpringApplication.run(WritingApplication.class, args);
	}

}
