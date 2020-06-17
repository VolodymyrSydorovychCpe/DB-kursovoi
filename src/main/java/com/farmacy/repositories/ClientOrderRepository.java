package com.farmacy.repositories;

import com.farmacy.enteties.ClientOrder;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

@RepositoryRestResource(collectionResourceRel = "client-orders", path = "client-order-list")
@CrossOrigin(origins = "http://localhost:4200")
public interface ClientOrderRepository extends CrudRepository<ClientOrder, Long> {

    @RestResource(exported = false)
    ClientOrder save(@RequestBody ClientOrder entity);
}
