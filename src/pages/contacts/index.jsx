import React from "react";
import { mockDataContacts , mockDataContactscolumns } from "../../data/mockData";
import MUITable from '../../components/MUITable';
import Header from "../../components/Header";
const Contacts = ({headerIsVisible,rowNum}) => {

  return (
    <div  className="m-4">
    <Header
    title="CONTACTS"
    subtitle="List of Contacts for Future Reference"
    isVisible={headerIsVisible}

    />
    <MUITable mockData={mockDataContacts} mockDatacolumns={mockDataContactscolumns} NOofrows={rowNum} minWe={400}/>
    </div>
  );
};

export default Contacts;
