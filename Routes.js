import React from 'react'
import { Router, Scene, Actions, Tabs, MediaNavBar } from 'react-native-router-flux'
import Home from './pages/Home.js'
import Add from './pages/Add.js'
import Done from './pages/Done.js'

const Routes = () => (
   <Router>
      <Scene key="root" title="Tasks">
         <Tabs
            key="mediaContainerTabs"
            swipeEnabled
            showLabel={true}
            tabBarPosition='top'
            activeBackgroundColor="white"
            navBar={MediaNavBar}
            tabBarStyle={{ backgroundColor: "white" }}
            labelStyle={{ color: "#555" }}
            indicatorStyle={{ backgroundColor: "#5DABFF" }}
            lazy
            headerMode="screen"
            wrap={false}
         >
            <Scene key="home" component={Home} title="Tasks List" initial={true} />
            <Scene key="done" component={Done} title="Tasks Done" />
         </Tabs>

         <Scene key="add" component={Add} title="Add Task" />
      </Scene>
   </Router>
)
export default Routes