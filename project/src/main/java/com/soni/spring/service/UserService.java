package com.soni.spring.service;


import java.util.List;


import com.soni.spring.model.UserModel;


public interface UserService extends  GenericService<UserModel> {

	//public void addUser(UserModel um);
	public UserModel showData(String name);
	public boolean userExist(String username, String password);
	public List<UserModel> getUserData();
	public void updateData(UserModel um);
	//public void deleteUser(Integer userid);
	public boolean existUsername(int userid, String username);
	public String getPassword(String username);
	


}
