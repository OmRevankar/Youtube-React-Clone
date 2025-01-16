import React, { useContext, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import { SidebarContext } from '../App'

const Home = () => {

  const {sidebar,setSidebar} = useContext(SidebarContext);
  const[category,setCategory] = useState(0);

  return (
    <div>
      <Sidebar setCategory={setCategory} category={category} />
      <div className={sidebar ? 'py-5 pl-5 sample:pl-[255px] overflow-y-hidden' : 'py-5 pl-5 sample:pl-[110px] overflow-hidden'}>
        <Feed category={category} />
      </div>
    </div>
  )
}

export default Home
