import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
console.log(user);

const company = new Company();
console.log(company)

const mapDiv = document.getElementById('map');
const map = new CustomMap(mapDiv);
map.addMarker(user)
map.addMarker(company)


