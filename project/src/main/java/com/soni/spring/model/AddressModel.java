package com.soni.spring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;



@Entity
@Table(name = "address")
public class AddressModel {

	
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="address_id")
	private int id;
	
	
	@NotEmpty
	@Size(max = 45,message = "{usermodel.street.empty}")
	@Column(name="street",nullable = false,length = 100)
	private String street;
	
	@NotEmpty
	@Size(max = 45,message = "{usermodel.landmark.empty}")
	@Column(name="landmark",nullable = false,length = 100)
	private String landmark;
	
	@Column(name="city",nullable = false)
	private String city;
	
	@NotEmpty
	@Pattern(regexp = "[0-9]+",message = "{usermodel.pincode.empty}")
	@Size(min = 6,max = 6,message = "{usermodel.pincode.empty}")
	@Column(name="pincode",nullable = false,length = 6)
	private String pincode;
	
	@Column(name="state")
	private String state;
	
	@NotEmpty
	@Size(max = 15,message = "{usermodel.country.empty}")
	@Column(name="country",nullable = false,length = 20)
	private String country;
	
	


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStreet() {
		return street;
	}
	
	public void setStreet(String street) {
		this.street = street;
	}

	public String getLandmark() {
		return landmark;
	}

	public void setLandmark(String landmark) {
		this.landmark = landmark;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	@Override
	public String toString() {
		return "AddressModel [id=" + id + ", street=" + street + ", landmark=" + landmark + ", city=" + city
				+ ", pincode=" + pincode + ", state=" + state + ", country=" + country + "]";
	}


	


}
