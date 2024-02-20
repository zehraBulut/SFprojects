trigger accountTrigger on Account (before update) {

//bır account update oldgu zaman,rating='Hot' ıse,onun AN.R=1000000
//                               rating = Warm oldgunda A.R = 2000000 olcak

    for(Account ac : Trigger.new){
        if( ac.Rating == 'Hot'){
            ac.AnnualRevenue = 1000000;
        }
    }
    
    for(Account ac : Trigger.newMap.values()){ //ID varsa ona karslk gelen  accountu bulmak ıcın map kulanmalıyım
           if( ac.Rating == 'Warm'){
            ac.AnnualRevenue = 2000000;
        }
        
      ac.Description = 'Keyset : ' + Trigger.NewMap.keySet() + 'Values : ' + Trigger.NewMap.values();
    }
    
            
}