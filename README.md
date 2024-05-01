# thunder-bear-builds-landing-page
Landing Page for ThunderBearBuilds.net

## A quasai walk through

Preface:  I am doing this truely the cloud native way.  Nearly 99% of this if not 100% of this is done via the Google Cloud Shell and Cloud Editor.  For those that don't know the Cloud Editor is just MS VScode but on GCP.

1. install [vite.js](https://vitejs.dev/) `npm install vite`
2. Initialize project with `npm init vite` selecting Vanilla Javascript and Vanilla Javascript typing, no typescript
3. Follow the promt `npm install`, `npm run dev`


## TODO

* We gotta build and test the dockerfile chatGPT gave us.
* Then we gotta push the image to the container Registery
* then we gotta deploy the image to Cloud Run
* once we verify all that we can then wrap all of this manual labor in a CI/CD Pipeline
* we already have a service account with a JSON Key and that Key is already in the repo
* we will just need to then built the GitHub Actions config file together and test
* lastly we will need map the domainname to the cloud run endpoint.