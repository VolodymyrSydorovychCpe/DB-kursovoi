package com.farmacy.convertors;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.io.StringWriter;
import java.io.Writer;
import java.lang.reflect.Type;
import java.nio.charset.Charset;

import com.farmacy.enteties.VendorOrder;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import org.springframework.http.HttpInputMessage;
import org.springframework.http.HttpOutputMessage;
import org.springframework.http.MediaType;
import org.springframework.http.converter.AbstractHttpMessageConverter;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.http.converter.HttpMessageNotWritableException;

import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import org.springframework.stereotype.Component;

@Component
public class HttpMessageToVendorOrderConverter extends AbstractHttpMessageConverter<VendorOrder> {

    private Gson gson = new Gson();

    public static final Charset DEFAULT_CHARSET = Charset.forName("UTF-8");

    public HttpMessageToVendorOrderConverter(){
        super(new MediaType("application", "json", DEFAULT_CHARSET));
    }

    @Override
    protected VendorOrder readInternal(Class<? extends VendorOrder> clazz,
                                  HttpInputMessage inputMessage) throws IOException, HttpMessageNotReadableException {

        Type type = new TypeToken<VendorOrder>(){}.getType();
        Gson gsonUtil = new GsonBuilder()
                .registerTypeAdapter(type, new VendorOrderDeserializer())
                .create();

        try{
            return gsonUtil.fromJson(convertStreamToString(inputMessage.getBody()), clazz);
        }catch(JsonSyntaxException e){
            throw new HttpMessageNotReadableException("Could not read JSON: " + e.getMessage(), e);
        }

    }

    @Override
    protected boolean supports(Class<?> clazz) {
        return new VendorOrder().getClass().equals(clazz);
    }

    @Override
    protected void writeInternal(VendorOrder t,
                                 HttpOutputMessage outputMessage) throws IOException, HttpMessageNotWritableException {

        //TODO: adapt this to be able to receive a list of json objects too

        String json = gson.toJson(t);

        outputMessage.getBody().write(json.getBytes());
    }

    //TODO: move this to a more appropriated utils class
    public String convertStreamToString(InputStream is) throws IOException {
        /*
         * To convert the InputStream to String we use the Reader.read(char[]
         * buffer) method. We iterate until the Reader return -1 which means
         * there's no more data to read. We use the StringWriter class to
         * produce the string.
         */
        if (is != null) {
            Writer writer = new StringWriter();

            char[] buffer = new char[1024];
            try {
                Reader reader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
                int n;
                while ((n = reader.read(buffer)) != -1) {
                    writer.write(buffer, 0, n);
                }
            } finally {
                is.close();
            }
            return writer.toString();
        } else {
            return "";
        }
    }

}
