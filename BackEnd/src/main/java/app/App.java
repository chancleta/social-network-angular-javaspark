package app;

import api.AuthenticationController;
import api.CompanyController;
import api.FeedListController;
import com.auth0.jwt.JWTSigner;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.internal.org.apache.commons.codec.binary.Base64;
import com.google.gson.GsonBuilder;
import services.CompanyService;
import services.FeedService;
import spark.Filter;
import spark.Request;
import spark.Response;
import spark.Spark;
import validator.LongTypeAdapter;

import java.security.SignatureException;
import java.util.Map;


/**
 * Created by lupena on 2/5/2016.
 */
public class App {
    private final static String SECRET = "my_secret";

    public static void main(String [] args){
        // get("/hello", (request, response) -> "Hi" );
        //System.out.println(as);
        Spark.port(9001);
        Spark.staticFileLocation("/public");
        Spark.before("*",(request, response) -> {
            response.header("Access-Control-Allow-Origin", "http://localhost:9000");
            response.header("Access-Control-Request-Method", "POST, GET, OPTIONS");
            response.header("Access-Control-Allow-Headers", request.headers("Access-Control-Request-Headers"));
        });
        new CompanyController(CompanyService.getInstance());
        new AuthenticationController();
        new FeedListController(FeedService.getInstance());

       // System.out.println(  CompanyService.getInstance().getAllCompanies().get(0).isValid());
//
//        try {
//
//          //  Map<String,Object> decodedPayload = new JWTVerifier(SECRET, "audience").verify("my-token");
//
//
//
//
//
//
//        } catch (SignatureException signatureException) {
//            System.err.println("Invalid signature!");
//        } catch (IllegalStateException illegalStateException) {
//            System.err.println("Invalid Token! " + illegalStateException);
//        }

    }
}
