function getMembershipPerks(mLevel) {
    switch(mLevel){
      
        case "gold":  console.log('Unlimited Free Plays');break;
        case "silver": console.log('VIP Room Access');break;
        case "bronze" : console.log( 'VIP Room Access on Weekdays');break;
        default : console.log('Invalid membership level');break;
          
      }
      
    }
    
    getMembershipPerks('gold');
    