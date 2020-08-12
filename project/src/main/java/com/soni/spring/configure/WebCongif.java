package com.soni.spring.configure;


import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.validation.Validator;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;
import org.springframework.web.servlet.view.freemarker.FreeMarkerViewResolver;

import com.soni.spring.Interceptors.AdminInterceptor;
import com.soni.spring.Interceptors.Interceptor;
import com.soni.spring.Interceptors.SessionInterceptor;
import com.soni.spring.Interceptors.UserInterceptor;


@Configuration
public class WebCongif extends WebMvcConfigurerAdapter{





	@Bean
	public CommonsMultipartResolver multipartResolver() {
	    return new CommonsMultipartResolver();
	}


	@Bean
	Interceptor demoInterceptor() {
		return new Interceptor();
	}
	
	@Bean
	AdminInterceptor adminInterceptor() {
		return new AdminInterceptor();
	}
	
	@Bean
	UserInterceptor userInterceptor() {
		return new UserInterceptor();
	}
	
	@Bean
	SessionInterceptor sessionInterceptor() {
		return new SessionInterceptor();
	}



	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(demoInterceptor()).addPathPatterns("/filter");;
		registry.addInterceptor(sessionInterceptor()).addPathPatterns("/","/login");
		registry.addInterceptor(adminInterceptor()).addPathPatterns("/admin");
		registry.addInterceptor(userInterceptor()).addPathPatterns("/user");
	}



	 @Bean
	   public MessageSource messageSource() {
	      ResourceBundleMessageSource source = new ResourceBundleMessageSource();
	      source.setBasename("messages");
	      return source;
	   }
	 
	 @Override
	   public Validator getValidator() {
	      LocalValidatorFactoryBean validator = new LocalValidatorFactoryBean();
	      validator.setValidationMessageSource(messageSource());
	      return validator;
	   }

	 
	 
}
