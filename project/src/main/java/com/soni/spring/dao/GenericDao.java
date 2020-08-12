package com.soni.spring.dao;

import com.soni.spring.model.UserModel;

public interface GenericDao<E> {


	void addUser(UserModel um);

	void deleteUser(Integer userid);
	
	
}
