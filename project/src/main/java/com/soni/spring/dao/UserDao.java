package com.soni.spring.dao;


import java.util.List;

import com.soni.spring.model.AddressModel;
import com.soni.spring.model.UserModel;

public interface UserDao extends GenericDao<UserModel>{
	
	
	//public void addUser(UserModel um);
	public UserModel showData(String name);
	public boolean checkUser(String username, String password);
	public List<UserModel> getUserData();
	public void updateData(UserModel um);
	public List<AddressModel> getId(int id);
	public void deleteAddress(List<AddressModel> storeid);
	//public void deleteUser(Integer userid);
	public boolean registerCheck(String username);
	public boolean existUsername(int userid, String username);
	public String getPassword(String username);

}
