package com.grupo2tech.artesaniascuero.model;
import jakarta.persistence.*;

public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (nullable = false)
    private long customer_id;

    @Column (nullable = false)
    private String status; 

    @Column (nullable = false)
    private String promised_date;

    @Column (nullable = false)
    private String notes;
    
    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public long getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(long customer_id) {
        this.customer_id = customer_id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPromised_date() {
        return promised_date;
    }

    public void setPromised_date(String promised_date) {
        this.promised_date = promised_date;
    }

    public String getNotes() {
        return notes;
    }   
    
    public void setNotes(String notes) {
        this.notes = notes;
    }
}
