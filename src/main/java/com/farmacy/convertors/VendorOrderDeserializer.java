package com.farmacy.convertors;

import com.farmacy.enteties.Medecine;
import com.farmacy.enteties.Vendor;
import com.farmacy.enteties.VendorOrder;
import com.google.gson.*;

import java.lang.reflect.Type;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Map;
import java.util.stream.Collectors;

public class VendorOrderDeserializer implements JsonDeserializer<VendorOrder> {

    private Gson gson = new Gson();

    private SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");

    @Override
    public VendorOrder deserialize(JsonElement elem,
                                   Type type,
                                   JsonDeserializationContext jsonDeserializationContext) {
        VendorOrder vendorOrder = new VendorOrder();

        JsonObject jsonObject = elem.getAsJsonObject();

        if (jsonObject.has("id")) {
            vendorOrder.setId(jsonObject.get("id").getAsLong());
        }

        try {
            vendorOrder.setOrderDate(new Date(simpleDateFormat.parse(jsonObject.get("orderDate").getAsString()).getTime()));
        } catch (ParseException e) {
            e.printStackTrace();
        }


        vendorOrder.setVendor(gson.fromJson(jsonObject.get("vendor"), new Vendor().getClass()));

        Map<Medecine, Integer> vendorOrderItems = jsonObject.get("vendorOrderItems").getAsJsonObject().entrySet().stream()
                .collect(Collectors.toMap(
                        entry -> gson.fromJson(entry.getKey(), new Medecine().getClass()),
                        entry -> entry.getValue().getAsInt()));

        vendorOrder.setVendorOrderItems(vendorOrderItems);

        return vendorOrder;
    }

}