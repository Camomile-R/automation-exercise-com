import { defineConfig } from 'cypress'
import siteData from "./cypress/pages/allDataSite";

const theSiteData = new siteData();

export default defineConfig({e2e: {baseUrl: theSiteData.meta.URL}});
