package adt.su22.real_estimate_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.actuate.autoconfigure.security.servlet.ManagementWebSecurityAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.redis.RedisAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.cloud.vault.config.VaultAutoConfiguration;
import org.springframework.core.env.Environment;

@SpringBootApplication(exclude = {
        SecurityAutoConfiguration.class,
        VaultAutoConfiguration.class,
        ManagementWebSecurityAutoConfiguration.class
}
)
public class RealEstimateBackendApplication {

    @Autowired
    private Environment env;

    public static void main(String[] args) {
        SpringApplication.run(RealEstimateBackendApplication.class, args);
    }

}
