package com.mbo.backend.exception;

public class CarNotFoundException extends RuntimeException {
    public CarNotFoundException(Long id) {
        super("Could not find car " + id);
    }
}
