package com.farmacy.convertors;

import com.farmacy.enteties.*;
import com.google.gson.*;

import java.lang.reflect.Type;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Map;
import java.util.stream.Collectors;

public class ClientOrderDeserializer implements JsonDeserializer<ClientOrder> {

    private Gson gson = new Gson();

    private SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");

    @Override
    public ClientOrder deserialize(JsonElement elem,
                                   Type type,
                                   JsonDeserializationContext jsonDeserializationContext) {
        ClientOrder clientOrder = new ClientOrder();

        JsonObject jsonObject = elem.getAsJsonObject();

        if (jsonObject.has("id")) {
            clientOrder.setId(jsonObject.get("id").getAsLong());
        }

        try {
            clientOrder.setOrderDate(new Date(simpleDateFormat.parse(jsonObject.get("orderDate").getAsString()).getTime()));
        } catch (ParseException e) {
            e.printStackTrace();
        }


        clientOrder.setClient(gson.fromJson(jsonObject.get("client"), new Client().getClass()));

        Map<Medecine, Integer> clientOrderItems = jsonObject.get("clientOrderItems").getAsJsonObject().entrySet().stream()
                .collect(Collectors.toMap(
                        entry -> gson.fromJson(entry.getKey(), new Medecine().getClass()),
                        entry -> entry.getValue().getAsInt()));

        clientOrder.setClientOrderItems(clientOrderItems);
        return clientOrder;
    }
}