const cachedApiCall = (time) => {
    const cache = {};
    return async (url, config = {}) => {
      const key = `${url}${JSON.stringify(config)}`;
      
      const entry = cache[key];
      
      if(!entry || Date.now() > entry.expiry){
        console.log("Making a fresh api call");
        
        try{
          let resp = await fetch(url, config);
          resp = await resp.json();
          cache[key] = {value: resp, expiry: Date.now() + time};
        } catch(e) {
          console.log("error while making api call", e);
        }
      }
      
      return cache[key].value;
    }  
  }