package com.gurnoorhira.rest.basic.auth;

public class AuthenticationBean {

	private String message;

	public AuthenticationBean(String message) {
		this.message = message;
		// TODO Auto-generated constructor stub
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return String.format("HelloWorldBean [message =%s]", message);
	}

	public String getMessage() {
		return message;
	}
	

}
