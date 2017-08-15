export function getServiceCategories ( services ) {
	var categories = [];
	services.forEach(function (service) 
	{
	  if ( !categories.includes(service["category_name"]) ) {
	  	if(service["category_name"]) {
	  		categories.push(service["category_name"]);
	  	}
	  }
	});
	return categories;
}

export function getServicesForCategory ( services, category ) {
	var result = [];
	services.forEach(function (service) {
	  if ( service["category_name"] === category) {
	  	if(service["category_name"]) {
	  		result.push(service.service_name);
	  	}
	  	
	  }
	});
	return result;
}