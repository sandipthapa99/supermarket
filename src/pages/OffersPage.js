import Offers from '../components/Offers';
import { Helmet } from 'react-helmet';

function OffersPage(){
    return(
        <div>
            <Helmet>
                <title>Supermarket | Offers</title>
			</Helmet>
            <Offers/>
        </div>
    );
}
export default OffersPage;