package com.grupo2tech.artesaniascuero.model;
import jakarta.persistence.*;

@Entity
public class Material {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private String base_unit;

    @Column(nullable = false)
    private double stock_min;

    @Column(nullable = false)
    private boolean active = true; 

    // Getters and Setters
    
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getCategory() {
        return category;
    }
    
    public void setCategory(String category) {
        this.category = category;
    }

    public String getBaseUnit() {
        return base_unit;
    }

    public void setBaseUnit(String base_unit) {
        this.base_unit = base_unit;
    }

    public double getStockMin() {
        return stock_min;
    }

    public void setStockMin(double stock_min) {
        this.stock_min = stock_min;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
