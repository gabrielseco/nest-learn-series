import * as data from './../data/films.json';
import { Migration } from './migration';

const migration: Migration = new Migration(<any>data);

migration.init();