import React, { useEffect, useState } from 'react';
import './App.css';
import NetflixSeries from './Netflix/NetflixSeries'; // Ensure this path is correct
import NetflixLogo from './Netflix/NetflixLogo'; // Import the NetflixLogo component
import BackgroundImage from './BackgroundImage'; // Import the BackgroundImage component

const series = [
  {
    "name": "The Crown",
    "img_url": "https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYSZm4PV_00bGPdQPIvuhydEHANcFn_-JXX04n4uHkI357GJePBtuKKWkJluk7dLU0ivWJmSyzBedgKpGQ8OZDeXdecLZhSYoXqr.jpg?r=ae3"
  },
  {
    "name": "Lovely Runner",
    "img_url": "https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYGiY-g6KdqsGCfUXFpfZ5MrCd-rteuPQj_N4eh9Qu2EcKAO45D5mDBaLXG5lwlYkoy490bUaV-tCAGT_Zsexpwf06izwkGiHHQg.jpg?r=3e3"
  },
  {
    "name": "Stranger Things",
    "img_url": "https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABer7SeWc6FvkBqWtk61GwL7rshAEVCOARQZVTEJGnLXykYBlO4nbbr6gs7M650BjULuaN6hucXKr5xY2iqPAajrxXd70HawdJeuD.jpg?r=608"
  },
  {
    "name": "The Witcher",
    "img_url": "https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABd4Uqxr5LY9_D8eZDiqOUHRttTWF7vXrcoPCtS3fjeQ7Rn7iX8cWdImKWWd9x0txaWiUBW0mOeDoiG0C9haj-4ROgoa3R5syQ7HT.jpg?r=051"
  },
  {
    "name": "Money Heist",
    "img_url": "https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaJJIdyKMNvEcWhAtI5Xk12MQLY8DLxAkM2k8unVHyRordNL9Jn726cLoEmP_DAn44vwE3_l9dWTpDQTvmzsk6REyj4veXm9bvQ8.jpg?r=e19"
  },
  {
    "name": "Squid Game",
    "img_url": "https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABW2vHT_kRiIFO3spVWZwdWkXcxqJNrqkwN9mRw8q-yiY0hi3ho64Ce5nh3QXG4F5oaEZUDNYCWK8y-aKlaUMEsTmOd3mOZwIfvEQ.jpg?r=0b1"
  },
  {
    "name": "Queen of Tears",
    "img_url": "https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSzRQqMaM5IXcrgrT64Qtp3AZmvJU3mEwpA3Kiegs_qP3hMdpLLRnSZ9mVlvg8R9nO4SikNpRCvjI1gv1dsY2U7PJ75G0-WjI3Kv.jpg?r=a5a"
  },
  {
    "name": "Breaking Bad",
    "img_url": "https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABV8pP_hX5sOH9RGR8eX6_bYjGskgV1nBuDaLOU7cAqihLmd5TXBfLwAdINBaoxFJoSLkGZf4W2FJlhrCtErxr8pEbYY6Gi8EQoF3.jpg?r=bb5"
  },
  {
    "name": "The Good Doctor",
    "img_url": "https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfMytAoTI7VBue9pR7PKbHc3qk6MFlmMj1K2y3-RtpH4g8G9G8D8ljNpxkUQv3ET5YoeADUNnAeZYhYnsbdmR4heBih6jDEZd3sD.jpg?r=33b"
  }
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % series.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="App">
      <BackgroundImage imageUrl={series[currentIndex].img_url} />
      <div className="NetflixLogo">
        <NetflixLogo />
      </div>
      <NetflixSeries />
    </div>
  );
};

export default App;
