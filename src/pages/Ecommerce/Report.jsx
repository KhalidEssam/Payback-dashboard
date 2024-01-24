// import Header from "../../components/Header";
import React from 'react';
import LineChart from "../../components/linechart";
import PieChart from '../../components/PieChart';
import BarChart from '../../components/BarChart'
import Chart from '../chart/index';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InventoryIcon from '@mui/icons-material/Inventory';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleIcon from '@mui/icons-material/People';

import AnalyticCard from "./Widgets componets/Widgets";
import Invoice from "../Invoice/index";
import Widget  from '../../components/InquiryWidget'

const EcommerceReport = () => {



const exampleData3 = {
icon: ( <PeopleIcon  style={{ fontSize: 50 }}/>),
title: 'Users',
amount: '123',
increase: '15%',
};

const exampleData1 = {
icon: ( <AttachMoneyIcon  style={{ fontSize: 50 }}/>),

title: 'Sales',
amount: '$50,000',
increase: '10%',
};

const exampleData2 = {
icon: ( <InventoryIcon  style={{ fontSize: 50 }}/>),

title: 'Products',
amount: '350',
increase: '25%',
};

const exampleData4 = {
icon: ( <ThumbUpIcon   style={{ fontSize: 50 }}/>),
title: 'Likes',
amount: '789',
increase: '30%',
};



return (
    <div className="m-4">

        <div className="h1"> Ecommerce Report</div>
            <div className="col-12">
                <div className="row row-cards">
                    <div className="widget-item col-md-3">
                        <AnalyticCard data={exampleData1} />
                    </div>
                    <div className="widget-item col-md-3">
                        <AnalyticCard data={exampleData2} />
                    </div>
                    <div className="widget-item col-md-3">
                        <AnalyticCard data={exampleData3} />
                    </div>
                    <div className="widget-item col-md-3">
                        <AnalyticCard data={exampleData4} />
                    </div>

                <div className=" d-xl-flex d-block justify-content-center flex-wrap  " >
                    <Chart className="widget-item col-md-6"
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
            </div>
        </div>
        

        <Invoice headerIsVisible={false} />            


        <div className='col-12 d-flex flex-wrap'>
            <Widget className=" mr-2"  title="Top Selling Products" tableId="widget1-table" />
            <Widget  title="Trending Products" tableId="widget2-table" />
        </div>
    
    </div>
)

}

export default EcommerceReport