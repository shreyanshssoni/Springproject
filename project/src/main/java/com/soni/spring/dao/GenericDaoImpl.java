package com.soni.spring.dao;


import javax.transaction.Transactional;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.soni.spring.model.UserModel;

@Repository
@Transactional
public abstract class GenericDaoImpl<E> implements GenericDao<E> {


	@Autowired
	private SessionFactory sessionFactory;
	
	// get the current session
	public Session getSession() {
		return sessionFactory.getCurrentSession();
	}
	  
	 
	    
	//Registered user with addresses
		public void addUser(UserModel um) {
			getSession().save(um);
			System.out.println("Registered successfull");
		}
	
		//delete user with id
		public void deleteUser(Integer userid) {
			Session session = getSession();
			UserModel user = (UserModel)session.get(UserModel.class,userid); 
			session.delete(user); 
		}
	
	
}
