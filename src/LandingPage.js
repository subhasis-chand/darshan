import Header from "./Header";
import SomnathTempleIcon from './Assets/somnathtemple.jpeg'
import CardWithVideo from "./CardWithVideo";

const LandingPage = () => {
  return (
    <div style={{ width: '100%', padding: '5px', boxSizing: 'border-box' }}>
      <Header />
      <CardWithVideo 
      iconImage={SomnathTempleIcon}
      title="Sri Somnath Temple Live Darshan"
      subheader="September 14, 2016"
      videoURL="https://www.youtube.com/embed/h4cYkgPnYQk"
      description='Somnath Temple, located in Gujarat, India, is one of the oldest and most revered temples dedicated to Lord Shiva. Its history dates back to antiquity, with references found in ancient texts like the Puranas. Despite facing numerous invasions and destructions over the centuries, the temple has been rebuilt multiple times and continues to stand as a symbol of resilience and devotion.'
      />
    </div>
  );
}

export default LandingPage;
