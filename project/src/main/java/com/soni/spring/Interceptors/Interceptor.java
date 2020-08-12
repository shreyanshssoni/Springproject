package com.soni.spring.Interceptors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.soni.spring.service.UserService;

public class Interceptor extends HandlerInterceptorAdapter
{

	@Autowired
	private UserService us;

	@Override
	public boolean preHandle(HttpServletRequest request,HttpServletResponse response, Object handler) throws Exception {
		
			
		String username = request.getParameter("username");
		String password = request.getParameter("password");

		if(username.equals("admin")) {
			response.sendRedirect("adminlogin");
			return false;
		}
		else {
			boolean user = us.userExist(username,password);		
			if(user == true) {
				return true;   
			} else {
				response.sendRedirect("login");		
				return false;
			}

		}
	}



	@Override
	public void postHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		
	}
}