package com.project.fitness.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import static java.awt.SystemColor.info;

@Component
public class OpenApiConfig {
    @Bean
    public OpenAPI customOpenAPI(){
        return new OpenAPI()
                .info(new Info()
                        .title("Fitness Tracker API")
                        .version("1.0")
                        .description("production level API")
                        .contact(new Contact()
                                .name("kartik Bhandare")
                                .email("kartikbhandare57@gmail.com")
                        )
                );
    }
}
