import ancientImage from 'assets/images/csgo-maps/de_ancient.jpg';
import cacheImage from 'assets/images/csgo-maps/de_cache.jpg';
import cbbleImage from 'assets/images/csgo-maps/de_cbble.jpg';
import creteImage from 'assets/images/csgo-maps/de_crete.jpg';
import dust2Image from 'assets/images/csgo-maps/de_dust2.jpg';
import grindImage from 'assets/images/csgo-maps/de_grind.jpg';
import hiveImage from 'assets/images/csgo-maps/de_hive.jpg';
import infernoImage from 'assets/images/csgo-maps/de_inferno.jpg';
import mirageImage from 'assets/images/csgo-maps/de_lake.jpg';
import lakeImage from 'assets/images/csgo-maps/de_mirage.jpg';
import mochaImage from 'assets/images/csgo-maps/de_mocha.jpg';
import nukeImage from 'assets/images/csgo-maps/de_nuke.jpg';
import overpassImage from 'assets/images/csgo-maps/de_overpass.jpg';
import shortdustImage from 'assets/images/csgo-maps/de_shortdust.jpg';
import shortnukeImage from 'assets/images/csgo-maps/de_shortnuke.jpg';
import trainImage from 'assets/images/csgo-maps/de_train.jpg';
import vertigoImage from 'assets/images/csgo-maps/de_vertigo.jpg';

type MapName = string;

type CSGOMap = {
  name: MapName;
  displayName: string;
  imageUrl: string;
};

// TODO -> Replace with stored information in db??
export const csgoMaps: { [key: MapName]: CSGOMap } = {
  de_ancient: { displayName: 'Ancient', name: 'de_ancient', imageUrl: ancientImage },
  de_cache: { displayName: 'Cache', name: 'de_cache', imageUrl: cacheImage },
  de_cbble: { displayName: 'Cobblestone', name: 'de_cbble', imageUrl: cbbleImage },
  de_crete: { displayName: 'Crete', name: 'de_crete', imageUrl: creteImage },
  de_dust2: { displayName: 'Dust II', name: 'de_dust2', imageUrl: dust2Image },
  de_grind: { displayName: 'Grind', name: 'de_grind', imageUrl: grindImage },
  de_hive: { displayName: 'Hive', name: 'de_hive', imageUrl: hiveImage },
  de_inferno: { displayName: 'Inferno', name: 'de_inferno', imageUrl: infernoImage },
  de_mirage: { displayName: 'Mirage', name: 'de_mirage', imageUrl: mirageImage },
  de_lake: { displayName: 'Lake', name: 'de_lake', imageUrl: lakeImage },
  de_mocha: { displayName: 'Mocha', name: 'de_mocha', imageUrl: mochaImage },
  de_nuke: { displayName: 'Nuke', name: 'de_nuke', imageUrl: nukeImage },
  de_overpass: { displayName: 'Overpass', name: 'de_overpass', imageUrl: overpassImage },
  de_shortdust: { displayName: 'Shortdust', name: 'de_shortdust', imageUrl: shortdustImage },
  de_shortnuke: { displayName: 'Shortnuke', name: 'de_shortnuke', imageUrl: shortnukeImage },
  de_train: { displayName: 'Train', name: 'de_train', imageUrl: trainImage },
  de_vertigo: { displayName: 'Vertigo', name: 'de_vertigo', imageUrl: vertigoImage }
};
