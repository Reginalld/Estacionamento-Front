import { Movimentacao } from "@/model/movimentacao";
import axios, { AxiosInstance } from "axios";

export class MovimentacaoClient{


    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/movimentacao',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Movimentacao> {
        try {
            return (await this.axiosClient.get<Movimentacao>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }  

    public async findActiveCondutores(ativo: boolean): Promise<Movimentacao[]> {
        try {
          return (await this.axiosClient.get<Movimentacao[]>(`/ativos/${ativo}`)).data;
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      }

    public async ListaCompleta(): Promise<Movimentacao[]> {
        try {
            return (await this.axiosClient.get<Movimentacao[]>('/')).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(movimentacao: Movimentacao): Promise<void> {
		try {
			return (await this.axiosClient.post('/', movimentacao))
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

    public async editar(movimentacao: Movimentacao): Promise<void> {
		try {
			return (await this.axiosClient.put(`/${movimentacao.id}`, movimentacao)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

    public async deletaCondutor(movimentacao: Movimentacao): Promise<void> {
        try {
          return (await this.axiosClient.delete(`/deletaCondutor/${movimentacao.id}`, { data: movimentacao })).data;
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      }

}