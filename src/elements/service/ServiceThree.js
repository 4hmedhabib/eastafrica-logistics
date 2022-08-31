import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        image: '/images/services/services-1.jpeg',
        title: 'Road Transport',
        description: 'Qoraal Tusaal ah. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum minima eligendi neque labore asperiores.'
    },
    {
        image: '/images/services/services-2.jpeg',
        title: 'Sea Transport',
        description: 'Passages there are many variatin Lorem Ipsum available, but the majority have suffered. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum minima eligendi neque labore asperiores.'
    },
    {
        image: '/images/services/services-3.jpeg',
        title: 'Air Transport',
        description: 'Variations There are many of pass ages of Lorem Ipsum available, but the majority but the majority. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum minima eligendi neque labore asperiores.'
    }
]

const ServiceThree = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="inner">
                                <div className="image">
                                    <img src={`${val.image}`} alt="card Images" />
                                </div>
                                <div className="content">
                                    <h4 className="title"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                    <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceThree;