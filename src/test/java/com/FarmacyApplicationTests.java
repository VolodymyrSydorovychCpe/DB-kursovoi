package com;

import com.farmacy.repositories.ClientRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class FarmacyApplicationTests {

	@Autowired
    ClientRepository customerRepository;

}
