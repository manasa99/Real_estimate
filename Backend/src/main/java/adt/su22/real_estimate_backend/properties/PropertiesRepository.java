package adt.su22.real_estimate_backend.properties;

import adt.su22.real_estimate_backend.properties.MongoCols.City;
import adt.su22.real_estimate_backend.properties.MongoCols.State;
import adt.su22.real_estimate_backend.properties.MongoCols.ZipCode;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
 
import java.util.List;

@Repository
public interface PropertiesRepository extends MongoRepository<Property, String> {
    List<Property> findAllByCityIgnoreCase(String city);
    List<Property> findAllByBed(int bed);
    List<Property> findAllByBath(int bath);
//    List<Property> findAllByZip_code(int zip_code);

    List<Property> findAllByPriceBetween(int low,int high);

    List<Property> findAllByCityIgnoreCaseAndBedAndBath(String city, int bed, int bath);

    List<Property> findAllByCityIgnoreCaseAndBed(String city, int bed);

    List<Property> findAllByCityIgnoreCaseAndBath(String city, int bath);

    List<Property> findAllByStateIgnoreCaseAndCityIgnoreCaseAndBedAndBath(String state,String city, int bed, int bath);

    List<Property> findAllByStateIgnoreCaseAndCityIgnoreCaseAndBed(String state,String city, int bed);

    List<Property> findAllByStateIgnoreCaseAndCityIgnoreCaseAndBath(String state,String city, int bath);

    List<Property> findAllByStateIgnoreCaseAndCityIgnoreCase(String state,String city);

    List<Property> findAllByStateIgnoreCaseAndBed(String state, int bed );

    List<Property> findAllByStateIgnoreCaseAndBath(String state, int bath );

    List<Property> findAllByStateIgnoreCase(String state);


    @Query(value = "db.properties.distinct(\"city\")",fields = "{city: 1,_id:0}")
    List<City> getallcities();

    @Query(value = "db.properties.distinct(\"state\")",fields = "{state: 1,_id:0}")
    List<State> getallstates();

    @Query(value = "db.properties.distinct(\"zip_code\")",fields = "{zip_code: 1,_id:0}")
    List<ZipCode> getallzip_codes();

    @Aggregation(pipeline = "{'$group':{'_id': '$state', 'count': {'$sum': 1}}}")
    List<StateWiseProperties> getStateIgnoreCaseWiseProperties();

    }
