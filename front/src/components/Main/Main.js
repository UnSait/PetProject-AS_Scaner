import './Main.css';
import DescriptionContainer from '../DescriptionContainer/DescriptionContainer';
import ListRegions from '../ListRegions/ListRegions';
import Region from '../Region/Region';

import { useLocation, useParams } from 'react-router-dom'; 

function Main() {
  let location = useLocation();
  let { regNum } = useParams();

    return (
      <main className='main'>
        {location.pathname === '/' &&
          <DescriptionContainer />
        }
        {location.pathname === '/regions' &&
          <ListRegions />
        }
        {location.pathname === `/regions/${regNum}` &&        
          <Region />  
        }
      </main>
    );
  }
  
  export default Main;