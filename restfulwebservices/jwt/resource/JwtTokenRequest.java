package com.gurnoorhira.restful.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;
    
//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTY2MjM5MTU2MSwiaWF0IjoxNjYxNzg2NzYxfQ.w3M3kNJ98Jb1RhGsr3H6yt2lGMyym6jFolh7VOgk0t4ILcu-1Q_K0zwXfu6dIYc7QnFzu3iLggXJdhe7dFmkCA"
//    }


    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

