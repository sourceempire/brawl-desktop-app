import ancientSmallImage from 'assets/images/csgo-maps/de_ancient.jpg';
import ancientBigImage from 'assets/images/csgo-maps/de_ancient_big.jpg';
import cacheSmallImage from 'assets/images/csgo-maps/de_cache.jpg';
import cacheBigImage from 'assets/images/csgo-maps/de_cache_big.jpg';
import cbbleSmallImage from 'assets/images/csgo-maps/de_cbble.jpg';
import cbbleBigImage from 'assets/images/csgo-maps/de_cbble_big.jpg';
import creteSmallImage from 'assets/images/csgo-maps/de_crete.jpg';
import creteBigImage from 'assets/images/csgo-maps/de_crete_big.jpg';
import dust2SmallImage from 'assets/images/csgo-maps/de_dust2.jpg';
import dust2BigImage from 'assets/images/csgo-maps/de_dust2_big.jpg';
import grindSmallImage from 'assets/images/csgo-maps/de_grind.jpg';
import grindBigImage from 'assets/images/csgo-maps/de_grind_big.jpg';
import hiveSmallImage from 'assets/images/csgo-maps/de_hive.jpg';
import hiveBigImage from 'assets/images/csgo-maps/de_hive_big.jpg';
import infernoSmallImage from 'assets/images/csgo-maps/de_inferno.jpg';
import infernoBigImage from 'assets/images/csgo-maps/de_inferno_big.jpg';
import lakeSmallImage from 'assets/images/csgo-maps/de_lake.jpg';
import lakeBigImage from 'assets/images/csgo-maps/de_lake_big.jpg';
import mirageSmallImage from 'assets/images/csgo-maps/de_mirage.jpg';
import mirageBigImage from 'assets/images/csgo-maps/de_mirage_big.jpg';
import mochaSmallImage from 'assets/images/csgo-maps/de_mocha.jpg';
import mochaBigImage from 'assets/images/csgo-maps/de_mocha_big.jpg';
import nukeSmallImage from 'assets/images/csgo-maps/de_nuke.jpg';
import nukeBigImage from 'assets/images/csgo-maps/de_nuke_big.jpg';
import overpassSmallImage from 'assets/images/csgo-maps/de_overpass.jpg';
import overpassBigImage from 'assets/images/csgo-maps/de_overpass_big.jpg';
import shortdustSmallImage from 'assets/images/csgo-maps/de_shortdust.jpg';
import shortdustBigImage from 'assets/images/csgo-maps/de_shortdust_big.jpg';
import shortnukeSmallImage from 'assets/images/csgo-maps/de_shortnuke.jpg';
import shortnukeBigImage from 'assets/images/csgo-maps/de_shortnuke_big.jpg';
import trainSmallImage from 'assets/images/csgo-maps/de_train.jpg';
import trainBigImage from 'assets/images/csgo-maps/de_train_big.jpg';
import vertigoSmallImage from 'assets/images/csgo-maps/de_vertigo.jpg';
import vertigoBigImage from 'assets/images/csgo-maps/de_vertigo_big.jpg';

type MapName = string;

type CSGOMap = {
  name: MapName;
  displayName: string;
  imageUrl: { small: string; big: string };
};

// TODO -> Replace with stored information in db??
export const csgoMaps: { [key: MapName]: CSGOMap } = {
  de_ancient: {
    displayName: 'Ancient',
    name: 'de_ancient',
    imageUrl: { small: ancientSmallImage, big: ancientBigImage }
  },
  de_cache: {
    displayName: 'Cache',
    name: 'de_cache',
    imageUrl: { small: cacheSmallImage, big: cacheBigImage }
  },
  de_cbble: {
    displayName: 'Cobblestone',
    name: 'de_cbble',
    imageUrl: { small: cbbleSmallImage, big: cbbleBigImage }
  },
  de_crete: {
    displayName: 'Crete',
    name: 'de_crete',
    imageUrl: { small: creteSmallImage, big: creteBigImage }
  },
  de_dust2: {
    displayName: 'Dust II',
    name: 'de_dust2',
    imageUrl: { small: dust2SmallImage, big: dust2BigImage }
  },
  de_grind: {
    displayName: 'Grind',
    name: 'de_grind',
    imageUrl: { small: grindSmallImage, big: grindBigImage }
  },
  de_hive: {
    displayName: 'Hive',
    name: 'de_hive',
    imageUrl: { small: hiveSmallImage, big: hiveBigImage }
  },
  de_inferno: {
    displayName: 'Inferno',
    name: 'de_inferno',
    imageUrl: { small: infernoSmallImage, big: infernoBigImage }
  },
  de_mirage: {
    displayName: 'Mirage',
    name: 'de_mirage',
    imageUrl: { small: mirageSmallImage, big: mirageBigImage }
  },
  de_lake: {
    displayName: 'Lake',
    name: 'de_lake',
    imageUrl: { small: lakeSmallImage, big: lakeBigImage }
  },
  de_mocha: {
    displayName: 'Mocha',
    name: 'de_mocha',
    imageUrl: { small: mochaSmallImage, big: mochaBigImage }
  },
  de_nuke: {
    displayName: 'Nuke',
    name: 'de_nuke',
    imageUrl: { small: nukeSmallImage, big: nukeBigImage }
  },
  de_overpass: {
    displayName: 'Overpass',
    name: 'de_overpass',
    imageUrl: { small: overpassSmallImage, big: overpassBigImage }
  },
  de_shortdust: {
    displayName: 'Shortdust',
    name: 'de_shortdust',
    imageUrl: { small: shortdustSmallImage, big: shortdustBigImage }
  },
  de_shortnuke: {
    displayName: 'Shortnuke',
    name: 'de_shortnuke',
    imageUrl: { small: shortnukeSmallImage, big: shortnukeBigImage }
  },
  de_train: {
    displayName: 'Train',
    name: 'de_train',
    imageUrl: { small: trainSmallImage, big: trainBigImage }
  },
  de_vertigo: {
    displayName: 'Vertigo',
    name: 'de_vertigo',
    imageUrl: { small: vertigoSmallImage, big: vertigoBigImage }
  }
};
