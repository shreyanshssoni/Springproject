package com.soni.spring.model;


import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;


@Entity
@Table(name = "user")
public class UserModel {

	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="user_id")
	private int id;
	
	@NotEmpty
	@Pattern(regexp = "^[a-zA-Z]*")
	@Size(min = 5, max = 15,message = "{usermodel.firstName.empty}")
	@Column(name="first_name",nullable = false,length = 50)	
	private String firstName;
	
	@NotEmpty
	@Pattern(regexp = "[a-zA-Z]*",message = "{usermodel.lastName.empty}")
	@Size(min = 4, max = 15,message = "{usermodel.lastName.empty}")
	@Column(name="last_name",nullable = false, length = 50)
	private String lastName;
	
	@NotEmpty
	@Size(min = 5, max = 20,message = "{usermodel.userName.empty}")
	@Column(name="username",nullable = false,unique = true,length = 20)
	private String userName;
	
	@NotEmpty
	@Pattern(regexp="^[a-zA-Z0-9]{8}",message="{usermodel.password.empty}")  
	@Column(name="password",nullable = false,length = 8)
	private String password;
	
	@NotEmpty(message = "{usermodel.dateofbirth.empty}")	
	@Column(name="dateofbirth",nullable = false)
	private String dateofbirth;
	
	@NotEmpty(message = "{usermodel.gender.empty}")	
	@Column(name="gender",nullable = false,length = 10)
	private String gender;
	
	@NotEmpty(message = "{usermodel.hobby.empty}")	
	@Column(name="hobbies",nullable = false,length = 20)
	private String hobby;
	
	@NotEmpty	
	@Email(message = "{usermodel.email.empty}")
	@Column(name="email",nullable = false,length = 65)
	private String email;
	
	@NotNull
	@Size(min = 10, max = 10,message = "{usermodel.contact.empty}")
	@Column(name="contact",nullable = false,length = 10)
	private String contact;
	
	@Lob
	@Column(name="profile")
	private byte[] image;
	
	@Transient
	private String base64image;
	
	@OneToMany(cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="user_id",referencedColumnName = "user_id") 
	
	private List<AddressModel> addressModel;
	 


	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		
		this.lastName = lastName;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		
		this.userName = userName;
	}


	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		
		this.password = password;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		
		this.gender = gender;
	}
	public String getHobby() {
		return hobby;
	}
	public void setHobby(String hobby) {
		
		this.hobby = hobby;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		
		this.email = email;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		
		this.contact = contact;
	}
	public String getDateofbirth() {
		return dateofbirth;
	}
	public void setDateofbirth(String dateofbirth) {
		
		this.dateofbirth = dateofbirth;
	}

	public byte[] getImage() {
		return image;
	}
	public void setImage(byte[] image) {
		this.image = image;
	}
	
	public String getBase64image() {
		return base64image;
	}
	public void setBase64image(String base64image) {
		this.base64image = base64image;
	}
	
	public List<AddressModel> getAddressModel() {
		return addressModel;
	}
	public void setAddressModel(List<AddressModel> addressModel) {
		this.addressModel = addressModel;
	}



}
