import { Veiculo } from "@/model/veiculo";
import axios, { AxiosInstance } from "axios";


export class VeiculoClient{

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/veiculo',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Veiculo> {
        try {
            return (await this.axiosClient.get<Veiculo>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }  

    public async findActiveCondutores(ativo: boolean): Promise<Veiculo[]> {
        try {
          return (await this.axiosClient.get<Veiculo[]>(`/ativos/${ativo}`)).data;
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      }

    public async ListaCompleta(): Promise<Veiculo[]> {
        try {
            return (await this.axiosClient.get<Veiculo[]>('/')).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(veiculo: Veiculo): Promise<void> {
		try {
			return (await this.axiosClient.post('/', veiculo))
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

    public async editar(veiculo: Veiculo): Promise<void> {
		try {
			return (await this.axiosClient.put(`/${veiculo.id}`, veiculo)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

    public async deletaCondutor(veiculo: Veiculo): Promise<void> {
        try {
          return (await this.axiosClient.delete(`/deletaCondutor/${veiculo.id}`, { data: veiculo })).data;
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      }


}