import Header from "./Header";
import CardWithVideo from "./CardWithVideo";

const LandingPage = () => {
  return (
    <div style={{ width: '100%', padding: '5px', boxSizing: 'border-box' }}>
      <Header />
      <CardWithVideo
        title="Shree Siddhivinayak Mandir Live Darshan"
        videoURL="https://www.youtube.com/embed/live_stream?channel=UCNH47WOVuA2zkP2cP1sEynw"
      />
      <CardWithVideo
        title="Shree Somnath Mandir Live Darshan"
        videoURL="https://www.youtube.com/watch?v=_3mhms1D78g"
      />
      <CardWithVideo
        title="Shree Shirdi Sai Baba Mandir Live Darshan"
        videoURL="https://www.youtube.com/embed/live_stream?channel=UCgbNbIiypftakb4bsAAhTVw"
      />
      <CardWithVideo
        title="Shree Dwarakadhish Jee Live Darshan"
        videoURL="https://www.youtube.com/embed/live_stream?channel=UCBAvMHZO3BIfMMhOK9LMOYQ"
      />
    </div>
  );
}

export default LandingPage;
