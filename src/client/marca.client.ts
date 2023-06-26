import { Marca } from "@/model/marca";

import axios, { AxiosInstance } from "axios";


export class MarcaClient{

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/marca',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Marca> {
        try {
            return (await this.axiosClient.get<Marca>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }  

    public async findActiveCondutores(ativo: boolean): Promise<Marca[]> {
        try {
          return (await this.axiosClient.get<Marca[]>(`/ativos/${ativo}`)).data;
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      }

    public async ListaCompleta(): Promise<Marca[]> {
        try {
            return (await this.axiosClient.get<Marca[]>('/')).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(marca: Marca): Promise<void> {
		try {
			return (await this.axiosClient.post('/', marca))
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

    public async editar(marca: Marca): Promise<void> {
		try {
			return (await this.axiosClient.put(`/${marca.id}`, marca)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

    public async deletaCondutor(marca: Marca): Promise<void> {
        try {
          return (await this.axiosClient.delete(`/deletaCondutor/${marca.id}`, { data: marca })).data;
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      }


}

