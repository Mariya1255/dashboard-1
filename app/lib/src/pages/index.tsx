import {roboto} from '../fonts';

export default function Home() {
  return (
    <div className={`${roboto.className} custom-class another-class bg-gray-100 p-4`}>
      <p>Yahan apka content hoga, aur yeh font applied hoga.</p>
    </div>
  );
}
