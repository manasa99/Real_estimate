package adt.su22.real_estimate_backend.properties;

import adt.su22.real_estimate_backend.properties.MongoCols.City;
import adt.su22.real_estimate_backend.properties.MongoCols.State;
import adt.su22.real_estimate_backend.properties.MongoCols.ZipCode;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;


@AllArgsConstructor
@Service
public class PropertiesService {

    private final PropertiesRepository propertiesRepository;

    public Optional<List<Property>> getData(String state, Integer zip_code, String city, Integer bed, Integer bath){
//        StringBuilder query = new StringBuilder("");
//    WIP
        if(state!=null && city!=null && bed!=null &&bath!=null)
        {
            return Optional.ofNullable(propertiesRepository.findAllByStateIgnoreCaseAndCityIgnoreCaseAndBedAndBath(state, city, bed, bath));
        } else if(state==null && city!=null && bed!=null &&bath!=null)
        {
            return Optional.ofNullable(propertiesRepository.findAllByCityIgnoreCaseAndBedAndBath(city, bed, bath));
        } else if(state!=null && city!=null && bed==null &&bath==null)
        {
            return Optional.ofNullable(propertiesRepository.findAllByStateIgnoreCaseAndCityIgnoreCase(state,city));
        }else if(state==null && city!=null && bed==null &&bath==null)
        {
            return Optional.ofNullable(propertiesRepository.findAllByCityIgnoreCase(city));
        }else if(state!=null && city==null && bed==null &&bath==null)
        {
            return Optional.ofNullable(propertiesRepository.findAllByStateIgnoreCase(state));
        }

        return null;
    }

    public Optional<HashSet<String> > getAllCities() {
        HashSet<String> resp = new HashSet<>(0);

        for (City city : propertiesRepository.getallcities()
        ) {
            resp.add(city.getCity());
        }
        return Optional.of(resp);
    }

    public Optional<HashSet<String> > getAllStates() {
        HashSet<String> resp = new HashSet<>(0);

        for (State state : propertiesRepository.getallstates()
        ) {
            resp.add(state.getState());
        }
        return Optional.of(resp);
    }

    public Optional<HashSet<String>> getAllZip_codes() {
        HashSet<String> resp = new HashSet<>(0);

        for (ZipCode zip_code : propertiesRepository.getallzip_codes()
        ) {
            resp.add(String.valueOf(zip_code.getZip_code()));
        }
        return Optional.of(resp);
    }
    public Optional<Property> getPropertyById(String id)
    {
        return propertiesRepository.findById(id);
    }

    public String setProperty(Property property){
        return propertiesRepository.save(property).getId();
    }

    public boolean deleteProperty(String id){
        Optional<Property> oldProperty = propertiesRepository.findById(id);
        if (oldProperty.isPresent())
        {
            propertiesRepository.delete(oldProperty.get());
            return true;
        }
        return false;
    }
    public List<StateWiseProperties> getSWP(){
        return propertiesRepository.getStateIgnoreCaseWiseProperties();
    }
}


