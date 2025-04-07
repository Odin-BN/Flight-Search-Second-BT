package com.secondbreakabletoy.Flight_Search.services;

import com.secondbreakabletoy.Flight_Search.model.FlightModel;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class FlightServicesTest {

    @InjectMocks
    private List<FlightModel> flights;

    @Test
    //
    public void test() {
        
    }

}
