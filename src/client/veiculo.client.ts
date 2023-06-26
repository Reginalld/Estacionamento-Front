import { Veiculo } from "@/model/veiculo";
import axios, { AxiosInstance } from "axios";


export class VeiculoClient{


  private axiosClient: AxiosInstance;

  constructor() {
      this.axiosClient = axios.create({
          baseURL: 'http://localhost:8091/api/veiculo',
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

  public async listaAll(): Promise<Veiculo[]> {
    try {
        return (await this.axiosClient.get<Veiculo[]>(`/lista`)).data
    } catch (error:any) {
        return Promise.reject(error.response)
    }
}

public async cadastrar(veiculo: Veiculo): Promise<string> {
    try {
        return (await this.axiosClient.post<string>(``, veiculo)).data
    } catch (error:any) {
        return Promise.reject(error.response)
    }
}
public async editar(id: number, veiculo: Veiculo): Promise<string> {
    try {
        return (await this.axiosClient.put<string>(`/${id}`, veiculo)).data
    } catch (error:any) {
        return Promise.reject(error.response)
    }
}
public async delete(id: number): Promise<string> {
    try {
        return (await this.axiosClient.delete<string>(`/${id}`)).data
    } catch (error:any) {
        return Promise.reject(error.response)
    }
}
}

export default new VeiculoClient();