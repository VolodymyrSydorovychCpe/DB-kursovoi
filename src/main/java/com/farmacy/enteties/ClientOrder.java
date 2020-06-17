package com.farmacy.enteties;

import lombok.Data;
import org.springframework.data.rest.core.annotation.RestResource;

import javax.persistence.*;
import java.sql.Date;
import java.util.Map;

@Entity
@Data
public class ClientOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Date orderDate;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "customer_id")
    private Client client;

    @RestResource(rel = "clientOrderItems", path = "client-order-items")
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "Medecine_client_order_items",
            joinColumns = @JoinColumn(name = "client_order_id"))
    @MapKeyJoinColumn(name = "medecine_id")
    @Column(name = "count")
    private Map<Medecine, Integer> clientOrderItems;
}
