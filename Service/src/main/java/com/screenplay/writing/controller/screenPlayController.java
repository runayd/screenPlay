package com.screenplay.writing.controller;


import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

@Controller
public class screenPlayController {

  @RequestMapping({ "/runay"})
  public void index(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
   res.sendRedirect("http://localhost:9000/writenow/test");
  }

  @RequestMapping({ "/test"})
  public String index1() {
    System.out.println("inside test");
    return "forward:/index.html";
  }

  @CrossOrigin
  @RequestMapping(value="/response", method={RequestMethod.GET}, produces= APPLICATION_JSON)
  @ResponseBody
  public String response() throws JSONException {
    JSONObject obj=new JSONObject();
    obj.put("name","Runay");
    return  obj.toString();
  }
}
