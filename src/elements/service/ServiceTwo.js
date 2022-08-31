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
        description: 'Qoraal Tusaal ah. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum minima eligendi neque labore asperiores.'
    },
    {
        image: '/images/services/services-3.jpeg',
        title: 'Air Transport',
        description: 'Qoraal Tusaal ah. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum minima eligendi neque labore asperiores.'
    }
]

const ServiceTwo = ({textAlign, cardStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`card-box ${cardStyle} ${textAlign}`}>
                            <div className="inner">
                                <div className="image">
                                    <Link to="#service">
                                        <img src={`${val.image}`} alt="card Images" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <h3 className="title mb--20"><strong><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></strong></h3>
                                    <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                    <Link className="btn-default btn-small btn-border" to="#service">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceTwo;