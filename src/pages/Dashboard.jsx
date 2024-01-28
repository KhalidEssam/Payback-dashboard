
import React from 'react';
// import Chart from './chart';
// import LineChart from "../components/linechart";
// import PieChart from '../components/PieChart';
// import BarChart from '../components/BarChart'
// import Invoice from "./Invoice/index";
// import Team from "./Team/index";
// import Contacts from './contacts/index';
import DashboardWidget from "../components/DashboardWidget";
import AnalysisWidget from "../components/AnalysisWidget";

const Dashboard = () => {

return (
    <div className=" m-4 ">
        <h1 className="h1 fw-bold ">Dashboard</h1>
        {/* <div className="h3">
                Some of our tables data
        </div> */}
        <div className="col-12">
            <div className="row row-cards m-2 p-2">
                <DashboardWidget title="Orders" to="/ecommerce/orders"
                backgroundColor="rgb(50, 197, 210)" 
                icon={<i className="icon fas fa-users me-n2" 
                style={{ opacity: 0.5 }}></i>} count={53} />
                <DashboardWidget title="Products" 
                to="/ecommerce/products" 
                backgroundColor="rgb(18, 128, 245)" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" 
                className="icon icon-tabler icon-tabler-shopping-cart" 
                width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
                stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 17h-11v-14h-2"></path><path d="M6 5l14 1l-1 7h-13"></path></svg>} count={65} />
                <DashboardWidget title="Customers" 
                to="http://localhost:3000/customers" backgroundColor="rgb(117, 182, 249)" icon={<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path></svg>} count={11} />
                <DashboardWidget title="Reviews" 
                to="http://localhost:3000/reviews" backgroundColor="rgb(7, 79, 157)" icon={<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path><path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path></svg>} count={491} />
            </div>
            
        </div>
        {/* <div className="col-12">
            <div className=" d-xl-flex d-block flex-wrap  overflow-auto">
            
                <Contacts headerIsVisible={true} rowNum={5}/>
                <Invoice headerIsVisible={true} rowNum={5}/>
                <Team headerIsVisible={true} rowNum={5}/>
            </div>
        </div> */}
        


        {/* <div className="h3 d-block p-4">
                Some of our interesting charts
        </div> */}
        {/* <div className="col-12">

            <div className=" d-xl-flex d-block justify-content-center flex-wrap  " >
                <Chart
                        XChart={PieChart }
                        Title="Pie Chart"
                        Subtitle="Simple Pie Chart"
                />
                <Chart
                        XChart={BarChart }
                        Title="Bar Chart"
                        Subtitle="Simple Bar Chart"
                />
                <Chart
                    XChart={LineChart }
                    Title="Line Chart"
                    Subtitle="Simple Line Chart"
                />
            </div>
        </div> */}

        <div className="col-12">
            <div id="list_widgets" className="row row-cards m-2 p-2" data-bb-toggle="widgets-list">
            <AnalysisWidget id="widget_analytics_general" title="Site Analytics" columnWidth="widget-item col-12 d-flex"/>
            <div className="mb-3 col-12"></div>
            <AnalysisWidget id="widget_analytics_page" title="Top Most Visit Pages"  />
            <AnalysisWidget id="widget_analytics_browser" title="Top Browsers" />
            <div className="mb-3 col-12"></div>
            <AnalysisWidget id="widget_analytics_referrer" title="Top Referrers" />
            <AnalysisWidget id="widget_posts_recent" title="Recent Posts"  />
            </div>
    </div>

    </div>
    )
}



export default Dashboard