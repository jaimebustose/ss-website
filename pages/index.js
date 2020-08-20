import Sections from '../components/Sections';
import HeadTag from '../components/HeadTag';
import FacebookMessenger from '../components/messenger/messenger';

const index = () => (
  <div>
    <HeadTag
      title={'ScaleSoft'}
      description={
        'ScaleSoft, generación de soluciones tecnológicas y software a medida'
      }
    />
    {/* <FacebookMessenger /> */}
    <Sections />
  </div>
);

export default index;
