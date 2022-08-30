import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <div className="top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="flat-infomation">
                                <li className="phone">Call us: <Link to="+61383766284" title="phone">+252 63 000 0000</Link></li>
                                <li className="email">Email: <Link to="mailto:support24-7@gmail.com" title="email">support@eastafricalogistics.com</Link></li>
                            </ul>
                            <div className="flat-questions">
                                <Link to="/" title="" className="questions">Have any questions?</Link>
                                <Link to="/" title="" className="appointment">Make A Shipment</Link>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
		    </div>
  )
}

export default TopBar