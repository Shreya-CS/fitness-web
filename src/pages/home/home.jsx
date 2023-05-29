import FAQ from '../../components/FAQ'
import MainHeader from '../../components/MainHeader'
import Program from '../../components/Program'
import Values from '../../components/Values'

import './home.css'

const Home = () => {
    return (
        <>
            <MainHeader />
            <Program />
            <Values />
            <FAQ />
        </>
    )
}

export default Home
