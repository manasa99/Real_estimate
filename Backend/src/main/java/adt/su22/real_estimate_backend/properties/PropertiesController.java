package adt.su22.real_estimate_backend.properties;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/real_estimate_backend")
@CrossOrigin(originPatterns = "*")
public class PropertiesController {

    private final PropertiesService propertiesService;
    private final AvgPriceYearService avgPriceYearService;
    @GetMapping("/properties/by")
    public Optional<List<Property>> get_property_data(@RequestParam(required = false) String state,
                                                      @RequestParam(required = false) Integer zip_code,
                                                      @RequestParam(required = false) String city,
                                                      @RequestParam(required = false) Integer bed,
                                                      @RequestParam(required = false) Integer bath){

        return propertiesService.getData(state,zip_code,city,bed,bath);
    }

    @GetMapping("/all")
    public Optional<HashSet<String>> get_cities(@RequestParam String type){
        if (type.equals("city")) {
            return propertiesService.getAllCities();
        }
        else if (type.equals("state")) {
            return propertiesService.getAllStates();
        }
        else if (type.equals("zip_code")) {
            return propertiesService.getAllZip_codes();
        }
        return null;
    }

    @GetMapping("/property")
    public Optional<Property> get_property_data(@RequestParam String id){
        return propertiesService.getPropertyById(id);
    }
    @PostMapping(value="/property", consumes = "application/json")
    public String set_property_data(@RequestBody Property property){
        return propertiesService.setProperty(property);
    }
    @DeleteMapping(value="/property")
    public boolean delete_property_data(@RequestParam String id){
        return propertiesService.deleteProperty(id);
    }

    @GetMapping("/aggregations/statewisepropertycounts")
    public List<StateWiseProperties> getStateWisePropreties(){
        return propertiesService.getSWP();
    }

    @GetMapping("/aggregations/averagepriceperyear")
    public List<AvgPriceYear> getAvgPricePerYear(){
        return avgPriceYearService.getAPY();
    }
}
