# thunder-bear-builds-landing-page
Landing Page for ThunderBearBuilds.net

## A quasai walk through

Preface:  I am doing this truely the cloud native way.  Nearly 99% of this if not 100% of this is done via the Google Cloud Shell and Cloud Editor.  For those that don't know the Cloud Editor is just MS VScode but on GCP.

1. install [vite.js](https://vitejs.dev/) `npm install vite`
2. Initialize project with `npm init vite` selecting Vanilla Javascript and Vanilla Javascript typing, no typescript
3. Follow the promt `npm install`, `npm run dev`
4. adding firebase tooling `npm install -g firebase-tools`
5. I also had to add manually the `vite.config.js` file
6. Firebase set up, since I already have a billable Google Cloud account set up was very easy and all my user data and Google Cloud Project data was there
7. From the docs [vite.js static deployment](https://vitejs.dev/guide/static-deploy#google-firebase) add in `firebase.json` and `.firebaserc`

## Pivoting

While digging through the docs at [vitejs.dev](https://vitejs.dev/guide/static-deploy), I quickly discovered that I will have to change things around.  My initial plan was to get this vite.js app running, wrap it in a docker container (nginx), the image ready for Google Artifact Registry and finish up configuring Google Cloud Run, then wrap all that toil in a Github Actions CI/CD pipeline.

Well, since I am already using Google Cloud, I am going to switch to Google Firebase.  Which is fine as I had been wanting to use Firebase for some time and then check out some material from the mad lads over at [fireship.io](https://fireship.io/).

## TODO

* FIGURE OUT WHY VITE IS STUPID!
* We gotta build and test the dockerfile chatGPT gave us.
* Then we gotta push the image to the container Registery
* then we gotta deploy the image to Cloud Run
* once we verify all that we can then wrap all of this manual labor in a CI/CD Pipeline
* we already have a service account with a JSON Key and that Key is already in the repo
* we will just need to then built the GitHub Actions config file together and test
* lastly we will need map the domainname to the cloud run endpoint.