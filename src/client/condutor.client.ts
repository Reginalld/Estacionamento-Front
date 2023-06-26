import { Condutor } from "@/model/condutor";
import axios, { AxiosInstance } from "axios";


export class CondutorClient{

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/condutor',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Condutor> {
        try {
            return (await this.axiosClient.get<Condutor>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }  

    public async findActiveCondutores(ativo: boolean): Promise<Condutor[]> {
        try {
          return (await this.axiosClient.get<Condutor[]>(`/ativos/${ativo}`)).data;
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      }

    public async ListaCompleta(): Promise<Condutor[]> {
        try {
            return (await this.axiosClient.get<Condutor[]>('/')).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(condutor: Condutor): Promise<void> {
		try {
			return (await this.axiosClient.post('/', condutor))
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

    public async editar(condutor: Condutor): Promise<void> {
		try {
			return (await this.axiosClient.put(`/${condutor.id}`, condutor)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

    public async deletaCondutor(condutor: Condutor): Promise<void> {
        try {
          return (await this.axiosClient.delete(`/deletaCondutor/${condutor.id}`, { data: condutor })).data;
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      }


}