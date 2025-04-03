//import Button1 from "./components/ui/button"
//import Button2 from "./components/ui/button";
import FlightsListPage from "./components/FlightsListPage";
import SearchModal from "./components/SearchModalPage"
import { FlightProvider } from "./context/FlightSearchAmadeus"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FlightListProvider } from "./context/FlightList";
import FlightDetailsPage from "./components/FlightDetailsPage";
import { FlightsSorting } from "./context/FlightsSort";


import React from 'react';
import { Flex, Layout } from 'antd';

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  textAlign: 'center',
  color: '#fff',
  height: 80,
  padding: "0 32px",
  //paddingInline: 48,
  //lineHeight: '64px',
  backgroundColor: '#003580',
  fontSize: "20px",
  fontWeight: "bold"
};

const contentStyle: React.CSSProperties = {
    minHeight: "80vh",
    padding: "32px",
    //display: "flex",
  textAlign: 'center',
  //minHeight: 900,
  //lineHeight: '120px',
  justifyContent: "center",
  //alignItems: "center",
  color: '#333',
  backgroundColor: '#f5f5f5',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: "16px",
fontSize: "14px",
  color: '#fff',
  backgroundColor: '#003580',
};

const layoutStyle = {
  //borderRadius: 10,
//overflow: 'auto',
  width: '100vw',
  maxWidth: '100vw',
  minHeight: '100vh',
  display: "flex",
};

const App: React.FC = () => {

  return (
    <Router>
          <Flex gap="middle" wrap>
            <Layout style={layoutStyle}>
              <Header style={headerStyle}>
                <div>
                  Second Breakable Toy - Flight Search
                </div>
              </Header>

              <Content style={contentStyle}>
                
              <Routes>
                  <Route path="/" element={<FlightListProvider><FlightProvider><SearchModal /></FlightProvider></FlightListProvider>} />
                  <Route path="/flightsDisp" element={<FlightListProvider><FlightsSorting><FlightProvider><FlightsListPage /></FlightProvider></FlightsSorting></FlightListProvider>}/>
                  <Route path="/flightsDisp/details" element={<FlightListProvider><FlightProvider><FlightDetailsPage/></FlightProvider></FlightListProvider>}/>
              </Routes>

              </Content>

              <Footer style={footerStyle}>Amadeus REST API</Footer>
            </Layout>

          </Flex>
  </Router>
  );
};

export default App

/*
function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<FlightListProvider><FlightProvider><SearchModal /></FlightProvider></FlightListProvider>} />
      <Route path="/flightsDisp" element={<FlightListProvider><FlightsSorting><FlightProvider><FlightsListPage /></FlightProvider></FlightsSorting></FlightListProvider>}/>
      <Route path="/flightsDisp/details" element={<FlightListProvider><FlightProvider><FlightDetailsPage/></FlightProvider></FlightListProvider>}/>
    </Routes>
    </Router>
  )
}

export default App*/

