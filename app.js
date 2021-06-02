const key = config.MY_KEY;

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
            const qry =  await fetch('https://api.thedogapi.com/v1/images/search?key='+key+'&size=thumb&format=json&has_breeds=true&order=RANDOM&page=0&limit=1')
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
            api: 'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1',
            apiCredit: '©POSTMAN',
            programmer: '©Mark Bryan Ladia'
        }
    }
})