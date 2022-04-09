import {useSession} from '@shopify/hydrogen';
export default function ServerComponent() {
  const {countryCode} = useSession();
  return <div>The country code: {countryCode}</div>;
}
