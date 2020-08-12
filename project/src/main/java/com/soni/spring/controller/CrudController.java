package com.soni.spring.controller;




import java.util.Base64;
import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import com.soni.spring.model.AddressDto;
import com.soni.spring.model.UserModel;
import com.soni.spring.service.UserService;



@Controller
public class CrudController {

	@Autowired
	private UserService us;
	
	

	//for Register User data
	@PostMapping("/save")      
	public String regform(@Valid UserModel um,BindingResult result,@RequestParam("file")CommonsMultipartFile file,Model m,@Valid AddressDto addressDto,BindingResult result2) {	
		
		um.setAddressModel(addressDto.getAddressmodel());
		
		if ((result.hasErrors()) || (result2.hasErrors())) {
			m.addAttribute("error", result);
			m.addAttribute("adderror",result2);
			m.addAttribute("user",um);
			return "registerForm";
		}

		um.setImage(file.getBytes());
		us.addUser(um);	
		return "redirect:/registersuccess";   
	} 
	

	
	
	//for Update User data
	@RequestMapping(value="/update",method = RequestMethod.POST)       
	public String updateForm(@Valid UserModel um,BindingResult result,@Valid AddressDto addressDto,BindingResult result2,String base64image,@RequestParam("file") CommonsMultipartFile file,Model m,HttpSession httpsession) {
			
		um.setAddressModel(addressDto.getAddressmodel());

		if ((result.hasErrors()) || (result2.hasErrors())) {
			m.addAttribute("error", result);
			m.addAttribute("adderror",result2);
			m.addAttribute("user",um);
			return "registerForm";
		}
				
		if(file.getSize() > 0) {	
			um.setImage(file.getBytes());
		} else {
			byte[] decodedBytes = Base64.getDecoder().decode(base64image);
			um.setImage(decodedBytes);
		}
		
		us.updateData(um);
		//checking editor is user or admin
		if(httpsession.getAttribute("login").equals("adminuser")) {
			return "redirect:/admin";
		} else {
		return "redirect:/user"; 
		}
	}
	
	

	

	@RequestMapping(value="/edit")
	public String editForm(Model m,String username,HttpSession httpsession) {		
		httpsession.setAttribute("edit", username);
		return "redirect:/editForm";   
	} 
	
	
	@RequestMapping("/editForm")       
	public String getUpdate(Model m,HttpSession httpsession) {	
		UserModel um = new UserModel();		
		um = us.showData((String) httpsession.getAttribute("edit"));	
		m.addAttribute("user",um);
		return "registerForm";
	}
	
	
	
	
	@RequestMapping("/adminlogin")       
	public String getAdmin(Model m,HttpSession httpsession) {
		httpsession.setAttribute("login","adminuser");	
		return "redirect:/admin";
	}
	
	
	@RequestMapping(value="/admin")
	public String goAdmin(Model m,HttpSession httpsession) {

		httpsession.setAttribute("login","adminuser");
		List<UserModel> list = us.getUserData();
		m.addAttribute("UserModel", list);
		return "admin";   

	}
	
	
	
	
	
	@RequestMapping("/user") 
	public String goUserprofile(Model m,UserModel um,HttpSession httpsession) {
			um = us.showData((String) httpsession.getAttribute("loginuser"));	
			m.addAttribute("user",um);
			return "user";
	}
	
	
	
	

	@RequestMapping("/filter")       
	public String showUser(Model m,String username,HttpSession httpsession) {	
		httpsession.setAttribute("login", "user");	
		httpsession.setAttribute("loginuser", username);
		return "redirect:/user";
	} 
	
	
	
	
	
	@RequestMapping(value="/deleteuser{userid}",method = RequestMethod.DELETE)   
	@ResponseBody
	public String delUser(@PathVariable("userid")Integer userid) {
		us.deleteUser(userid);
		return null;   
	}
	
	
	
	@RequestMapping(value="/userexist",method = RequestMethod.POST)   
	@ResponseBody
	public String existUser(@RequestParam("userid")int userid,@RequestParam("userName")String username) {
		boolean isuserexist = us.existUsername(userid,username);
		if(isuserexist == true) {
			return "This Username already registered please select another one";
		}else {
			return null;
		}  
	}
	
	
	
	@RequestMapping(value="/passwordfetch",method = RequestMethod.POST)   
	@ResponseBody
	public String getpassword(String username) {
		String password  = us.getPassword(username);		
		return password;	
	}
	
	
		   
}

