package com.soni.spring.service;

import com.soni.spring.model.UserModel;

public interface GenericService<E> {
	
	public void addUser(UserModel um);
	public void deleteUser(Integer userid);
}
