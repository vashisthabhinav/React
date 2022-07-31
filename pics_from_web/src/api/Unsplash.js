import axios from 'axios';

/*The create method is going to create an instance of the Axios client with a couple of defaulted properties*/
export default axios.create({
    baseURL: ' https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID kB2Mro5ok8ejOMcnITvY2Nz2q-IKAxGobRiI2xrhx2o ',
    },
});