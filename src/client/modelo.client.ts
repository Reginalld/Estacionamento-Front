import { Modelo } from "@/model/modelo";
import axios, { AxiosInstance } from "axios";


export class ModeloClinet{


    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/modelo',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Modelo> {
        try {
            return (await this.axiosClient.get<Modelo>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }  

    public async findActiveCondutores(ativo: boolean): Promise<Modelo[]> {
        try {
          return (await this.axiosClient.get<Modelo[]>(`/ativos/${ativo}`)).data;
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      }

    public async ListaCompleta(): Promise<Modelo[]> {
        try {
            return (await this.axiosClient.get<Modelo[]>('/')).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(modelo: Modelo): Promise<void> {
		try {
			return (await this.axiosClient.post('/', modelo))
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

    public async editar(modelo: Modelo): Promise<void> {
		try {
			return (await this.axiosClient.put(`/${modelo.id}`, modelo)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

    public async deletaCondutor(modelo: Modelo): Promise<void> {
        try {
          return (await this.axiosClient.delete(`/deletaCondutor/${modelo.id}`, { data: modelo })).data;
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      }
    
}