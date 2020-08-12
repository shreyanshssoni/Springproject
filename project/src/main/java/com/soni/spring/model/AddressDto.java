package com.soni.spring.model;

import java.util.List;

import javax.validation.Valid;



public class AddressDto {

	
	private List<@Valid AddressModel> addressmodel;

	public List<AddressModel> getAddressmodel() {
		return addressmodel;
	}

	public void setAddressmodel(List<AddressModel> addressmodel) {
		
		this.addressmodel = addressmodel;
	}
	
	

	
}
