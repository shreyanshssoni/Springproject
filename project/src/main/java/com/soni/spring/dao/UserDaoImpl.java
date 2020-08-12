package com.soni.spring.dao;

import java.util.ArrayList;
import java.util.Base64;
import java.util.Iterator;
import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.NativeQuery;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.soni.spring.dao.GenericDaoImpl;
import com.soni.spring.model.AddressModel;
import com.soni.spring.model.UserModel;


@Repository
@Transactional
public class UserDaoImpl extends GenericDaoImpl<UserModel>implements UserDao {


	@Autowired
	private SessionFactory sessionFactory;
	
	// get the current session
	public Session getSession() {
		return sessionFactory.getCurrentSession();
	}


	
	//Update User with address
	public void updateData(UserModel um) {	
		getSession().saveOrUpdate(um);	
		System.out.println("Update Successful");
	}

	
	//fetch all data for user-profile
	public UserModel showData(String name) {
		UserModel um = null;
		List results = null;
		String hql = "FROM UserModel  WHERE userName = :name";
		Query query = getSession().createQuery(hql);
		query.setParameter("name",name);
		results = query.list(); 
		for (Iterator iterator = results.iterator(); iterator.hasNext();) {
			um = (UserModel) iterator.next();		
		} 
		um.setBase64image(Base64.getEncoder().encodeToString(um.getImage())); 
		return um;

	}


	//Username password authentication
	public boolean checkUser(String username, String password) {	
		List<UserModel> results = null;
		String hql = "select userName,password FROM UserModel  WHERE userName = :name and password = :password";
		Query query =  getSession().createQuery(hql);
		query.setParameter("name",username);
		query.setParameter("password",password);
		results =  query.list();
		if(results.isEmpty()) {
			return false;
		}
		else {
			return true;
		}

	}


	//Fetch userdata for admin page
	public List<UserModel> getUserData() {		
		List results = getSession().createQuery("select id,userName,email,gender,contact,image from UserModel").list();
		Iterator iterator = results.iterator(); 
		List<UserModel> list = new ArrayList<UserModel>();
		while(iterator.hasNext()) {
		     Object[] line = (Object[]) iterator.next();
		     UserModel usermodel = new UserModel();
		     usermodel.setId((int) line[0]);
		     usermodel.setUserName((String) line[1]);
		     usermodel.setEmail((String) line[2]);
		     usermodel.setGender((String) line[3]);
		     usermodel.setContact((String) line[4]);
		     String img = Base64.getEncoder().encodeToString((byte[]) line[5]);
		     usermodel.setBase64image(img);
		     list.add(usermodel);	     
		} 
		return list;
	}




	//Get all addressid for particular user
	public List<AddressModel> getId(int id) {	
		 String sql = "SELECT address_id  FROM address where user_id = "+id+"";
         NativeQuery<AddressModel> query = getSession().createNativeQuery(sql);
         return query.list();
	}

	
	
	//delete manually at update time
	public void deleteAddress(List<AddressModel> storeid) {
		Session session = getSession();
		for(int i =0;i<storeid.size();i++) {
			Query q = session.createQuery("delete AddressModel where id = "+storeid.get(i)+"");
			q.executeUpdate();
		}	
	}
	

	@Override //checking userExist or not
	public boolean registerCheck(String username) {		
		String hql = "select userName FROM UserModel  WHERE userName = :name";
		Query query =  getSession().createQuery(hql);
		query.setParameter("name",username);
		 String result =  (String) query.uniqueResult(); 
		 if(result == null) {
			 return false;
		 }
		 else {
			 return true;
		 }
	}


	//checking userExist or not
	public boolean existUsername(int userid, String username) {
		String hql = "select id FROM UserModel  WHERE userName = :name";
		Query query =  getSession().createQuery(hql);
		query.setParameter("name",username);
		 Integer result =   (Integer) query.uniqueResult(); 
		 
		 if(result == userid) {
			 return false;
		 }
		 else {
			 return true;
		 }
			
	}


	//fetch password for forgotpassword
	public String getPassword(String username) {		
		String hql = "select password FROM UserModel  WHERE userName = :name";
		Query query =  getSession().createQuery(hql);
		query.setParameter("name",username);
		String password =  (String) query.uniqueResult();			
		return password;
	}

}

