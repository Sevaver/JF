 //Set up an associative array 
 //The keys represent Pick up Locations
 //The value is the multiplier for jumping
 //We use this this array when the user selects a Pick up point from the form
 var pickup_price= [];
 pickup_price["None"]=0;
 pickup_price["Amarr"]=1;
 pickup_price["O3Z5-G"]=1;
 pickup_price["U-Q96U"]=1.5;
 
 //Set up an associative array 
 //The keys represent Drop off Locations
 //The value is the multiplier for jumping
 //We use this this array when the user selects a Drop off point from the form
 var dropoff_price= [];
 dropoff_price["None"]=0;
 dropoff_price["Amarr"]=1;
 dropoff_price["O3Z5-G"]=1;
 dropoff_price["U-Q96U"]=1.5;
 
 

//This function finds the Pick up multiplier based on the 
//drop down selection
function getPickUpPrice()
{
    var PickUpPrice=0;
    var theForm = document.forms["jumpform"];
     var selectedPickUp = theForm.elements["pickup"];
    PickUpPrice = pickup_price[selectedPickUp.value];
    return PickUpPrice;
}


//This function finds the Drop off multiplier based on the 
//drop down selection
function getDropOffPrice()
{
   var DropOffPrice=0;
    var theForm = document.forms["jumpform"];
     var selectedDropOff = theForm.elements["dropoff"];
    DropOffPrice = dropoff_price[selectedDropOff.value];
    return DropOffPrice;
}

// This is for the M3 to Pick Up

function getM3Haul()
{
	var M3Haul=0;
	var theForm = document.forms["jumpform"];
	var inputM3Haul = theForm.elements["m3"]
	M3Haul = [inputM3Haul.value];
	return M3Haul;
}     

// This is for Collateral

function getCollateral()
{
	var Collateral=0;
	var theForm = document.forms["jumpform"];
	var inputCollateral = theForm.elements["collateral"]
	Collateral = [inputCollateral.value];
	return Collateral;
}

function calculateTotal()
{
    //Total price by calling function
    //Each function returns a number so by calling them we add the values they return together
	var jfBase = getPickUpPrice() * getDropOffPrice() * getM3Haul() * 1000;
	var jfColl = 10000000 + getCollateral() * 0.01;
	var jfReward = getPickUpPrice() * getDropOffPrice() * getM3Haul() * 1000 + getCollateral() * 0.01;
    //display the result

	
if (jfBase < 10000000 ) 
{   var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Reward for Jump Service is "+jfColl+" isk";
} else {
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Reward for Jump Service is "+jfReward+" isk";
}
}


function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}