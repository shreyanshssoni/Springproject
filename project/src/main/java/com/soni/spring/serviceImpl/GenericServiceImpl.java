package com.soni.spring.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soni.spring.dao.GenericDao;
import com.soni.spring.model.UserModel;
import com.soni.spring.service.GenericService;

@Service
public abstract class GenericServiceImpl<E> implements GenericService<E>{

	@Autowired
	private GenericDao<UserModel> dao;
	
	
	
	public void addUser(UserModel um) {
	dao.addUser(um);
    }
	
	public void deleteUser(Integer userid) {
	 dao.deleteUser(userid);
	
	}
	
}
