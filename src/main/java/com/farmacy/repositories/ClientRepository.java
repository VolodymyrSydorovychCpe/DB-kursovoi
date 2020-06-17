package com.farmacy.repositories;

import com.farmacy.enteties.Client;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "clients", path = "clients")
@CrossOrigin(origins = "http://localhost:4200")
public interface ClientRepository extends CrudRepository<Client, Long> {
}
