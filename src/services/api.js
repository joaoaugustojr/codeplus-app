/***
|*-------------------------------------------------------------------------*
| API.JS
| BASE URL DA API
|*--------------------------------------------------------------------------*
|
| VARIAVEL API DEFINE QUAL SER A URL BASE DA API QUE SERÁ CONSUMIDA
| ULTILIZANDO O SERVIÇO APISAUCE
|
|*--------------------------------------------------------------------------*
***/

import { create } from 'apisauce';

const api = create({ baseURL: 'http://10.0.2.2:80/api/' });

api.addResponseTransform((response) => {
	if (!response.ok) throw response;
});

export default api;

/* exemplo de chamada get

	componentDidMount = async () => {
		try {
			const response = await api.get('products');
			const products = '' + response.data[0]['name'];
			this.setState({ products });
		} catch (error) {
			const errorMessage = 'Erro na Conexão';
			this.setState({ errorMessage });
		}
	};

*/
