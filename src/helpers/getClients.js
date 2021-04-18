import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const getClients = () => {
    const clients = ref([])
    const error = ref(null)
    const baseURI = 'http://localhost:3000/clients'

    const load = async () => {
        try {
            let res = await axios.get(baseURI)
            clients.value = res.data
        }

        catch (err) {
            console.log(err)
        }
       
    }
    return { clients, error, load }

}

export default getClients