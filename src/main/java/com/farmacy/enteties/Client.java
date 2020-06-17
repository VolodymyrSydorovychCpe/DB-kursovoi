package com.farmacy.enteties;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@ToString(exclude = "clientOrders")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String address;

    @OneToMany(mappedBy = "client", fetch = FetchType.LAZY)
    private Set<ClientOrder> clientOrders;

}
