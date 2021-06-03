const app = new Vue({
    el: "#app",
    
    data(){
        return {
            appTitle: "Random Dog Breed",
            firstName: "",
            breedFor: "",
            temperament: "",
            picture: "",
        }
    },
    methods: {
        async getDog(){
            const qry =  await fetch('https://api.thedogapi.com/v1/images/search?key=499a6ae5-3cb0-4ca7-85c0-be11ffd429bd&size=thumb&has_breeds=true&order=RANDOM&limit=1')
            const data = await qry.json() 
            console.log(data[0])

            this.firstName = data[0].breeds[0].name,
            this.breedFor = data[0].breeds[0].bred_for,
            this.temperament = data[0].breeds[0].temperament,
            this.picture = data[0].url
        }
    }
})


const footer = new Vue({
    el:"#footer",
    data(){
        return{
            apiName: 'The Dog API',
            api: 'https://api.thedogapi.com/v1/images/search?size=thumb&mime_types=jpg&has_breeds=true&order=RANDOM&limit=1',
            apiCredit: '©POSTMAN',
            programmer: '©Mark Bryan Ladia'
        }
    }
})