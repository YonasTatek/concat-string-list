var add_array=require('add-array');
var sum = "";
var flag_default={
  add:"",
  only_number:false,
  only_string:false,
}

module.exports = function concat_string_list(flag=flag_default) {

  if(flag?.only_number){
    
    return add_array;
  }
  if(flag?.only_string)
  {
   
    if(typeof flag?.add=="string")
    { 
    
  
      flag_default=flag;
    return concat_string_operation_only;
    }
    else{
     
      return concat_string_operation_only;
    }

  }
  
  if(typeof flag?.add=="string")
  { 

    flag_default=flag;
  return concat_string_operation;
  }
  else{
    return concat_string_operation;
  }
};

function concat_string_operation(...array) {
  sum = "";

  if (array) concat_string(...array);
   return sum;
};
var concat_string = (...array) => {
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" || typeof array[i] === "string" ) {
    
      if(sum===""){
      sum=""+array[i];
    
 
  }

      else
      sum=sum+flag_default.add+array[i];
    
    }
    
    if (typeof array[i] === "object") concat_string(...array[i]);
  }
};




function concat_string_operation_only(...array) {
  sum = "";
  
  if (array) string_only(...array);


  return sum;
};

var string_only= (...array) => {
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "object") string_only(...array[i]);
    if (typeof array[i] === "string" ) {
      
      
      if(sum===""){
       
      sum=""+array[i];
    
  }

      else{
     
      sum=sum+flag_default.add+array[i];
    }
   
    }
    
    
  }
};


