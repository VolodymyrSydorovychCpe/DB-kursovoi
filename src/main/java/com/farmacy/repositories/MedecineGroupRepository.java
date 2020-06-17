package com.farmacy.repositories;

import com.farmacy.enteties.MedecineGroup;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "medicine-groups", path = "medicine-groups")
@CrossOrigin(origins = "http://localhost:4200")
public interface MedecineGroupRepository extends CrudRepository<MedecineGroup, Long> {
}
