import React from 'react'
import RootLayout from '../layout'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/totalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const loggedIn = { firstName: 'Nihal', lastName: 'Kumar', email: 'nihal7u@gmail.com'};

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user= {loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your accounts and transactions efficiently.'
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1235.34}
          />

        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.23}, {currentBalance: 231.21}]}
      />
    </section>
  )
}

export default Home;