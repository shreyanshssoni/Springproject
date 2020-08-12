package com.soni.spring.controller;



import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;




@Controller  
public class LoginController {  

	
	
	@RequestMapping("/")    
	public String login() {		 	
		return "login";   
	}
	
	
	@RequestMapping("/login")    
	public String getBack(HttpSession httpsession) {
		return "login";
	}
	
	
	@RequestMapping("/logout")    
	public String getLogout(HttpSession httpsession) {	
		httpsession.removeAttribute("login");
		httpsession.invalidate();
		return "redirect:/login";   
	}



	@RequestMapping("/registerform")    
	public String registerform() {
		return "registerForm";   
	}

	@RequestMapping("/forgotpassword")    
	public String forgotpassword() {		 		 
		return "forgotpassword";		
	} 
	
	@RequestMapping("/registersuccess")    
	public String getLogin(Model m) {	
		m.addAttribute("success", "Registered successfull");
		return "login";		
	} 
	
	


}