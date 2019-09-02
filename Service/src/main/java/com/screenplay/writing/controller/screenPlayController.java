package com.screenplay.writing.controller;


import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

@Controller
public class screenPlayController {

  @CrossOrigin
  @RequestMapping(value="/response", method={RequestMethod.GET}, produces= APPLICATION_JSON)
  @ResponseBody
  public String response() throws JSONException {
    JSONObject obj=new JSONObject();
    obj.put("name","Runay");
    return  obj.toString();
  }
}
