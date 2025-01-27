import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { Header } from '../../components/header/Header'

import "./home.css"
import { Featured } from '../../components/featured/Featured'
import { FeaturedProperties } from '../../components/featuredProperties/FeaturedProperties'
import { MailList } from '../../components/mailList/MailList'
import { Footer } from '../../components/footer/footer'
import { PropertyList } from '/src/components/propertyList/propertyList';




const Home = ()=> {
    return (
        <div className='test'>
            <Navbar />
            <Header/>
            <div className="homeContainer">
               <Featured/>
               <h1 className ="homeTitle"> Browse by property type </h1>
               <PropertyList/>
               <FeaturedProperties/>
               <MailList/>
               <Footer/>

            </div>
        </div>
    )
}

export default Home