package com.soni.spring.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soni.spring.dao.UserDao;
import com.soni.spring.model.AddressModel;
import com.soni.spring.model.UserModel;
import com.soni.spring.service.UserService;

@Service
public class UserServiceImpl extends GenericServiceImpl<UserModel> implements UserService {

	@Autowired
	private UserDao dao;
	
	

	public UserModel showData(String name) {
		return dao.showData(name);
	}

	public boolean userExist(String username, String password) {
		return dao.checkUser(username,password);
		
	}

	
	public List<UserModel> getUserData() {
		return  dao.getUserData();
		
	}

	
	public void updateData(UserModel um) {
		deletedata(um);
		dao.updateData(um);		
	}

	
	private void deletedata(UserModel um) {
		List<AddressModel> storeid = dao.getId(um.getId());	
		List<Integer> getid = um.getAddressModel().stream().map(nl -> nl.getId()).collect(Collectors.toList());
		
		storeid.removeAll(getid);
		if(storeid.size() > 0) {
			dao.deleteAddress(storeid);
		}
	}

	
	

	@Override
	public boolean existUsername(int userid, String username) {
		boolean ans;
		if(userid == 0) {
		 ans = dao.registerCheck(username);
		}
		else {
			 ans = dao.existUsername(userid,username);
		}
		
		if(ans == true) {
			return true;
		}else {
			return false;
		}
		
	}

	
	public String getPassword(String username) {
		return dao.getPassword(username);
	}



}
