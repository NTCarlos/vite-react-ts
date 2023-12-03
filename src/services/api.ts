import axios from 'axios';
import { factModel } from '../models/factModel';
import appSettings from '../utils/appSettings';

const FACT_URL = appSettings.factUrl;

export async function getCatFacts(): Promise<factModel>{
  const res = await axios({
    method: 'GET',
    url: FACT_URL,
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return await res.data;
}