import React from 'react';
import "./Services.css";
import { getServiceCategories,getServicesForCategory } from './ServicesUtils';

class Services extends React.Component {

  constructor(props) {
    super(props);
    this.state = {category: "",
                  services: [],
                  servicesForCategory: []
                  };
  }

  handleClick (category,services) {
    
    this.setState({category: category});
    this.setState({servicesForCategory: getServicesForCategory(services,category)});
    console.log(this.state.servicesForCategory)
  }

  render() {

  function ListItemRenderer(props) {
    return (
      <ul>
        {props.items.map((item) => 
              <li key={item.toString()}>{item}</li>
        )}
        </ul>
    );
  }

  const services = JSON.parse(localStorage.getItem("servicesparis"));
  const categories = getServiceCategories(services);
  const listCategories = categories.map((category) => 
    <li key={category.toString()}  onClick={this.handleClick.bind(this, category,services)}>
      {category}
    </li>
  );



    return (

      <div className="pricelist-container">
      
        <ul>
          {listCategories}
        </ul>


            <ListItemRenderer items={this.state.servicesForCategory} />


      </div>


    )
  }

}
export default Services;